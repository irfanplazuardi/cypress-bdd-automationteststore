Feature: Automation Test Store Register

    Scenario: Register with valid account
        Given I access the automation test store homepage
        When I click on the login or register button
        And I click continue in register account box
        And I fill in the account details
        And I click continue
        Then New account will be created
