const mongoose = require('mongoose');



const urbanFarmerSchema = new mongoose.Schema({
    ufnames: {
      type:String,
    },
    ufdob:{
      type: String,
    },
    ufdor:{
      type: String,
    },
    ufnin:{
      type: String,
    },
    ufphone:{
      type: Number,
    },
    ufward:{
      type: String,
    },
    ufid:{
      type: String,
      unique: true
    },
    ufacts:{
    type:String,
    },
    gender: String,

});


  module.exports = mongoose.model('urbanFarmer', urbanFarmerSchema);