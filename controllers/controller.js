var express = require('express');
var app = express();
var fs = require('fs')
var https = require('https');
var coinbase = require('coinbase')
var request = require('request');

var options = {
    key: fs.readFileSync('./ssl/coinbase.dev.key'),
    cert: fs.readFileSync('./ssl/coinbase.dev.crt'),
};

var Client = require('coinbase').Client;
var client = new Client({'accessToken': accessToken, 'refreshToken': refreshToken});

var client_id = '8c7b67f66649f1a376ffab5c4587539c671ebf3ee478923b73222f4bb0f0a822'
var client_secret = '06cac08e39bb7e33856dd1ce59355a6537a53e24c2e5b5737024a92837e0b592'

app.use(express.static('static'));

app.get('/login/coinbase', function(req, res) {
    res.redirect('https://www.coinbase.com/oauth/authorize?response_type=code&redirect_uri=https://localhost:3000/auth/coinbase/callback&client_id=' + client_id + '&scope=wallet%3Auser%3Aread')
})

app.get('/auth/coinbase/callback', function(req, res) {
    var data = {
        client_id: client_id,
        client_secret: client_secret,
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: 'https://localhost:3000/'
    }

    request.post(
        'https://api.coinbase.com/oauth/token', data, function (error, response, body) {
            console.log(body)
            res.send(body)
        }
    );
})