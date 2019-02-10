import IStudent from '../interfaces/IStudent';
import IQuestion from '../interfaces/IQuestion';

export enum EVALUATION {
    INS = "INSUFICCIENT",
    REG = "REGULAR",
    GDD = "GOOD",
    EXC = "EXCELENT",
}

export default interface IQuiz {
    name: String,
    questions: IQuestion[],
    student: IStudent[],
    grade: Number
}