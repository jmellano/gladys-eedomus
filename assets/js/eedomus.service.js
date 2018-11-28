/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Julien Mellano
  */
  
 (function () {
    'use strict';

    angular
        .module('gladys')
        .factory('eedomusService', EedomusService);

    EedomusService.$inject = ['$http', 'Notification', '$translate'];

    function EedomusService($http, Notification, $translate) {
        
        var service = {
            paramByName: paramByName,
            findEedomusDevices: findEedomusDevices,
            getDevices: getDevices,
            addDevice: addDevice,
            updateHost: updateHost,
            updateUser: updateUser,
            updateSecret: updateSecret,
            getDeviceInformations: getDeviceInformations,
            getRooms: getRooms,
            deleteDevice: deleteDevice,
        };

        return service;

        function paramByName(name) {
            return $http({method: 'GET', url: '/param/' + name });
        }

        function findEedomusDevices() {
            return $http({method: 'GET', url: '/eedomus/findEedomusDevices' })
        }

        function getDevices() {
            return $http({method: 'GET', url: '/eedomus/getDevices' })
        }

        function addDevice(param) {
            return $http({method: 'POST', url: '/eedomus/adddevice', data: param })
        }
        
        function deleteDevice(id) {
            return $http({method: 'DELETE', url: '/eedomus/deleteDevice/' + id })
        }
        
        function updateHost(host) {
            return $http({method: 'PATCH', url: '/eedomus/updateHost', data: host })
        }

        function updateUser(user) {
            return $http({method: 'PATCH', url: '/eedomus/updateUser', data: user })
        }

        function updateSecret(secret) {
            return $http({method: 'PATCH', url: '/eedomus/updateSecret', data: secret })
        }

        function getDeviceInformations(id) {
            return $http({method: 'GET', url: '/eedomus/getDeviceInformations/' + id })
        }

        function getRooms() {
            return $http({method: 'GET', url: '/eedomus/getRooms' })
        }
    }
})();