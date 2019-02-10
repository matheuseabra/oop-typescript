import Person from './Person';
import Class from './Class';
import Quiz from './Quiz';
import IStudent from '../interfaces/IStudent';

/**
 * 
 * @class Student
 * @extends {Person}
 */

export default class Student extends Person implements IStudent {

    public averageGrade: Number;
    public classes: Class[];
    public quizzes: Quiz[];
 
    completeQuiz(quiz: Quiz) {
      quiz.questions.map(question => console.log(`Answered ${question}`));
      quiz.completed = true;
      return `Answered quiz ${quiz.name}`;
    }
}