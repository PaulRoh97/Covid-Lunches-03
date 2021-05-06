// const dbConfig = require("../config.json");
var options = require('../options.js');

const Sequelize = require("sequelize");
const sequelize = new Sequelize("socka", options.storageConfig.user, options.storageConfig.password, {
  host: options.storageConfig.host,
  dialect: "mysql",
  logging: false,
  pool: {
    max: 100,
    min: 0,
    idle: 200000,
    acquire: 1000000,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.accounts = require("./account.model.js")(sequelize, Sequelize);

module.exports = db;