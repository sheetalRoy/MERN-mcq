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
const getQuestionDetails = (req, res) => {
    const qId = req.params.id;
    QuestionModel.findById(qId)
    .then((result) => {
        res.json({msg: 'Fetch Data', result})
    })
    .catch((err) => {
        console.log(err)
    });
}
const saveQuestionBank = (req, res) => {
    const question = req.body;
    const newQuestion = new QuestionModel(question);
    newQuestion.save();
    res.json({msg: 'Save Successfully', question})
}
const updateQuestionBank = (req, res) => {
    const qId = req.params.id;
    QuestionModel.findByIdAndUpdate(qId, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update! Question Id was not found!`
        });
      } else res.send({ message: "Question was updated successfully.", data });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
}
module.exports = {
    showQuestionList,
    getQuestionDetails,
    saveQuestionBank,
    updateQuestionBank
}