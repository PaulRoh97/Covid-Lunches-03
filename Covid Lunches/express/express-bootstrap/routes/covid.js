var express = require('express')
var router = express.Router()

// // middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/', function (req, res){
    //console.log('in get function')
    res.render('index.html')   
})
router.get('/login', function (req, res){
    //console.log('in get function')
    res.render('login.html')   
})
router.get('/inner-page', function (req, res){
    //console.log('in get function')
    res.render('inner-page.html')   
})
module.exports = router;