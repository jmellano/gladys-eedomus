var Promise = require('bluebird');
var request = require('request');
var rp = require('request-promise');


module.exports = function getDeviceInformations(param) {
    return retrieveEedomusDeviceInformations(param.id)
        .then((eedomusInformations) => mergeEedomusInformationToGladysOne(param.id, eedomusInformations))
        .then(function(result) {
            return result;
        });

    function getParameter() {
        const user = gladys.param.getValue("EEDOMUS_USER");
        const token = gladys.param.getValue("EEDOMUS_SECRET");
        const host = gladys.param.getValue("EEDOMUS_HOST");

        return Promise.all([user, token, host]).then(function(values) {
            return Promise.resolve(values);
        });
    }

    function retrieveEedomusDeviceInformations(id) {
        return getParameter().then((result) => {
            const [user, token, host] = result;

            const devicesInformations = "http://" + host + "/api/get?action=periph.value_list&periph_id=" + id + "&api_user=" + user + "&api_secret=" + token;
            return rp(devicesInformations).then(function(result) {
                return Promise.resolve(JSON.parse(result));
            });

        });
    }

    function mergeEedomusInformationToGladysOne(id, eedomusInformations) {
        var options = {
            identifier: id,
            service: 'eedomus'
        };
        return gladys.device.getByIdentifier(options)
            .then(function(device) {
                return {
                    'gladysInformations': {
                        'exist': true,
                    },
                    'eedomusInformations': eedomusInformations
                };
            })
            .catch(function(e) {
                return {
                    'gladysInformations': {
                        'exist': false,
                    },
                    'eedomusInformations': eedomusInformations
                };
            })

    }
}