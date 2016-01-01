

Feature: Establish a new settlement

  As a user
  I want to establish a settlement
  So I can start the game

  Scenario: Create a valid settlement
    Given I am logged in
    And I dont have a settlement
    When I configure a valid settlement
    Then the game starts
  
  Scenario: Missing name field
    Given I am logged in
    And I dont have a settlement
    When I configure a settlement without name
    Then I get a "Missing field" error
  
  