const express = require('express');

const router = express.Router();

const urbanFarmerReg = require("../Models/urbanFarmer")

const produceReg = require("../Models/Produce")

// const approvedProduce = require("../Models/approvedproduce")


// Get dashboard
router.get('/farmerOneDash', (req,res)=>{
    res.redirect("/uFarmers")
})

//GET route for urbanfarmer Registration

router.get('/ufarmer', (req,res) => {
    res.render("ufarmerReg")
});

//Save urban farmers to the database

router.post('/ufarmer', async(req,res)=>{
    try{
        const registeredUrbanFarmer = new urbanFarmerReg(req.body);
        await registeredUrbanFarmer.save(() => {
            console.log('save success')
            //  res.send('Thank you for your registration!')
            res.redirect('/farmerOneDash')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})

// Retrieve Urban Farmers from the database

router.get('/uFarmers', async (req, res) => {
    try {
        let items = await urbanFarmerReg.find()  

        if (req.query.gender) {
            items = await urbanFarmerReg.find({ gender: req.query.gender })
        }
        res.render('uFarmers', { title: 'Urban Farmers', users: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database");
    }
})
router.get('/updateufarmer/:id', async (req, res) => {
    try {
        const updateUrbanFarmer = await urbanFarmerReg.findOne({ _id:req.params.id })
        res.render('ufarmerUpdate', { user: updateUrbanFarmer })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

router.post('/updateufarmer', async (req, res) => {
    try {
        await urbanFarmerReg.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('ufarmers');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }    
})


//Delete farmers from database

router.post('/deleteufarmer', async(req,res)=>{
    try{
        await urbanFarmerReg.deleteOne({_id: req.body.id })
        res.redirect('back')
    }catch(err){
        res.status(400).send("Unable to delete item in the database");
    }})


//Retrieve Produce from in the database
router.get("/producelistFO", async(req,res) =>{
    try{
        const retrieveproduce = await produceReg.find();

        if (req.query.ward) {
            retrieveproduce = await produceReg.find({ward: req.query.ward})
        }

        res.render("producelistFO" , {items:retrieveproduce})
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})
//Approve Produce 

router.get('/approveproduce/:id', async (req, res) => {
    
    try {
        const approveproduce = await produceReg.findOne({ _id:req.params.id })
         res.render('approveproduce', { item: approveproduce })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

router.post('/approveproduce', async (req, res) => { 
    try{
        await produceReg.findOneAndUpdate({ _id:req.params.id }, req.body)
         res.redirect('producelistFO')
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }     
})


    
module.exports = router;