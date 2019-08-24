const studentDao = require('../daos/student.dao.server.js');

module.exports = function (app) {

	function createStudent(req, res) {
		studentDao
			.createStudent(req.body)
			.then(response => res.send(response))
	}

	function findAllStudents(req, res) {
		studentDao
			.findAllStudents()
			.then(students => res.send(students))
	}

	function findStudentById(req, res) {
		studentDao
			.findStudentById(req.params['id'])
			.then(student => res.json(student))
	}

	function updateStudent(req, res) {
		studentDao
			.updateStudent(req.params['id'], req.body)
			.then(status => res.json(status))
	}

	function deleteStudent(req, res) {
		studentDao
			.deleteStudent(req.params['id'])
			.then(status => res.json(status))
	}

	app.post('/api/students', createStudent);
	app.get('/api/students', findAllStudents);
	app.get('/api/students/:id', findStudentById);
	app.put('/api/students/:id', updateStudent);
	app.delete('/api/students/:id', deleteStudent);
};
