const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//创建Schema
const TestSchema = new Schema({
	user: String,
	time: String
});

module.exports = TestSchema;
