const express = require('express');
const app = express();
const request = require('request');
const bodyParser=require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('you have no right to access this page.');
});

app.get('/get', function (req, res) {
    let imageURL=encodeURIComponent(req.query.imageURL);
    //TODO: imageURL有問題
    request('http://x.rce.tw/s/h3584935/get_old_591_phone.php?imageURL=' + imageURL, function (error, response, body) {
        console.log('http://x.rce.tw/s/h3584935/get_old_591_phone.php?imageURL=' + imageURL);
        if (!error && response.statusCode == 200) {
            res.send(body) // Show the HTML for the Google homepage.
        } else {
            console.log(error);
        }
    });
});

app.listen(port, function () {
    console.log('listening on port ' + port);
});
