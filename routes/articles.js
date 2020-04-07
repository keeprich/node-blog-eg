const express = require('express');
const router = express.Router();


// creating the route here
router.get('/', (req, res) => {
    res.send("Hello all workes for articles")
    // res.render('index')
    })


module.exports = router;