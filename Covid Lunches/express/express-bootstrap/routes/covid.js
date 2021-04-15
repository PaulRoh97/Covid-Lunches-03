var express = require('express')
const db = require('../models')
var router = express.Router()

// // middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/', async function (req, res){

    const user = await db.accounts.findOne({
        where: { email: 'test@test.com' }
    })

    res.render('index.njk', {

        profilePic: user.profilePic

    })   
})
router.get('/login', async function (req, res){
    //console.log('in get function')
    res.render('login.njk')   
})
router.get('/inner-page', function (req, res){
    //console.log('in get function')
    res.render('inner-page.njk')   
})

module.exports = router;