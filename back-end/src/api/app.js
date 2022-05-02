const express = require('express');
const bodyParser = require('body-parser');
const login = require('./routes/login');

const app = express();

app.use(bodyParser.json());

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', login);

module.exports = app;
