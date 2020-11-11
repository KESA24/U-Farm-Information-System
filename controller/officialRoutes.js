
const express = require('express');

const router = express.Router();


const agricOfficerSignUp = require("../Models/AgriculturalOfficer")
const farmerOneReg = require("../Models/FarmerOne")

// GET ROUTES

//Landing Page
router.get('/masajja', (req,res) => {
    res.render("officialLand")
});

//SignUpPage
router.get("/AOSignup", (req,res) => {
    res.render("agricOfficerSignUp")
})

router.get('/agricdash', (req,res) => {
    res.render("agricdash")
});

router.get('/farmerOne', (req,res) => {
    res.render("farmerOneReg")
});



//POST ROUTES
//Save AgricOfficer Credentials to database
router.post('/AOSignup', async(req,res)=>{
    try{
        const registeredAgricOfficer = new agricOfficerSignUp(req.body);
        await registeredAgricOfficer.save(() => {
            console.log('save success')
             res.redirect("/masajja")
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})



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

// Retrieve/Search for farmerOnes in the database

router.get('/farmerOnes', async (req, res) => {
    try {
        let items = await farmerOneReg.find()  

        if (req.query.name) {
            items = await farmerOneReg.find({ name: req.query.name })
        }
        res.render('farmerOnes', { title: 'Farmer Ones', users: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database");
    }
})

//Update  FarmerOne Credentials
router.get('/update/:id', async (req, res) => {
    try {
        const updatefarmerone = await farmerOneReg.findOne({ _id:req.params.id })
        res.render('farmerOneUpdate', { user: updatefarmerone })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

router.post('/update', async (req, res) => {
    try {
        await farmerOneReg.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('farmerOnes');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }    
})


//Delete wrong registrations
router.post('/delete', async(req,res)=>{
    try{
        await farmerOneReg.deleteOne({_id: req.body.id })
        res.redirect('back')
    }catch(err){
        res.status(400).send("Unable to delete item in the database");
    }})
    
    module.exports = router;