const QuestionModel =  require('../models/questions');
const showQuestionList = (req, res) => {
    QuestionModel.find({}, (err, result) =>{
        if(err){
            res.json(err);
        } else {
            console.log(result);
            res.json({data:result});
        }
    });
}
const saveQuestionBank = (req, res) => {
    const question = req.body;
    const newQuestion = new QuestionModel(question);
    newQuestion.save();
    res.json({msg: 'Save Successfully', question})
}

module.exports = {
    showQuestionList,
    saveQuestionBank
}