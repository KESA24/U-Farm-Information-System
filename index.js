
const express = require("express"); 

const mongoose = require("mongoose"); 

const bodyParser = require("body-parser");

const path = require("path"); 

require("dotenv/config");

const officialRoutes = require("./controller/officialRoutes");


const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});


app.use(officialRoutes);


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







app.listen(3000, () => console.log("Listening on port 3000")); //Created a server and have it listen on port 3000






