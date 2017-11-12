var db = require('../../db');

var customers = new db.Schema({
    id: String,
    name: String
});

module.exports = db.model('customers', customers);