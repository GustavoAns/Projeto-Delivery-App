const express = require('express');
const bodyParser = require('body-parser');
const login = require('./routes/login');
const user = require('./routes/user');
const products = require('./routes/products');

const app = express();

app.use(bodyParser.json());

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', login);

app.use('/user', user);

app.use('/products', products);

module.exports = app;
