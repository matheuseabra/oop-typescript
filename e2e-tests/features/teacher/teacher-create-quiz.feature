@teacher-create-quiz
Feature: Teachers can create multiple quizzes with many questions (each question is multiple choice)

  Background: Teacher creates quiz
    Given a user is a teacher
    Then teacher select the questions
    And assign it to a quiz

