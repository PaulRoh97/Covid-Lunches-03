var fs = require('fs'),
configPath = __dirname + '/config.json';
var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
exports.storageConfig= parsed;