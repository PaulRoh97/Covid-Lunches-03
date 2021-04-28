let express = require('express')

let http = require('http')
let nunjucks = require('nunjucks')
let mysql = require('mysql')
let path = require('path')
let sassMiddleware = require('node-sass-middleware')
let covid = require('./routes/covid')
let Sequelize = require('sequelize')
let db = require('./models')
const bodyParser = require('body-parser')
db.sequelize.sync()

let app = express()
// const {gethomepage} = require('./routes/index')
// const {getloginpage} = require('./routes/start')

var options = require('./options.js');


nunjucks.configure('views', {
  autoescape: true,
  express: app
})



app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(sassMiddleware({
  src: path.join(__dirname, 'bootstrap'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))

app.use(express.static(path.join(__dirname, 'public')))


app.use('/', covid)


app.get('/config.js', function (req, res) {
    res.sendFile(__dirname + '/config.js');
});
