const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.dbURI;
const port = process.env.PORT || 3000;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.render('home'));


