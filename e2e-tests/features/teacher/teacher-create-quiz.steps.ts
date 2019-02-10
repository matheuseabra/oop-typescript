import { expect } from '../../config/helpers/chai-imports';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import Quiz from '../../../models/Quiz';

defineSupportCode(({Given, Then}) => {

    Given(/^a user is a teacher$/, isTeacher);
     async function isTeacher(): Promise<void>{
        // TODO: write code that turns sentence into concrete actions
    }

    Then(/^teacher select the questions$/, selectQuestions);
     async function selectQuestions(): Promise<void>{
        // TODO: write code that turns sentence into concrete actions
    }

    Then(/^assign it to a quiz"$/, completedQuiz);
     async function completedQuiz(quiz: Quiz): Promise<void>{
         // TODO: write code that turns sentence into concrete actions
    }
});