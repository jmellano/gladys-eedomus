module.exports = function getDevices() {
    var options = {
        service: 'eedomus'
    };
    return gladys.device.getByService(options);

}