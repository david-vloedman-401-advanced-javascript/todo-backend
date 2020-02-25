'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};


mongoose
  .connect(process.env.MONGO, mongooseOptions)
  .catch(err => console.log(err));

require('./lib/app.js').start(process.env.PORT);
