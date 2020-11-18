const express = require('express');

const router = express.Router();

const produceReg = require("../Models/Produce")

const multer = require('multer')




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