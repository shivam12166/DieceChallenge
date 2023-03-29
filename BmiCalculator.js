const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(request, respond) {
    respond.sendFile(__dirname + "/index.html");
});
app.post("/index.html", function(request, respond) {
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1 / (num2 * num2);
    respond.send("Your calculated BMI Value is " + result);
});

app.listen(3000, function() {
    console.log("app listening on port 3000");
});