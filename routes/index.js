const { Router } = require('express')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/depression', (req ,res) => {
    res.render('depression')
})

module.exports = router;