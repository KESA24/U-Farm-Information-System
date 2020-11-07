
const express = require('express');

const router = express.Router();

const farmerOneReg = require("../Models/farmerOne")

// GET ROUTES

router.get('/masajja', (req,res) => {
    res.render("agricOfficer")
});

router.get('/agricdash', (req,res) => {
    res.render("agricdash")
});

router.get('/farmerOne', (req,res) => {
    res.render("farmerOne")
});



//POST ROUTES
//Save farmerOnes to the database
 router.post('/farmerOne', async(req,res)=>{
    try{
        const registeredFarmerOne = new farmerOneReg(req.body);
        await registeredFarmerOne.save(() => {
            console.log('save success')
            // res.send('Thank you for your registration!')

            res.redirect('/agricdash')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})

//Retrieve FarmerOnes from database

router.get('/farmerOnes', async(req, res)=>{
    try{
        let items = await farmerOneReg.find()
        res.render('farmerOnes', { users: items})
    }catch(err){
        res.status(400).send("Unable to find items in the database");
    }  
})

module.exports = router;