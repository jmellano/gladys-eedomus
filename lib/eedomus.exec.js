var Promise = require('bluebird');
var request = require('request');
var rp = require('request-promise');


module.exports = function exec(options) {
    return execEedomus(options);

    function getParameter() {
        const user = gladys.param.getValue("EEDOMUS_USER");
        const token = gladys.param.getValue("EEDOMUS_SECRET");
        const host = gladys.param.getValue("EEDOMUS_HOST");

        return Promise.all([user, token, host]).then(function(values) {
            return Promise.resolve(values);
        });
    }

    function execEedomus(options) {
        return getParameter().then((result) => {
            const [user, token, host] = result;
            const hostAndApi = host.includes('api') ? host : host + "/api"; 

            const value = options.state.value === 0 ? options.deviceType.min : options.deviceType.max;
            const listPeripherique = "http://" + hostAndApi + "/set?action=periph.value&periph_id=" + options.deviceType.identifier + "&value=" + value + "&api_user=" + user + "&api_secret=" + token;
            return rp(listPeripherique).then(function(result) {
                return Promise.resolve(JSON.parse(result));
            });

        });

    }
}