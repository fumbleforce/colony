Feature: Register user

  As a person
  I want to register a user
  So I can access the game
  
  Scenario: Registering a valid user
    Given I navigate to the "/" page
    When I click the register button
    And fill out the registration form
    And click the registration button
    Then I am logged in
  