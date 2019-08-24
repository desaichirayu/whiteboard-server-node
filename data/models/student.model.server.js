const mongoose = require('mongoose');
const studentSchema = require('./student.schema.server.js');

const studentModel =
	mongoose.model(
		'StudentModel',
		studentSchema);

module.exports = studentModel;
