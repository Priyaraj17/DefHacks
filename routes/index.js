const { Router } = require('express')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req ,res) => {
    res.render('depression')
})

router.get('/flappy', (req, res) => {
    res.render('flappy')
})

router.get('/snakes', (req, res) => {
    res.render('snake')
})


router.get('/quotes', (req ,res) => {
    res.render('quotes')
})

router.get('/patatap', (req, res) => {
    res.redirect('https://patatap.com')
})

module.exports = router;