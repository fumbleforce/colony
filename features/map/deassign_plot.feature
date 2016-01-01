Feature: Deassign plot

  As a settlement
  I want to deassign a plot
  So I can get the benefits of other plot-holders
  
  @watch
  Scenario: Deassign plot when plots are assigned
    Given I am logged in with settlement
    When I navigate to the "/map" page
    And click the assign button for militia
    And click the deassign button for militia
    Then a plot is deassigned from militia
    And the plot count is still zero
  
  @watch
  Scenario: Deassign plot when none are assigned
    Given I am logged in with settlement
    When I navigate to the "/map" page
    And click the deassign button for militia when no plots are assigned
    Then the plot count is still zero
