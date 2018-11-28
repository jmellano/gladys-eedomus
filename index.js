
module.exports = function (sails) {

    var init = require('./lib/eedomus.init.js');
    var exec = require('./lib/eedomus.exec.js');
    var setup = require('./lib/eedomus.setup.js');
    var EedomusController = require('./controller/EedomusController');
    
    gladys.on('ready', function(){
        init();
    });

    return {
        init,
        exec,
        setup,
        routes: {
            before: {
                'get /eedomus/getdevices':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
                'get /eedomus/findEedomusDevices':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
                'post /eedomus/adddevice':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
                'delete /eedomus/deleteDevice':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
                'patch /eedomus/updateHost':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
                'patch /eedomus/updateUser':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
                'patch /eedomus/updateSecret':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
                'get /eedomus/getDeviceInformations/:id':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
                'get /eedomus/getRooms':(req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next), 
            },
            after: {
                'get /eedomus/getdevices' : EedomusController.getDevices,
                'get /eedomus/findEedomusDevices' : EedomusController.findEedomusDevices,
                'post /eedomus/adddevice' : EedomusController.addDevice,
                'delete /eedomus/deleteDevice/:id' : EedomusController.deleteDevice,
                'patch /eedomus/updateHost' : EedomusController.updateHost,
                'patch /eedomus/updateUser' : EedomusController.updateUser,
                'patch /eedomus/updateSecret' : EedomusController.updateSecret,
                'get /eedomus/getDeviceInformations/:id' : EedomusController.getDeviceInformations,
                'get /eedomus/getRooms' : EedomusController.getRooms,
            }
        }
    };
};