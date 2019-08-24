module.exports = function(app) {
	const universityDao = require('../daos/university.dao.server.js');

	function populateDatabase(req, res) {
		res.json(universityDao.populateDatabase());
	}

	function truncateDatabase(req, res) {
		res.json(universityDao.truncateDatabase());
	}

	app.post('/api/populate', populateDatabase);
	app.delete('/api/all', truncateDatabase);
};
