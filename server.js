var express = require("express");

var PORT = process.env.PORT || 3000;
var burgerRouter = require('./controllers/burger_controllers');
var app = express();
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//We need to start our server
//We need to initialize our controller
//We should set up typical middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(burgerRouter);

app.listen(PORT, function(err){
    if(err) throw err;
    console.log(`Running on PORT:${PORT}`)
})
