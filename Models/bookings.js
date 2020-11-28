
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
fname: {
    type: String,
    trim: true,
},

lname: {
  type: String,
  trim: true,
},

phone: {
    type: Number,
    trim: true,
},

email:{
    type: String,
    trim: true,
},
qty:{
    type:Number,
    trim:true,
},
amount:{
    type: Number,
    trim: true,
},
deliveryAddress:{
    type: String,
    trim: true,
},
pname:{
    type: String,
    trim: true,
},

deliveryMethod:{
    type: String,
    trim: true,
},

paymentMethod: {
  type: String,
  trim: true,
},


});

module.exports = mongoose.model('bookings', bookingSchema);