Feature: Log in

  As a user
  I want to log in
  So I can start the game

  Scenario: Log in with valid credentials
    Given I am not logged in
    When I navigate to the site
    And input valid credentials
    Then I am logged in
  