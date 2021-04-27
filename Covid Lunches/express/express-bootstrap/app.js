const express = require('express'),
    http = require('http'),
    nunjucks = require('nunjucks'),
    mysql = require('mysql'),
    path = require('path'),
    sassMiddleware = require('node-sass-middleware'),
    covid = require('./routes/covid'),
    Sequelize = require('sequelize'),
    db = require('./models')

db.sequelize.sync()

const app = express(),
    bodyParser = require('body-parser'),
    options = require('./options.js')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/sign-in', (req, res) => {
    // Insert Login Code Here
    const email = req.body.email
    const password = req.body.password
    console.log(email, password)
    res.send(`Username: ${email} Password: ${password}`)
})

nunjucks.configure('views', {
  autoescape: true,
  express: app
})


app.use(sassMiddleware({
  src: path.join(__dirname, 'bootstrap'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', covid)

app.get('/config.js', function (req, res) {
    res.sendFile(__dirname + '/config.js')
})

const server = http.createServer(app)

server.listen('3000', () => {
  console.log('Listening on port 3000')
})