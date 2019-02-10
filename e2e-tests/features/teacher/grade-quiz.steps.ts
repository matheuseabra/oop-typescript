import { expect } from '../../config/helpers/chai-imports';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';

defineSupportCode(({Given, Then}) => {

    Given(/^a user is a teacher$/, isStudent);
     async function isStudent(): Promise<void>{
        // TODO: write code that turns sentence into concrete actions
    }

    Then(/^the teacher can assign a quiz to a student"$/, gradeQuiz);
     async function gradeQuiz(): Promise<void>{
         // TODO: write code that turns sentence into concrete actions
    }
});