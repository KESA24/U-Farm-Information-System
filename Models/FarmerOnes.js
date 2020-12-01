
const mongoose = require('mongoose');

const farmerOneSchema = new mongoose.Schema({
names:{
    type: String
},
dob:{
    type: String
},
dor: {
    type: String
},
nin:{
type: String
},
phone:{
    type:Number
},
ufid:{
    type: String
},
restype:{
    type: String
},
ward:{
    type:String
},
acts:{
    type: String
},
home:{
    type: String
},
stayperiod:{
    type: String
},
gender: {
    type:String,
}

});

module.exports = mongoose.model('farmerOne', farmerOneSchema);