const questionDao = require('../daos/question.dao.server.js');

module.exports = function (app) {

	function createQuestion(req, res) {
		questionDao
			.createQuestion(req.body)
			.then(response => res.send(response))
	}

	function findAllQuestions(req, res) {
		questionDao
			.findAllQuestions()
			.then(questions => res.send(questions))
	}

	function findQuestionById(req, res) {
		questionDao
			.findQuestionById(req.params['id'])
			.then(question => res.json(question))
	}

	function updateQuestion(req, res) {
		questionDao
			.updateQuestion(req.params['id'], req.body)
			.then(status => res.json(status))
	}

	function deleteQuestion(req, res) {
		questionDao
			.deleteQuestion(req.params['id'])
			.then(status => res.json(status))
	}

	app.post('/api/questions', createQuestion);
	app.get('/api/questions', findAllQuestions);
	app.get('/api/questions/:id', findQuestionById);
	app.put('/api/questions/:id', updateQuestion);
	app.delete('/api/questions/:id', deleteQuestion);
};
