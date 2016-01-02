Feature: Search for users

  As a player
  I want to search for users
  So I can connect to friends and communicate with people
  
  Scenario: Finding an existing user
    Given I am logged in with settlement
    And I navigate to the "/relations" page
    And I click the People tab
    When I input an existing users username
    Then I see the user in the result list
  