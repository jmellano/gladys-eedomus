
module.exports = function (sails) {

    var init = require('./lib/eedomus.init.js');
    // var disconnect = require('./lib/zwave.disconnect.js');
    // var exec = require('./lib/zwave.exec.js');
    var setup = require('./lib/eedomus.setup.js');
    // var zwaveInstance = require('./lib/zwave.shared.js').zwave;
    // var ZwaveController = require('./controller/ZwaveController.js');

    gladys.on('ready', function(){
        init();
    });

    return {
        init,
        // disconnect,
        // exec,
        setup,
        // zwaveInstance,
        routes: {
            before: {
                // 'post /zwave/addnode': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'delete /zwave/removenode': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'get /zwave/getnodeparams/:id': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'patch /zwave/setnodename': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'post /zwave/healnetwork': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'patch /zwave/setnodeparam': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'get /zwave/softreset': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'get /zwave/setup': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'get /zwave/getports': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next),
                // 'patch /zwave/setport': (req, res, next) => sails.hooks.policies.middleware.checktoken(req, res, next)
            },
            after: {
                // 'post /zwave/addnode': ZwaveController.add,
                // 'delete /zwave/removenode': ZwaveController.remove,
                // 'get /zwave/getnodeparams/:id': ZwaveController.getParams,
                // 'patch /zwave/setnodename': ZwaveController.setName,
                // 'post /zwave/healnetwork': ZwaveController.heal,
                // 'patch /zwave/setnodeparam': ZwaveController.setParam,
                // 'get /zwave/softreset': ZwaveController.reset,
                // 'get /zwave/setup': ZwaveController.setup,
                // 'get /zwave/getports': ZwaveController.getPorts,
                // 'patch /zwave/setport': ZwaveController.setPort,
            }
        }
    };
};