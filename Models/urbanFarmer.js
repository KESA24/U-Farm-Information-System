const mongoose = require('mongoose');

const urbanFarmerSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    dob: Date,
    dor: Date,
    nin:String,
    phone: Number,
    ward: String,
    ufid:String,
    acts: String,
    gender: String,

});


  module.exports = mongoose.model('urbanFarmer', urbanFarmerSchema);