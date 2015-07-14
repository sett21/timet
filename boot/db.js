var mongoose = require('mongoose');
var db = mongoose.connection;

module.exports = function (app) {
	db.on('error', console.error);
	db.once('open', function() {
	  console.log('Connect to DataBase ...');
	});

	mongoose.connect('mongodb://localhost/test');	
}