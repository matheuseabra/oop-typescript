export default interface IQuiz {
    name: String,
    questions: any[],
    grade: Number,
    completed?: Boolean
}

/**
 * 
 * @class Quiz
 * @implements IQuiz
 */

export default class Quiz implements IQuiz {

    public name: String;
    public questions: any[];
    public grade: Number;
    public completed?: Boolean;

    constructor(name: String, questions: String[], grade?: Number, completed?: Boolean) {
        this.name = name;
        this.questions = questions;
        this.grade = grade;
        this.completed = completed;
    }

}