var Promise = require('bluebird');
var request = require('request');
var rp = require('request-promise');


module.exports = function deleteDevice(param) {
    var device = {
        id: param.id
    };
    return gladys.device.delete(device);
}