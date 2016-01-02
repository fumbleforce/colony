Feature: Add a friend

  As a player
  I want to add a friend
  So I can contact them easily
  
  Scenario: Add friend
    Given I am logged in with settlement
    When I navigate to the "/relations" page
    And I click the People tab
    And I search for an existing user
    And click the Add friend button
    Then the user is added to friends list
  