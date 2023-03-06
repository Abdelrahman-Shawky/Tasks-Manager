const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); 
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));


// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.dbURI;
const port = process.env.PORT || 3000;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.use(taskRoutes);


