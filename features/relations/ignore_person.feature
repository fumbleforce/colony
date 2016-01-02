Feature: Ignore person

  As a player
  I want to ignore another player
  So I can play in peace
  
  Scenario: Ignore player
    Given I am logged in with settlement
    And I navigate to the "/relations" page
    And I click the People tab
    When I search for an existing user
    And click the ignore button
    Then the user is ignored and removed from the list
  