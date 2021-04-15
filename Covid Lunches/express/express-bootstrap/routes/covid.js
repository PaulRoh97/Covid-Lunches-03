var express = require('express')
const db = require('../models')
var router = express.Router()

// // middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/', async function (req, res) {

    const user = await db.accounts.findOne({
        where: {
            email: 'test@test.com'
        }
    })

    res.render('index.njk', {

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
    res.render('login.html')
})
router.get('/inner-page', function (req, res) {
    //console.log('in get function')
    res.render('inner-page.html')
})
module.exports = router;