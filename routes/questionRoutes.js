const express = require('express');
const questionController = require('../controllers/questionController')
const router = express.Router();
const QuestionModel =  require('../models/questions');

router.get('/questionList', questionController.showQuestionList);
router.post('/createQuestion', questionController.saveQuestionBank);

module.exports = router;