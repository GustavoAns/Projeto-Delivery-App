const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const login = require('./routes/login');
const user = require('./routes/user');
const products = require('./routes/products');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/login', login);

app.use('/user', user);

app.use('/products', products);

module.exports = app;
