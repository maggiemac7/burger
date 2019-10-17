var express = require("express");

var router = express.Router();
var burgerModel = require("../models/burger");
//Takes adavntage of models to interact with DB

router.get('/', function(req,res){
    burgerModel.selectAll(function(results){
        var data = {
            burgers: results
        }
        res.render('index', data);
    })
});

router.post("/api/burgers", function(req, res) {
    burgerModel.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });



module.exports = router;