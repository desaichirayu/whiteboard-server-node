const answerModel = require('../data/models/answer.model.server');

function answerQuestion(studentId, questionId, answer) {
	answer.student = studentId;
	answer.question = questionId;
	return answerModel.create(answer)
}

function findAllAnswers() {
	return answerModel.find()
}

function findAnswerById(answerId) {
	return answerModel.findById(answerId)
}

function findAnswersByStudent(studentId){
	return answerModel.find({'student': studentId})
}

function findAnswersByQuestion(questionId){
	return answerModel.find({'question': questionId})
}

function findAnswersForStudentsQuestion(studentId, questionId){
	return answerModel.find({
		$and: [
			{'student': studentId},
			{'question': questionId}
		]
	})
}

module.exports = {
	answerQuestion, findAllAnswers, findAnswerById, findAnswersByStudent, findAnswersByQuestion, findAnswersForStudentsQuestion
};
