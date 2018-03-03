//current troubleshooting:
//link return to home button --goes back to home page
//link file to heroku 


//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//creating instance of express
var app = express();
var PORT = 3000;


// Express to use parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
//app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "app/public"));


// Routes
// // =============================================================
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});