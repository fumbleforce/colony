Feature: Assign plot

  As a settlement
  I want to assign a plot
  So I can get the benefits of the plot-holder
  
  Scenario: Assign plot when free room
    Given I am logged in with settlement
    When I navigate to the "/map" page
    And click the assign button for militia
    Then a plot is assigned to militia
  
  Scenario: Assign multiple plot when free room
    Given I am logged in with settlement
    When I navigate to the "/map" page
    And click the assign button for militia max times and another
    Then max plots are added
