
const mongoose = require('mongoose');

const farmerOneSchema = new mongoose.Schema({
fname: String,
lname:String,
dob: String,
dor: String,
nin: String,
phone:Number,
foid:String,
restype:String,
ward:String,
acts: String,
home: String,
stayperiod: String,
gender: String,

});

module.exports = mongoose.model('farmerOne', farmerOneSchema);