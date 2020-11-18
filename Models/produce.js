const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema({
pname: {
    type: String,
    trim: true,
  },
ward: {
    type: String,
    trim: true,
  },
dateOfRegistration: {
    type: Date,
    trim: true,
  },
price: {
    type: Number,
    trim: true,
  },

pquantity: {
    type: Number,
    trim: true,
  },

directions:{
  type: String,
  trim: true,
},

modeOfPayment:{
  type: String,
  trim: true,
},

modeOfDelivery: {
  type: String,
  trim: true,
},

produceType: {
  type: String,
  trim: true,
},

pImage: {
  type: String,


 },

});

module.exports = mongoose.model('produceUpload', produceSchema);