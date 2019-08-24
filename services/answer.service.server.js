const answerDao = require('../daos/answer.dao.server.js');

module.exports = function(app) {
	function answerQuestion(req, res) {
		answerDao.answerQuestion(req.params['sid'], req.params['qid'], req.body)
			.then(response => res.send(response))
	}

	function findAllAnswers(req, res) {
		answerDao.findAllAnswers().then(answers => res.send(answers))
	}

	function findAnswerById(req, res){
		answerDao.findAnswerById(req.params['aid']).then(answer => res.json(answer))
	}

	function findAnswersByQuestion(req, res){
		answerDao.findAnswersByQuestion(req.params['qid']).then(answers => res.send(answers))
	}

	function findAnswersByStudent(req, res){
		answerDao.findAnswersByStudent(req.params['sid']).then(answers => res.send(answers))
	}

	function findAnswersForStudentsQuestion(req, res){
		answerDao.findAnswersForStudentsQuestion(req.params['sid'], req.params['qid']).then(answers => res.send(answers))
	}

	app.post("/api/students/:sid/questions/:qid/answers", answerQuestion);
	app.get("/api/answers", findAllAnswers);
	app.get("/api/answers/:aid", findAnswerById);
	app.get("/api/questions/:qid/answers", findAnswersByQuestion);
	app.get("/api/students/:sid/answers", findAnswersByStudent);
	app.get("/api/students/:sid/questions/:qid/answers", findAnswersForStudentsQuestion);
	app.get("/api/questions/:qid/students/:sid/answers", findAnswersForStudentsQuestion);
};
