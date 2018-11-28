/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Julien Mellano
*/

findEedomusDevices = require('../lib/eedomus.findEedomusDevices.js');
getDevices = require('../lib/eedomus.getDevices.js');
addDevice = require('../lib/eedomus.addDevice.js');
deleteDevice = require('../lib/eedomus.deleteDevice.js');
param = require('../lib/eedomus.param.js');
getDeviceInformations = require('../lib/eedomus.getDeviceInformations.js');


module.exports = {

  findEedomusDevices: function(req, res, next) {
    findEedomusDevices()
      .then((result) => res.json(result))
  },

  getDevices: function(req, res, next) {
    getDevices()
      .then((result) => res.json(result))
  },

  addDevice: function(req, res, next) {
    addDevice(req.body)
      .then((result) => res.json(result))
  },

  deleteDevice: function(req, res, next) {
    deleteDevice({id: req.params.id})
      .then((result) => res.json(result))
  },

  updateHost: function(req, res, next) {
    param.updateHost(req.body.host)
      .then((result) => res.json(result))
      .catch(next);
    },

  updateUser: function(req, res, next) {
    param.updateUser(req.body.user)
      .then((result) => res.json(result))
      .catch(next);
  },

  updateSecret: function(req, res, next) {
    param.updateSecret(req.body.secret)
      .then((result) => res.json(result))
      .catch(next);
  },

  getRooms: function(req, res, next) {
    param.getRooms()
      .then((result) => res.json(result))
      .catch(next);
  },

  getDeviceInformations: function(req, res, next) {
    getDeviceInformations({id: req.params.id})
      .then((result) => res.json(result))
      .catch(next);
  }

}