
const express = require('express');
const router = express.Router();
const passport = require('passport');

const agricOfficerSignUp = require("../Models/AgriculturalOfficer")
const farmerOneReg = require("../Models/FarmerOnes")

//Agricultural Officer site journey

//Landing Page
router.get('/masajja', (req,res) => {
    res.render("officialLand")
});

//SignUpPage
router.get("/AOSignup", (req,res) => {
    res.render("agricOfficerSignUp")
})

//Save AgricOfficer Credentials to database
router.post('/AOSignup', async(req,res)=>{
    try{
        const agricOfficers = new agricOfficerSignUp(req.body);
        await agricOfficerSignUp.register(agricOfficers, req.body.password,(err) => {
            if (err){
                throw err
            }
            res.redirect('/masajja')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong')
        console.log(err)
    }
})


//Login route
router.post('/login',passport.authenticate('local'), (req,res) =>{
    req.session.user = req.user;
    res.redirect('/farmerOnes')
})
//Registers FarmerOne
router.get('/farmerOne', (req,res) => {
    if(req.session.user){
    res.render("farmerOneReg")
}else{
    console.log("Can't find session")
    res.redirect("/masajja")
}
});

//Save farmerOnes to the database
 router.post("/farmerOne", async (req,res)=>{
     if(req.session.user){
         try{
             const registerFarmerOne = new farmerOneReg(req.body);
             await registerFarmerOne.save(()=>{
                 console.log("save success")
                 res.redirect('/farmerOnes')
             })
         }
         catch(err) {
            res.status(400).send('Sorry! Something went wrong.')
            console.log(err)
        }
     }
     else{
        console.log("Can't find session")
        res.redirect("/masajja")
    }
 })

// Retrieve/Search for farmerOnes in the database

router.get('/farmerOnes', async (req, res) => {
    if(req.session.user){
    try {
        let items = await farmerOneReg.find()  

        if (req.query.gender) {
            items = await farmerOneReg.find({ gender: req.query.gender })
        }
        res.render('headfarmers', { title: 'Farmer Ones', users: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database");
    }
} else{
    console.log("Can't find session")
    res.redirect("/masajja")
}   
})

//Update  FarmerOne Credentials
router.get('/update/:id', async (req, res) => {
    if(req.session.user){
    try {
        const updatefarmerone = await farmerOneReg.findOne({ _id:req.params.id })
        res.render('farmerOneUpdate', { user: updatefarmerone })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
}else{
    console.log("Can't find session")
    res.redirect("/masajja")
}
})

router.post('/update', async (req, res) => {
    if(req.session.user){
    try {
        await farmerOneReg.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('farmerOnes');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }   
}else{
    console.log("Can't find session")
    res.redirect("/masajja")
}
})

//Delete wrong registrations
router.post('/delete', async(req,res)=>{
    if(req.session.user){
    try{
        await farmerOneReg.deleteOne({_id: req.body.id })
        res.redirect('back')
    }catch(err){
        res.status(400).send("Unable to delete item in the database") 
    }

} else{
    console.log("Can't find session")
    res.redirect("/masajja")
}
 
});



module.exports = router;