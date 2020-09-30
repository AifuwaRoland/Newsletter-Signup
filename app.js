const express = require("express");
const bodyParser= require("body-parser");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req, res){
    console.log("Post received");

var firstname=req.body.f1;
var secname= req.body.f2;
var email=req.body.email;



});
app.listen(3000, function (req, res) {
    
    console.log("server is running on port 3000");
});