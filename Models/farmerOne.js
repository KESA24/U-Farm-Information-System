const { truncate } = require('fs');
const mongoose = require('mongoose');

const farmerOneSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    trim: true,
  },
  dateOfRegistration: {
    type: Date,
    trim: true,
  },
  nin: {
    type: String,
    trim: true,
  },

phonenumber: {
    type: Number,
    trim: true,
  },

foNumber:{
  type: Number,
  trim: true,
},

ward:{
  type: String,
  trim: true,
},

homeLocation: {
  type: String,
  trim: true,
},

residenceType: {
  type: String,
  trim: true,
},

stayperiod: {
  type: String,
  trim: true,
},

activities: {
  type: String,
  trim: true,
},

});

module.exports = mongoose.model('farmerOne', farmerOneSchema);