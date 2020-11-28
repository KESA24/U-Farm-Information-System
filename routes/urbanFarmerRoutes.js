const express = require('express');

const router = express.Router();

const produceReg = require("../Models/Produce")

const multer = require('multer')

//farmer dashboard
router.get('/ufarmerdash', (req,res) => {
    res.redirect("/producelist")
}); 


// Upload produce

//Registration form
router.get('/uproduce', (req,res) => {
    res.render("produceReg")
});

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
//Save Produce to Database
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
//Retrieve and search Produce in the database
router.get("/producelist", async(req,res) =>{
    try{
        const retrieveproduce = await produceReg.find();

        if (req.query.ward) {
            retrieveproduce = await produceReg.find({ward: req.query.ward})
        }

        res.render("producelistUF" , {items:retrieveproduce})
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})
//Update Produce Details
router.get('/updateproduce/:id', async (req, res) => {
    
    try {
        const updateproduce = await produceReg.findOne({ _id:req.params.id })
         res.render('produceUpdate', { item: updateproduce })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
})

router.post('/updateproduce', async (req, res) => {
    try {
        await produceReg.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/producelist');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }    
})



//Delete wrong registrations
router.post('/deleteproduce', async(req,res)=>{
    
    try{
        await produceReg.deleteOne({_id: req.body.id })
        res.redirect('back')
    }catch(err){
        res.status(400).send("Unable to delete item in the database") 
    }


 
});



module.exports = router;