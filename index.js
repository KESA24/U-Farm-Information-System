//Import dependencies(Libraries)
const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const path = require("path");


//Import Routes
const officialRoutes = require("./routes/officialRoutes");
const farmerOneRoutes = require("./routes/farmerOneRoutes")
const urbanFarmerRoutes = require("./routes/urbanFarmerRoutes")
const customerRoutes = require("./routes/customerRoutes")
require("dotenv/config");

const passportLocalMongoose = require('passport-local-mongoose');
//Import Models to work with passport
const users = require('./Models/users')

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const passport = require('passport');

// create an express application by calling the express() function
const app = express();

// DB Connection
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

//Configs
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
//Static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});

app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json()); 
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(users.createStrategy());
passport.serializeUser(users.serializeUser());
passport.deserializeUser(users.deserializeUser());


app.use( "/", officialRoutes);
app.use(  "/", farmerOneRoutes);
app.use("/", customerRoutes);
app.use("/",urbanFarmerRoutes)

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

//Random searches on server.
app.get('*',(req,res)=>{
  res.send('error page')
})


app.listen(3000, () => console.log("Listening on port 3000")); //Created a server and have it's listen on port 3000






