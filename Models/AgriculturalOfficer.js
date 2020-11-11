const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


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

  AgricOfficerSchema.plugin(passportLocalMongoose);
  module.exports = mongoose.model('AgricOfficers', AgricOfficerSchema);