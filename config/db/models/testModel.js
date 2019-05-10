const mongoose = require('mongoose');
const TestSchema = require('../schemas/customerSchema');
const Test = mongoose.model('tests', TestSchema);
module.exports = Test;
