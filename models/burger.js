var orm = require("../config/orm");

// create the code that will call the ORM functions using burger specific input for the ORM.
//More specific code tonarrow ORM down to a specific table/model
var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', cb);
    }
}



module.exports = burger;