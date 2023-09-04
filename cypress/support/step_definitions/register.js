/// <reference types="Cypress" />
import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from '@faker-js/faker'

let data = require("../../fixtures/account.json");

let globalFirstName1 = faker.person.firstName()
let globalFirstName2 = faker.person.firstName()


Given("I access the automation test store homepage", () => {
    cy.visit("/")
    cy.get('img').should('have.attr', 'title', 'Automation Test Store')
})

When("I click on the login or register button", () => {
    cy.get('#customernav').click()
})

And("I click continue in register account box", () => {
    cy.contains("button", "Continue").click()
})

And("I fill in the account details", () => {
    let lastName = faker.person.lastName()
    let email = faker.internet.email()
    let telephone = faker.phone.number('08##########')
    let fax = faker.phone.number('######')
    let company = faker.company.name("PT. ")
    let address1 = faker.location.streetAddress()
    let address2 = faker.location.streetAddress()
    let city = faker.location.city()
    let postcode = faker.location.zipCode()
    let loginName = globalFirstName1 + faker.number.int(100)

    cy.get('#AccountFrm_firstname').type(globalFirstName1)
    cy.get('#AccountFrm_lastname').type(lastName)
    cy.get("#AccountFrm_email").type(email)
    cy.get("#AccountFrm_telephone").type(telephone)
    cy.get('#AccountFrm_fax').type(fax)
    cy.get('#AccountFrm_company').type(company)
    cy.get("#AccountFrm_address_1").type(address1)
    cy.get("#AccountFrm_address_2").type(address2)
    cy.get("#AccountFrm_country_id").select("Indonesia")
    cy.get('#AccountFrm_city').type(city)
    cy.get("#AccountFrm_zone_id").select("Nusa Tenggara Barat")
    cy.get("#AccountFrm_postcode").type(postcode)
    cy.get("#AccountFrm_loginname").type(loginName)
    cy.get('#AccountFrm_password').type(data.password, {log: false})
    cy.get('#AccountFrm_confirm').type(data.password, {log: false})
    cy.get("#AccountFrm_newsletter0").click()
    cy.get('#AccountFrm_agree').click()
})

And("I fill in the account details when only fill no mandatory fields", () => {
    let telephone = faker.phone.number('08##########')
    let fax = faker.phone.number('######')
    let company = faker.company.name("PT. ")
    let address2 = faker.location.streetAddress()

    cy.get("#AccountFrm_telephone").type(telephone)
    cy.get('#AccountFrm_fax').type(fax)
    cy.get('#AccountFrm_company').type(company)
    cy.get("#AccountFrm_address_2").type(address2)
    cy.get("#AccountFrm_newsletter0").click()
    cy.get('#AccountFrm_agree').click()
})

And("I fill in the account details when only fill mandatory fields", () => {
    let lastName = faker.person.lastName()
    let email = faker.internet.email()
    let address1 = faker.location.streetAddress()
    let city = faker.location.city()
    let postcode = faker.location.zipCode()
    let loginName = globalFirstName2 + faker.number.int(100)

    cy.get('#AccountFrm_firstname').type(globalFirstName2)
    cy.get('#AccountFrm_lastname').type(lastName)
    cy.get("#AccountFrm_email").type(email)
    cy.get("#AccountFrm_address_1").type(address1)
    cy.get("#AccountFrm_country_id").select("Indonesia")
    cy.get('#AccountFrm_city').type(city)
    cy.get("#AccountFrm_zone_id").select("Nusa Tenggara Barat")
    cy.get("#AccountFrm_postcode").type(postcode)
    cy.get("#AccountFrm_loginname").type(loginName)
    cy.get('#AccountFrm_password').type(data.password, {log: false})
    cy.get('#AccountFrm_confirm').type(data.password, {log: false})
    cy.get("#AccountFrm_newsletter0").click()
    cy.get('#AccountFrm_agree').click()
})

