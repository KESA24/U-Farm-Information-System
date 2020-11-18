const express = require('express');

const router = express.Router();

const urbanFarmerReg = require("../Models/urbanFarmer")

const produceReg = require("../Models/Produce")

const multer = require('multer')


// FarmerOne Routes

// Get dashboard
router.get('/farmerOneDash', (req,res)=>{
    res.render("farmerOneDash")
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
    
// End of FarmerOne Routes



//Urban Farmer Routes

//farmer dashboard
router.get('/ufarmerdash', (req,res) => {
    res.render("ufarmerDash")
}); 

// Upload produce

//Registration form
router.get('/uproduce', (req,res) => {
    res.render("produceReg")
});

//Upload Produce
//Define storage for the images
const storage = multer.diskStorage({
    //destination for files
     destination:function(request,file,callback){
         callback(null,"./Public/uploads/");
     },
 //Addback extension
     filename:function(request,file,callback){
     callback(null, Date.now()+ file.originalname);
         
     },
 })
 
 //upload parameters for multer
 const upload = multer({
     storage:storage,
     limits:{
         fieldSize: 1024*1024*3,
     }
 })

router.post('/uproduce',upload.single('pImage'), async(req,res)=>{
    console.log(req.file);
    try{
        const registeredProduce = new produceReg(req.body);
        registeredProduce.pImage = req.file.filename;
        await registeredProduce.save(() => {
            console.log('save success')
            //  res.send('Thank you for your registration!')
            res.redirect('/ufarmerDash')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})

router.get("/produceImage", async(req,res) =>{
    try{
        const retrieveproduce = await produceReg.find();
        res.render("pimage" , {items:retrieveproduce})
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})








module.exports = router;