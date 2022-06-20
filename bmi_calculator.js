const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/bmi_calculator", function(req, res){
let height = Number(req.body.height);
let weight = Number(req.body.weight);

let results = (weight / (height ** 2)) * 703;
let output = Math.round(results);
res.send(`Your BMI is Approximately ${output}`);
});

app.listen(3000, function(){
    console.log("This Server is Working on Port 3000.");
})
