const express = require("express");
const https = require("https");
const bodyParser= require("body-parser");

const app = express();
app.use(express.static("public"));

app.get("/", function(req, res){
res.sendFile(__dirname+"/signup.html");
});

app.listen(3000, function () {
    
    console.log("server is running on port 3000");
});