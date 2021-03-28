let express = require('express')
let http = require('http')
let nunjucks = require('nunjucks')
let path = require('path')
let sassMiddleware = require('node-sass-middleware')

let app = express()
const {gethomepage} = require('./routes/index')

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




app.get('/', gethomepage)

let server = http.createServer(app)

server.listen('3000', () => {
  console.log('Listening on port 3000')
})