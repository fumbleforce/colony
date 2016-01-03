Feature: See available plots

  As a player
  I want to see my available gathering plots
  So I can assign them to be gathered from
  
  Background: In game
    Given I am logged in with settlement
  
  @watch
  Scenario: Three available plots
    Given I navigate to the "/gathering" page
    And have assigned 3 plots to gathering
    When I look at the plot overview
    Then I see that I have three available plots
  