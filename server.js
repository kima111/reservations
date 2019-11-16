var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customers = [
    {
      routeName: "Yoda",
      name: "Yoda",
      number: "111-111-1111",
      email: "yoda@jedi.com",
      uniqueID: 1
    },
    {
        routeName: "DarthVader",
        name: "DarthVader",
        number: "999-999-9999",
        email: "darthvader@sith.com",
        uniqueID: 2
    },
    {
        routeName: "Luke",
        name: "Luke",
        number: "222-222-2222",
        email: "luke@jedi.com",
        uniqueID: 3
    }
  ];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});