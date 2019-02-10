import IClass from '../interfaces/IClass';

interface ISubject {
    name: String
}

export default interface ITeacher {
    subject: ISubject;
    classes: IClass[];
}