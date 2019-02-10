import IStudent from '../interfaces/IStudent';
import IClass from '../interfaces/IClass';
import ITeacher from '../interfaces/ITeacher';

/**
 * 
 * @class Class
 * @implements IQuiz
 */

export default class Class implements IClass {

    public subject: String;
    public teacher: ITeacher;
    public duration: Number;
    public students: IStudent[];

    constructor(subject: String, teacher: ITeacher, duration: Number, students: IStudent[]) {
        this.subject = subject;
        this.teacher = teacher;
        this.duration = duration;
        this.students = students;
    }

}