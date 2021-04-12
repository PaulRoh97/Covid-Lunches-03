let express = require('express')

let http = require('http')
let nunjucks = require('nunjucks')
let mysql = require('mysql')
let path = require('path')
let sassMiddleware = require('node-sass-middleware')
let covid = require('./routes/covid')
let Sequelize = require('sequelize')

let app = express()
// const {gethomepage} = require('./routes/index')
// const {getloginpage} = require('./routes/start')

var options = require('./options.js');


// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
var db = new Sequelize('socka', options.storageConfig.user, options.storageConfig.password, {
  host: options.storageConfig.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



//Testing DB Table creation/Sync
const Account = db.define('accounts', { accountID: Sequelize.INTEGER, name: Sequelize.STRING, profilePic: Sequelize.STRING, testData: Sequelize.STRING});

db.sync({ force: true })
  .then(() => {
    console.log('Database & Tables created!');

  });

  
//Creating "Account" in the new table
db.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!')

    Account.bulkCreate([
      { accountID: 1, name: 'Adam', profilePic: '/public/img/pumpple.jpg'}
    ]).then(function() {
      return Account.findAll()
    }).then(function(accounts) {
      console.log(accounts)
    })
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


let server = http.createServer(app)

server.listen('3000', () => {
  console.log('Listening on port 3000')
})