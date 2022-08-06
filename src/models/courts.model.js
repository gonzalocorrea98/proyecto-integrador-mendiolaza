const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const courtSchema = new Schema({
  name: {type: String, required: true}, 
  numberOfCourts: {type: String, required: true},
  address: {
    city: {type: String, required: true},
    street: {type: String, required: true},
    number: {type: Number, required: true}
  },
  locationID: {type: String, required: true},
  image: {type: String, required: false}
});

const Court = model('Court', courtSchema);

module.exports = Court;