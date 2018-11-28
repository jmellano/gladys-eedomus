module.exports = {

    updateHost: function(host) {
        var param = {
            name: "EEDOMUS_HOST",
            value: host
        };
        return gladys.param.setValue(param);
    },

    updateUser: function(user) {
        var param = {
            name: "EEDOMUS_USER",
            value: user
        };
        return gladys.param.setValue(param);
    },

    updateSecret: function(secret) {
        var param = {
            name: "EEDOMUS_SECRET",
            value: secret
        };
        return gladys.param.setValue(param);
    },

    getRooms: function() {
        return gladys.room.getAll();
    }
}