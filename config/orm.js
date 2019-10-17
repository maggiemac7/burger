var connection = require("./connections.js");

//Represents the most generic interactions with MySQL as possible
var orm = {
    selectAll: function(table, cb) {
        console.log(table)
        connection.query('SELECT * FROM ' + table, function(err, results){
            if(err) throw err;
            cb(results);
        });
    }
}


module.exports = orm;