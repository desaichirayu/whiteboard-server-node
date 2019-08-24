const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const remoteMongoURL = process.env.MONGODB_URI;
const username = process.env.MLAB_USERNAME_WEBDEV;
const password = process.env.MLAB_PASSWORD_WEBDEV;

const connection = require('./data/db.js')(remoteMongoURL, username, password);

// Configure parsing JSON from body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const universityService = require('./services/university.service.server.js')(app);
const studentService = require('./services/student.service.server.js')(app);
const questionService = require('./services/question.service.server.js')(app);
const answerService = require('./services/answer.service.server.js')(app);

app.listen(port);
