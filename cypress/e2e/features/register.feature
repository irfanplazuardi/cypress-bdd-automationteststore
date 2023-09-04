Feature: Automation Test Store Register

    Scenario: Register with valid data
        Given I access the automation test store homepage
        When I click on the login or register button
        And I click continue in register account box
        And I fill in the account details
        And I click continue
        Then New account will be created when all field is inputted

    Scenario: Register with empty data
        Given I access the automation test store homepage
        When I click on the login or register button
        And I click continue in register account box
        And I click continue
        Then It will show error message to fill in required fields

    Scenario: Register when only fill no mandatory fields
        Given I access the automation test store homepage
        When I click on the login or register button
        And I click continue in register account box
        And I fill in the account details when only fill no mandatory fields
        And I click continue
        Then It will show error message to fill in required fields

    Scenario: Register when only fill mandatory fields
        Given I access the automation test store homepage
        When I click on the login or register button
        And I click continue in register account box
        And I fill in the account details when only fill mandatory fields
        And I click continue
        Then New account will be created when only mandatory field is inputted

    Scenario: Register with existing email account
        Given I access the automation test store homepage
        When I click on the login or register button
        And I click continue in register account box
        And I fill in the account details with existing email account
        And I click continue
        Then It will show error message Error: E-Mail Address is already registered!

    Scenario: Register with existing username account
        Given I access the automation test store homepage
        When I click on the login or register button
        And I click continue in register account box
        And I fill in the account details with existing username account
        And I click continue
        Then It will show error message This login name is not available. Try different login name!



