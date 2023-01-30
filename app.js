var express = require('express');

var app = express();

const port = process.env.PORT || 8080;

const connectDb = require('./src/config/connectDb');

app.get('/', function (req, res) {
    res.send('test');
});

connectDb();

app.listen(port, () => {
    console.log(`Sever is listenning on port: ${port}`);
});
