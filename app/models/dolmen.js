'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;


const dolmenSchema = new Schema({
  image: String,
  name: String,
  county: String,
  coordinates: String,
  type: String,
  age: String,
});

module.exports = Mongoose.model('Dolmen', dolmenSchema);