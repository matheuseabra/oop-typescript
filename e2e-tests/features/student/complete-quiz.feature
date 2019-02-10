@example @complete-quiz
Feature: Students solve/answer questions to complete the quiz, but they don't have to complete it at once. (Partial submissions can be made).

  Scenario: Johnny wants to complete the quiz
    Given Johnny is a student
    When he answers all questions
    Then he completed the quiz
    