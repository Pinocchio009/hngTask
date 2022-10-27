const express = require('express');
const { json } = require("express");
const recordRoute = require('./Router/test')
require('dotenv').config();
const connect = require('./db')

connect();


const app = express();

app.use(json());
app.use('/record', recordRoute)



const port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log(`Served on port ${port}`)
});