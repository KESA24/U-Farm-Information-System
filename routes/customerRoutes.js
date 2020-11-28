const express = require('express');

const router = express.Router();

const bookingReg = require("../Models/bookings")


// Access online market

router.get("/ufarm", (req,res)=>{
    res.render("marketland")
})

//Booking Produce
// Get form
router.get("/book", (req,res)=>{
    res.render("booking")
})
//Post booking details to database
router.post('/book', async(req,res)=>{
    try{
        const newOrder = new bookingReg(req.body);
        await newOrder.save(() => {
            console.log('save success')
             res.send('Your order is being processed, our team will be in contact with you soon. Thank you for shopping with us')
            // res.redirect('/ufarm')
        })
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }   
})

// Retrieve bookings and orders
//FarmerOne
router.get('/bookings', async (req, res) => {
    try {
        let items = await bookingReg.find()  

        if (req.query.paymentMethod) {
            items = await bookingReg.find({ paymentMethod: req.query.paymentMethod })
        }
        res.render('bookingslist', { title: 'Bookings and orders', users: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database");
    }
})

//Urban Farmer
router.get('/bookings2', async (req, res) => {
    try {
        let items = await bookingReg.find()  

        if (req.query.paymentMethod) {
            items = await bookingReg.find({ paymentMethod: req.query.paymentMethod })
        }
        res.render('bookingsUF', { title: 'Bookings and orders', users: items })
    } catch (err) {
        res.status(400).send("Unable to find items in the database");
    }
})

module.exports = router;