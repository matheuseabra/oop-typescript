import { expect } from '../../config/helpers/chai-imports';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';

defineSupportCode(({Given, When, Then}) => {

    Given(/^Johnny is a student$/, isStudent);
     async function isStudent(): Promise<void>{
        // TODO: write code that turns sentence into concrete actions
    }

    When(/^he answers all questions$/, completeQuiz);
     async function completeQuiz(): Promise<void>{
        // TODO: write code that turns sentence into concrete actions
    }

    Then(/^he completed the quiz"$/, completedQuiz);
     async function completedQuiz(): Promise<void>{
         // TODO: write code that turns sentence into concrete actions
    }
});