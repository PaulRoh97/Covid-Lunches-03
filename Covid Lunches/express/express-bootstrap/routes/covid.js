var express = require('express')
const db = require('../models')

const accounts = require("../controllers/account.controller.js");

var router = express.Router()

// // middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/', async function (req, res) {
    res.render('index.njk')
})
router.post('/', accounts.validate)
/*
router.get('/', async function (req, res) {

    const user = await db.accounts.findOne({
        where: {
            email: 'test@test.com'
        }
    })

    res.render('index.njk', {

        profilePic: user.profilePic,

    })
})*/
router.get('/home', async function (req, res) {

    const user = await db.accounts.findOne({
        where: {
            email: 'test@test.com'
        }
    })

    res.render('index-loggedin.njk', {

        profilePic: user.profilePic,

    })
})
router.get('/profile', async function (req, res) {

    const user = await db.accounts.findOne({
        where: {
            email: 'test@test.com'
        }
    })

    res.render('profile-page.njk', {

        profilePic: user.profilePic,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,

    })
})
router.get('/login', async function (req, res) {
    //console.log('in get function')
    res.render('login.njk')   
})

//router.get('/inner-page', accounts.validate)
router.get('/inner-page', async function (req, res) {
    //console.log('in get function')

    //Connect profilePic to user's profilePic
    const user = await db.accounts.findOne({
        where: {
            email: 'test@test.com'
        }
    })
    res.render('inner-page.njk', {

        profilePic: user.profilePic,

    })
})

router.get('/sign-up', async function (req, res) {
    //console.log('in get function')
    res.render('sign-up.njk')
})
router.get('/student-info', async function (req, res) {
    //console.log('in get function')
    res.render('sign-up-student-info-page.njk', {
        name: req.query.firstName
    })
})

router.post('/sign-in', accounts.validate)

router.post('/sign-up', accounts.create)

router.post('/sign-up-student', async function (req, res) {
    //console.log('in get function')
    res.redirect('/inner-page')
})

module.exports = router;