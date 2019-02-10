import Person from './Person';
import Class from './Class';
import Student from './Student';
import Quiz from './Quiz';
import IQuiz from '../interfaces/IQuiz';
import IQuestion from '../interfaces/IQuestion';

export interface ITeacher {
	subject: String;
	classes: Class[];
}

/**
 * 
 * @class Teacher
 * @extends {Person}
 * @implements {ITeacher}
 */

export default class Teacher extends Person implements ITeacher {
	
	public subject: String;
	public classes: Class[];
	public quiz: Quiz;
		
	contructor(subject: String, classes: Class[], quiz: Quiz) {
		this.subject = subject;
		this.classes = classes;
		this.quiz = quiz;
	}

	teach(subject: String): String {
		return `Welcome to my class, today we are going to learn about ${subject}`;
	}

	createQuiz(quiz: Quiz, questions: any[]): String {
		quiz.questions.push(questions);
		return `Quiz was created with questions ${questions}`;
	}

	assignQuizToStudent(quiz: Quiz, student: Student): String {
		student.quizzes.push(quiz);
		return `${quiz} was assgined to student ${student.name}`;
	}

	gradeQuiz(quiz: IQuiz, student: Student) {
		return `${quiz} done by was student ${student.name} graded to ${student.averageGrade}`;
	}

	calculateGrade(student: Student, quiz: IQuiz): Number {
		student.averageGrade = quiz.grade;
		return quiz.grade;
	}
}
