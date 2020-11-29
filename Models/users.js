//Mongoose to communicate with mongodb(database)
const mongoose = require('mongoose');

//Passport for authentication
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({

    names: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    role:{
        type:String
    }
    

});

  userSchema.plugin(passportLocalMongoose);
  module.exports = mongoose.model('users', userSchema);