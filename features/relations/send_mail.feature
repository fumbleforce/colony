Feature: Send mail

  As a player
  I want to send mails to other people
  So I can communicate with them
  
  Scenario: Send and receive
    Given I am logged in with settlement
    When I navigate to the "/relations" page
    And I click the new letter button
    And I fill out the letter form
    And click send
    And log in as the receiver
    Then I see the letter I sent
  