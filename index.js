const express = require('express');
const path = require('path');


const app = express();
const bodyParser = require('body-parser');

//Middleware for bodyParser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function () {
  console.log('Server running on Port 3000');
});

//Routes
const routes = require('./routes/routes')(app);

