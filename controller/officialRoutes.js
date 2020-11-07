
const express = require('express');

const router = express.Router();



router.get('/masajja', (req,res) => {
    res.render("agricOfficer")
});


router.get('/headfarmer', (req,res) => {
    res.render("headFarmer")
});


module.exports = router;