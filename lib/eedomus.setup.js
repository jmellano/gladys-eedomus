// var shared = require('./zwave.shared.js');
var Promise = require('bluebird');
var request = require('request');

module.exports = function setup() {
    // if (!shared.zwave) return Promise.reject(new Error('Zwave instance not connected'));

    console.log("SETUP MODULE - 2");

    return Promise.resolve();

    
    retrieveEedomusDevice();

    async function getParameter() {
        const user = gladys.param.getValue("EEDOMUS_USER");
        const token = gladys.param.getValue("EEDOMUS_TOKEN");
        const host =  gladys.param.getValue("EEDOMUS_HOST");
        
        Promise.all([user, token, host]).then(function(values) {
            console.log(values);
            Promise.resolve(values);
          });          
    }

    async function retrieveEedomusDevice() {
        getParameter().then((result) => {
            const [user,token,host] =  result;
            const hostAndApi = host.includes('api') ? host : host + "/api"; 
            console.log("user : " + user);
            console.log("token : " + token);
            console.log("host : " + host);
            console.log("hostAndApi : " + hostAndApi);

            const listPeripherique = "http://" + hostAndApi + "/get?action=periph.list&api_user=" + user + "&api_secret=" + token;
            request
                .get(listPeripherique)
                .on('response', function(response) {
                    console.log(response.statusCode) // 200
                    console.log(response.headers['content-type']) // 'image/png'

                    return Promise.resolve("OK")
                })
    
        });
    
    
    }

}