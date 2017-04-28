
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendCompare = require("./app/data/friends.js")

var app = express();
var port = process.env.PORT || 8000
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));




// app.get("/", function(req, res) {
//     return res.sendFile(path.join(__dirname, "app/public/home.html"));
// });
//
// app.get("/survey", (req, res) => {
//     return res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });




app.use(express.static("app/public"));

app.listen(port, function() {
    console.log("App is running on port " + port);
});