And("I fill in the account details with existing email account", () => {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    let email = faker.internet.email()
    let telephone = faker.phone.number('08##########')
    let fax = faker.phone.number('######')
    let company = faker.company.name("PT. ")
    let address1 = faker.location.streetAddress()
    let address2 = faker.location.streetAddress()
    let city = faker.location.city()
    let postcode = faker.location.zipCode()
    let loginName = firstName + faker.number.int(100)

    cy.get('#AccountFrm_firstname').type(firstName)
    cy.get('#AccountFrm_lastname').type(lastName)
    cy.get("#AccountFrm_email").type(email = data.email,{log: false})
    cy.get("#AccountFrm_telephone").type(telephone)
    cy.get('#AccountFrm_fax').type(fax)
    cy.get('#AccountFrm_company').type(company)
    cy.get("#AccountFrm_address_1").type(address1)
    cy.get("#AccountFrm_address_2").type(address2)
    cy.get("#AccountFrm_country_id").select("Indonesia")
    cy.get('#AccountFrm_city').type(city)
    cy.get("#AccountFrm_zone_id").select("Nusa Tenggara Barat")
    cy.get("#AccountFrm_postcode").type(postcode)
    cy.get("#AccountFrm_loginname").type(loginName)
    cy.get('#AccountFrm_password').type(data.password, {log: false})
    cy.get('#AccountFrm_confirm').type(data.password, {log: false})
    cy.get("#AccountFrm_newsletter0").click()
    cy.get('#AccountFrm_agree').click()
})

And("I fill in the account details with existing username account", () => {
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()
    let email = faker.internet.email()
    let telephone = faker.phone.number('08##########')
    let fax = faker.phone.number('######')
    let company = faker.company.name("PT. ")
    let address1 = faker.location.streetAddress()
    let address2 = faker.location.streetAddress()
    let city = faker.location.city()
    let postcode = faker.location.zipCode()
    let loginName = firstName + faker.number.int(100)

    cy.get('#AccountFrm_firstname').type(firstName)
    cy.get('#AccountFrm_lastname').type(lastName)
    cy.get("#AccountFrm_email").type(email)
    cy.get("#AccountFrm_telephone").type(telephone)
    cy.get('#AccountFrm_fax').type(fax)
    cy.get('#AccountFrm_company').type(company)
    cy.get("#AccountFrm_address_1").type(address1)
    cy.get("#AccountFrm_address_2").type(address2)
    cy.get("#AccountFrm_country_id").select("Indonesia")
    cy.get('#AccountFrm_city').type(city)
    cy.get("#AccountFrm_zone_id").select("Nusa Tenggara Barat")
    cy.get("#AccountFrm_postcode").type(postcode)
    cy.get("#AccountFrm_loginname").type(loginName = data.name, {log: false})
    cy.get('#AccountFrm_password').type(data.password, {log: false})
    cy.get('#AccountFrm_confirm').type(data.password, {log: false})
    cy.get("#AccountFrm_newsletter0").click()
    cy.get('#AccountFrm_agree').click()
})


And("I click continue", () => {
    cy.contains("button", "Continue").click()
})

Then("New account will be created when all field is inputted", () => {
    cy.get("span.maintext").should("contain", "Your Account Has Been Created!")
    cy.contains("a", "Continue").click()
    cy.get(".menu_text").should("contain", "Welcome back " + globalFirstName1)
})

Then("New account will be created when only mandatory field is inputted", () => {
    cy.get("span.maintext").should("contain", "Your Account Has Been Created!")
    cy.contains("a", "Continue").click()
    cy.get(".menu_text").should("contain", "Welcome back " + globalFirstName2)
})

Then("It will show error message to fill in required fields", () => {
    cy.get('.help-block').contains("First Name must be between 1 and 32 characters!")
    cy.get('.help-block').contains("Last Name must be between 1 and 32 characters!")
    cy.get('.help-block').contains("Email Address does not appear to be valid!")
    cy.get('.help-block').contains("Address 1 must be between 3 and 128 characters!")
    cy.get('.help-block').contains("City must be between 3 and 128 characters!")
    cy.get('.help-block').contains("Please select a region / state!")
    cy.get('.help-block').contains("Zip/postal code must be between 3 and 10 characters!")
    cy.get('.help-block').contains("Login name must be alphanumeric only and between 5 and 64 characters!")
    cy.get('.help-block').contains("Password must be between 4 and 20 characters!")
})

Then("It will show error message Error: E-Mail Address is already registered!", () => {
    cy.get(".alert").contains('Error: E-Mail Address is already registered!')
})

Then("It will show error message This login name is not available. Try different login name!", () => {
    cy.get(".alert").contains('This login name is not available. Try different login name!')
})


