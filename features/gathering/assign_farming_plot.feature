Feature: Assign gathering plot

  As a player
  I want to assign a plot to farming
  So I can get grain
  
  Background: In game
    Given I am logged in with settlement
  
  @watch
  Scenario: Assign a plot to grain
    Given I navigate to the "/gathering" page
    When I assign a plot to farming
    Then a plot is added to farming
  