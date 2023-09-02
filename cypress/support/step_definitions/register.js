/// <reference types="Cypress" />
import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"; 
import { faker } from '@faker-js/faker'

Before(() => {
    cy.visit("/")
})

Given("I access the automation test store homepage", () => {
   cy.get('img').should('have.attr', 'title', 'Automation Test Store')
}) 

When("I click on the login or register button", () => {
    cy.get('#customernav').click()
})

And("I click continue in register account box", () => {
    cy.contains("button","Continue").click()
})

And("I fill in the account details", () => {
    cy.get('#AccountFrm_firstname').type(faker.person.firstName())
    cy.get('#AccountFrm_lastname').type(faker.person.lastName())
    cy.get("#AccountFrm_email").type(faker.internet.email())
    cy.get("#AccountFrm_telephone").type(faker.phone.number('08##########'))
    cy.get('#AccountFrm_fax').type(faker.phone.number('######'))
    cy.get('#AccountFrm_company').type(faker.company.name("PT. "))
    cy.get("#AccountFrm_address_1").type(faker.location.streetAddress())
    cy.get("#AccountFrm_address_2").type(faker.location.streetAddress())
    cy.get("#AccountFrm_country_id").select("Indonesia")
    cy.get('#AccountFrm_city').type(faker.location.city())
    cy.get("#AccountFrm_zone_id").select("Nusa Tenggara Barat")
    cy.get("#AccountFrm_postcode").type(faker.location.zipCode())
    cy.get("#AccountFrm_loginname").type(faker.internet.userName())
    cy.get('#AccountFrm_password').type("0qwerty'")
    cy.get('#AccountFrm_confirm').type("0qwerty'")
    cy.get("#AccountFrm_newsletter0").click()
    cy.get('#AccountFrm_agree').click()
})

And ("I click continue", () => {
    cy.contains("button","Continue").click()
})

Then ("New account will be created", () => {
    cy.get("span.maintext").should("contain", "Your Account Has Been Created!")
    cy.contains("a","Continue").click()
    cy.get(".menu_text").should("contain", "Welcome back")
})

