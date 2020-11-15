const { Router } = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.ejs')
})

router.get('/about', (req, res) => {
    res.send('This is the about us page')
})

router.get('/depression', (req ,res) => {
    res.send('This is the page which informs us about depression')
})

module.exports = router;