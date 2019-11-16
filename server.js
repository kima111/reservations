var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'))

var customers = [
    {
      name: "Yoda",
      number: "111-111-1111",
      email: "yoda@jedi.com",
      uniqueID: 1
    },
    {
        name: "DarthVader",
        number: "999-999-9999",
        email: "darthvader@sith.com",
        uniqueID: 2
    },
    {
        name: "Luke",
        number: "222-222-2222",
        email: "luke@jedi.com",
        uniqueID: 3
    },
    {
        name: "Abe",
        number: "222-222-2222",
        email: "luke@jedi.com",
        uniqueID: 3
    },
    {
        name: "Eric",
        number: "222-222-2222",
        email: "luke@jedi.com",
        uniqueID: 3
    },
    {
        name: "Kramer",
        number: "222-222-2222",
        email: "luke@jedi.com",
        uniqueID: 3
    },
    {
        name: "Frank",
        number: "222-222-2222",
        email: "frank@jedi.com",
        uniqueID: 3
    }
  ];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.get("/api/tables", function(req, res) {
    return res.json(customers);
});

app.post("/api/tables", (req, res) => {
    let newCustomer = req.body;

    console.log(newCustomer);

    customers.push(newCustomer);

    res.json(newCustomer);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});