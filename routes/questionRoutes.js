const express = require('express');
const questionController = require('../controllers/questionController')
const router = express.Router();

router.get('/questionList', questionController.showQuestionList);
router.get('/question/:id', questionController.getQuestionDetails);
router.post('/createQuestion', questionController.saveQuestionBank);
router.put('/updateQuestion/:id', questionController.updateQuestionBank);

module.exports = router;