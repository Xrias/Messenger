'use strict';

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

const publicDir = path.join(__dirname, '../src/static/images');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(publicDir));
routes(app);

app.listen(8080, () => {
    console.info('Open http://localhost:8080/');
});
