const mongoose = require('mongoose');

const studentsData = require('../data/students.json');
const questionsData = require('../data/questions.json');
const answersData = require('../data/answers.json');

const studentModel = require('../data/models/student.model.server.js');
const questionModel = require('../data/models/question.model.server.js');
const answerModel = require('../data/models/answer.model.server.js');


function populateDatabase() {
	studentModel.collection.insertMany(studentsData, function(error, docs) {});
	questionModel.collection.insertMany(questionsData, function(error, docs) {});
	answerModel.collection.insertMany(answersData, function(error, docs) {});
	return JSON.parse("{\"status\":\"Successfully Populated Database Collections\"}");
}

function truncateDatabase() {
	answerModel.collection.deleteMany({}, function(error, docs) {});
	questionModel.collection.deleteMany({}, function(error, docs) {});
	studentModel.collection.deleteMany({}, function(error, docs) {});
	return JSON.parse("{\"status\":\"Successfully Truncated Database Collections\"}");
}

module.exports = {
	populateDatabase,
	truncateDatabase
};
