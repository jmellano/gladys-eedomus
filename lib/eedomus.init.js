var queries = require('./eedomus.queries.js');
var Promise = require('bluebird');
var rp = require('request-promise');

module.exports = function init() {

    return setInterval(function() {
        updateSensors()
    }, 30 * 1000);

    async function getParameter() {
        const user = gladys.param.getValue("EEDOMUS_USER");
        const token = gladys.param.getValue("EEDOMUS_SECRET");
        const host = gladys.param.getValue("EEDOMUS_HOST");

        return Promise.all([user, token, host]).then(function(values) {
            return Promise.resolve(values);
        });
    }

    async function updateSensors() {
        const [user, token, host] = await getParameter();
        const hostAndApi = host.includes('api') ? host : host + "/api"; 

        gladys.utils.sql(queries.getDeviceByServiceAndByDeviceSensor, ["eedomus"])
            .then(function(sensors) {
                sensors.forEach(sensor => {
                    const statusUrl = "http://" + hostAndApi + "/get?action=periph.caract&periph_id=" + sensor.eedomus_id + "&api_user=" + user + "&api_secret=" + token;
                    return rp(statusUrl).then(function(result) {
                        const lastValue = JSON.parse(result).body.last_value;
                        const lastValueDatetime = JSON.parse(result).body.last_value_change;

                        gladys.deviceType.getById(sensor)
                            .then(function(deviceType) {
                                var state = {
                                    value: parseFloat(lastValue),
                                    datetime: lastValueDatetime,
                                    devicetype: deviceType.id
                                };

                                gladys.deviceState.create(state)
                                    .then(function(result) {
                                        return Promise.resolve();
                                    });

                            });
                    });

                });
            });

    }

}