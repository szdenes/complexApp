//javascript files communicating with each other
const express = require('express')
const router = express.Router()
const userController= require(./)

router.get('/', (req, res) => {
    res.render('home-guest')
})
module.exports = router
