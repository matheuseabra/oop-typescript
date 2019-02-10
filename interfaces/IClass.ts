import IStudent from '../interfaces/IStudent';
import ITeacher from '../interfaces/ITeacher';

export default interface IClass {
    subject: String,
    teacher: ITeacher,
    duration: Number,
    students: IStudent[]
}