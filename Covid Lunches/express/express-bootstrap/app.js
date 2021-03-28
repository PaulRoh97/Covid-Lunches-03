let express = require('express')
let http = require('http')
let nunjucks = require('nunjucks')
let mysql = require('mysql')
let path = require('path')
let sassMiddleware = require('node-sass-middleware')

let app = express()
const {gethomepage} = require('./routes/index')


// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
  host: 'softwaredev.cfbh0dw0st0e.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: '14AWGblu!!',
  database: 'socka'
});

// connect to database
db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.db = db;

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