// var fs = require('fs'),
// configPath = __dirname + '/config.json';
var parsed = JSON.parse(process.env.AWS_CREDENTIALS);
exports.storageConfig= parsed;