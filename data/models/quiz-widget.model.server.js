const mongoose = require('mongoose');
const quizWidgetSchema = require('./quiz-widget.schema.server.js');

const quizWidgetModel = mongoose.model('QuizWidgetModel', quizWidgetSchema);

module.exports = quizWidgetModel;
