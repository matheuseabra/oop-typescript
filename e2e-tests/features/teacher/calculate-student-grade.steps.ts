import { expect } from '../../config/helpers/chai-imports';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';

defineSupportCode(({Given, Then}) => {

    Given(/^a teacher created the quiz$/, createQuiz);
     async function createQuiz(): Promise<void>{
        // TODO: write code that turns sentence into concrete actions
    }

    Then(/^the teacher calculate the student's grade"$/, calculateGrade);
     async function calculateGrade(): Promise<void>{
         // TODO: write code that turns sentence into concrete actions
    }
});