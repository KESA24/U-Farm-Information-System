const mongoose = require('mongoose');

const AgricOfficerSchema = new mongoose.Schema({

    fname: String,
    lname: String,
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    }
    

});


  module.exports = mongoose.model('AgricOfficers', AgricOfficerSchema);