//Import dependencies(Libraries)
const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const path = require("path"); 
require("dotenv/config");
const passportLocalMongoose = require('passport-local-mongoose');

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const passport = require('passport');


//Import Models to work with passport
const AgricOfficers = require('./Models/AgriculturalOfficer')

/* Passport Local Authentication Configs */
  passport.use(AgricOfficers.createStrategy());
  passport.serializeUser(AgricOfficers.serializeUser());
  passport.deserializeUser(AgricOfficers.deserializeUser());

//Import Routes
const officialRoutes = require("./controller/officialRoutes");
const farmerRoutes = require("./controller/farmerRoutes")

// create an express application by calling the express() function
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});

//Agricultural Officer Routes
app.use(officialRoutes);


//Farmer One Routes
app.use(farmerRoutes);



mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });


//Logout route
//Logout
app.post("/logout" , (req,res) =>{
  if(req.session){
      req.session.destroy( (err)=>{
          if (err){

          }else{
              return res.redirect('/masajja');
          }
      })
  }
})




app.listen(3000, () => console.log("Listening on port 3000")); //Created a server and have it listen on port 3000






