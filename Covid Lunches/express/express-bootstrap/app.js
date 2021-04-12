let express = require('express')

let http = require('http')
let nunjucks = require('nunjucks')
let mysql = require('mysql')
let path = require('path')
let sassMiddleware = require('node-sass-middleware')
var covid = require('./routes/covid')

let app = express()
// const {gethomepage} = require('./routes/index')
// const {getloginpage} = require('./routes/start')

var options = require('./options.js');


// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
  host: options.storageConfig.host,
  user: options.storageConfig.user,
  password: options.storageConfig.password,
  database: options.storageConfig.db
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


app.use('/', covid)

let server = http.createServer(app)

server.listen('3000', () => {
  console.log('Listening on port 3000')
})