var express = require('express')
const db = require('../models')
var router = express.Router()
var login_auth = require('../routes/login-auth.js')

// // middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/', async function (req, res){

    const user = await db.accounts.findOne({
        where: { email: 'test@test.com' }
    })

    res.render('index.html', {

        profilePic: user.profilePic

    })   
})
router.get('/login', async function (req, res){
    //console.log('in get function')
    res.render('login.html')   
})
router.get('/inner-page', function (req, res){
    //console.log('in get function')
    let email = req.query.myEmail;
    let password = req.query.myPassword;
    let count = login_auth.validateLogin(email, password);
    let valid =count.countVal;
    console.log("count returned: "+count.countVal);
    if(valid){
        console.log("login credentials correct")
        res.render('inner-page.html')  
    }else{
        res.redirect('/login')
        console.log("login credentials incorrect")
    }
     
})
module.exports = router;