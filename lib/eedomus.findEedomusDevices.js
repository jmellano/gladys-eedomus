/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Julien Mellano
*/

var Promise = require('bluebird');
var request = require('request');
var rp = require('request-promise');


module.exports = function findEedomusDevices() {
    return retrieveEedomusDevices();

    function getParameter() {
        const user = gladys.param.getValue("EEDOMUS_USER");
        const token = gladys.param.getValue("EEDOMUS_SECRET");
        const host =  gladys.param.getValue("EEDOMUS_HOST");
        
        return Promise.all([user, token, host]).then(function(values) {
            return Promise.resolve(values);
          });          
    }

    function retrieveEedomusDevices() {
        return getParameter().then((result) => {
            const [user,token,host] =  result;
            const hostAndApi = host.includes('api') ? host : host + "/api"; 

            const listPeripherique = "http://" + hostAndApi + "/get?action=periph.list&api_user=" + user + "&api_secret=" + token;
            return rp(listPeripherique).then(function (result) {
                return Promise.resolve(JSON.parse(result));
            });           
    
        });
    
    
    }
}