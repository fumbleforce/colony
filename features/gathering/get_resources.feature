Feature: Receive recources

  As a player
  I want to receive recources from assigned plots
  So I can build things
  
  Background: In game
    Given I am logged in with settlement
  
  @watch
  Scenario: Get grains from assigned farming plot
    Given I have assigned a grain plot
    When I wait for the next resource tick
    Then I receive grain
  