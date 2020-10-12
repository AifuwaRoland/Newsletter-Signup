const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});




app.post("/", function (req, res) {
    const firstName = req.body.f1;
    const lastName = req.body.f2;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const postData = JSON.stringify(data);

    const options = {
        url: "https://us2.api.mailchimp.com/3.0/lists/80c3843d52",
        method: "POST",
        headers: {
            Authorization: "auth acf7cd3c3babfa6a474d341e211ce60c-us2"
        },
        body: postData
    }

    request(options, function (err, response, body) {

        if (response.statusCode === 200) {
            console.log("Success");

            res.sendFile(__dirname + "/success.html");

        } else {
            res.sendFile(__dirname + "/failure.html");
            console.log("Uh oh, there was some kind of Error!");
        }

    });
});
app.post("/failure", function (req, res) {
    res.redirect("/");
});
app.listen(process.env.PORT|| 3000, function (req, res) {

    console.log("server is running on port 3000");
});

