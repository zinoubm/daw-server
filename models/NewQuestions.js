const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionsSchema = new Schema({
    list : [
        {
            question: String,
            answers: [
                {
                    answer : String,
                    value : Number
                }
            ]
        }
    ]
});
module.exports = mongoose.model("NewQuestions", QuestionsSchema);
