const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('you have no right to access this page.');
});

app.get('/get', function (req, res) {
    request('https://' + req.params.imageURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage.
        }
    });
});

app.listen(port, function () {
    console.log('listening on port ' + port);
});
