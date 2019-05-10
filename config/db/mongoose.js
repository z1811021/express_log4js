const mongoose = require('mongoose');
const config = require('./config');
const log4js = require('log4js');
const log = log4js.getLogger("newApp");
module.exports = () => {
	mongoose.connect(config.url_string, { useNewUrlParser: true });
	let db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connect err：'));
	db.once('open', callback => {
		log.info('connect MongoDB suc');
	});
	return db;
};
