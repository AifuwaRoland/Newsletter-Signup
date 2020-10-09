const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    console.log("Post received");

    const firstname = req.body.f1;
    const secname = req.body.f2;
    const email = req.body.email;

    console.log(firstname, secname, email);


    const data = {
        members: [
            {
                email_address: email,
            status: "subscribed",
                merge_feilds: {
                    FNAME: firstname,
                    LNAME: secname
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);
    const url = "https://us2.api.mailchimp.com/3.0/lists/80c3843d52.";
    const options={
        method: "POST",
        auth: "roland1:acf7cd3c3babfa6a474d341e211ce60c-us2"
    }
    const request=https.request(url, options, function (response) {
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });
request.write(jsonData);
request.end();

});
app.listen(3000, function (req, res) {

    console.log("server is running on port 3000");
});

//app key
//acf7cd3c3babfa6a474d341e211ce60c-us2
//unique id:
// 80c3843d52.