var Promise = require('bluebird');
var request = require('request');
var rp = require('request-promise');


module.exports = function addDevice(param) {
    return addEedomusDevice(param);

    function addEedomusDevice(param) {
         var param = {
                 device: {
                     name: param.deviceName,
                     identifier: param.deviceId,
                     protocol: 'wifi',
                     service: 'eedomus',
                     room: param.room
                 },
                 types: [
                     {
                         type: 'binary',
                         sensor: false,
                         min: 0,
                         max: 1
                     }
                 ]   
             };
        return gladys.device.create(param);
    
    }
}