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
        .controller('EedomusCtrl', EedomusCtrl);

    EedomusCtrl.$inject = ['eedomusService', '$scope'];

    function EedomusCtrl(eedomusService, $scope) {
        /* jshint validthis: true */
        var vm = this

        vm.findEedomusDevices = findEedomusDevices;
        vm.getDevices = getDevices;
        vm.addDevice = addDevice;
        vm.updateHost = updateHost;
        vm.updateUser = updateUser;
        vm.updateSecret = updateSecret;
        vm.selectDevice = selectDevice;
        vm.deleteDevice = deleteDevice;

        vm.eedomusHost = null;
        vm.eedomusUser = null;
        vm.eedomusSecret = null;
        vm.selectedDevice = null;
        vm.roomSelected = null;
        vm.devices=[];
        vm.rooms=[];
        
        init()

        function init() {
            getEedomusHost();
            getEedomusUser();
            getEedomusSecret();
            getRooms();
            getDevices();
        }

        function findEedomusDevices() {
            return eedomusService.findEedomusDevices()
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }

                    var newDevices = result.data.body.filter(function(device) {
                        return vm.devices.indexOf(device.periph_id) === -1;
                    })
                    vm.devices = vm.devices.concat(newDevices);
                })
        }

        function getDevices() {
            return eedomusService.getDevices()
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                    vm.devices = result.data.map( function(x) {
                        return {
                            id: x.id,
                            name : x.name, 
                            periph_id:x.identifier,
                            room: vm.rooms.filter(function(r) {return r.id === x.room })[0],
                            exist: true
                        }
                    });
                })
        }

        function addDevice(selectedDevice, room) {
            var param = {
                    deviceId: selectedDevice.eedomusId, 
                    deviceName: selectedDevice.name,
                    room: room.id
                };
            return eedomusService.addDevice(param)
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                })
        }
        
        function getEedomusHost(){
            return eedomusService.paramByName("EEDOMUS_HOST")
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                    vm.eedomusHost = result.data.value;
                })
        }

        function getEedomusUser(){
            return eedomusService.paramByName("EEDOMUS_USER")
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                    vm.eedomusUser = result.data.value;
                })
        }

        function getRooms() {
            return eedomusService.getRooms()
            .then(function(result){
                if(result.status != 200){
                    eedomusService.errorNotificationTranslated('ERROR')
                }
                vm.rooms = result.data;
            })
        }

        function getEedomusSecret(){
            return eedomusService.paramByName("EEDOMUS_SECRET")
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                    vm.eedomusSecret = result.data.value;
                })
        }

        function updateHost() {
            var host = {host: vm.eedomusHost};
            return eedomusService.updateHost(host)
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                })
        }

        function updateUser() {
            var user = {user: vm.eedomusUser};
            return eedomusService.updateUser(user)
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                })
        }

        function updateSecret() {
            var secret = {secret: vm.eedomusSecret};
            return eedomusService.updateSecret(secret)
                .then(function(result){
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                })
        }

        function deleteDevice(id) {
            return eedomusService.deleteDevice(id)
            .then(function(result){
                if(result.status != 200){
                    eedomusService.errorNotificationTranslated('ERROR')
                }
                else {
                    vm.devices = vm.devices.filter(function(device) {
                        return device.id !== id;
                    })
                }
            })
        }

        function selectDevice(id, name) {
            vm.selectedDevice = {
                'name':  name,
                'eedomusId': id
            };
            return eedomusService.getDeviceInformations(id)
                .then(function(result) {
                    if(result.status != 200){
                        eedomusService.errorNotificationTranslated('ERROR')
                    }
                    vm.selectedDevice = {
                        'name':  name,
                        'eedomusId': result.data.eedomusInformations.body.periph_id,
                        'result': result.data
                    };
                })
        }
    }
})();