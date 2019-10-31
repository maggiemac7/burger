var connection = require("./connections.js");

//Represents the most generic interactions with MySQL as possible
var orm = {
    selectAll: function(table, cb) {
        console.log(table)
        connection.query('SELECT * FROM ' + table, function(err, results){
            if(err) throw err;
            cb(results);
        });
    },
    update: function(table, objColVals, condition, cb) {
        connection.query('UPDATE ' + table + ' SET ? WHERE ' + condition, objColVals, function(err, results){
            console.log(results, err);
            if(err) throw err;
            cb(results);
        });
    },

    create: function(table, cols, vals, cb) {
        console.log(`INSERT INTO ${table} (${cols.join(',')}) VALUES (${Array.from({length: vals.length}, () => '?').join(',')}))`);
        connection.query(`INSERT INTO ${table} (${cols.join(',')} VALUES (${Array.from({length: vals.length}, () => '?').join(',')}))`, vals, function(err, results){
            console.log(results, err);
            if(err) throw err;
            cb(results);
        });
    },
}


module.exports = orm;
