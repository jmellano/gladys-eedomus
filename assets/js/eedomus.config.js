var translationsEN = {
    CANCEL:'Cancel',
    VARIABLES:'Eedomus Box Variables',
    FIND_DEVICES: 'Find Eedomus Devices',
    EEDOMUS_ADD: 'Add',
    EEDOMUS_MODAL_ADD: 'Add device : ',
    EEDOMUS_REMOVE: 'Remove',
    EEDOMUS_VALUE: 'Value',
    EEDOMUS_DESCRIPTION: 'Description',
    EEDOMUS_DEVICE_OFF: 'OFF',
    EEDOMUS_DEVICE_ON: 'ON',
    EEDOMUS_ROOM: 'Room'
}

var translationsFR = {
    CANCEL:'Annuler',
    VARIABLES:'Variable Box Eedomus',
    FIND_DEVICES: 'Rechercher les périphériques de la box Eedomus',
    EEDOMUS_ADD: 'Ajouter',
    EEDOMUS_MODAL_ADD: 'Ajouter le périphérique : ',
    EEDOMUS_REMOVE: 'Retirer',
    EEDOMUS_VALUE: 'Valeur',
    EEDOMUS_DESCRIPTION: 'Description',
    EEDOMUS_DEVICE_OFF: 'OFF',
    EEDOMUS_DEVICE_ON: 'ON',
    EEDOMUS_ROOM: 'Pièce'
}

angular
    .module('gladys')
    .config(['$translateProvider', function($translateProvider) {
        // add translation table
        $translateProvider
            .translations('en', translationsEN)
            .translations('fr', translationsFR);
    }]);