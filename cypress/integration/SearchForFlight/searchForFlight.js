/// <reference types="cypress" />

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";
import BookFlightForm from '../../support/pageobjects/BookFlightForm';
import GenericPage from '../../support/pageobjects/GenericPage'

const bookFlightForm = new BookFlightForm();
const genericPage = new GenericPage();

Given('user accesses Landing Page', () => {
    cy.visit(Cypress.env('baseUrl'));

And('user introduces search parameters as follows', datatable => {
    var from
    var to
    var departureDate
    var returnDate
    var adults 
    datatable.hashes().forEach(row => {
        from = row.From;
        to = row.To;
        departureDate = new Date(row.DepartureDate);
        returnDate = new Date(row.ReturnDate);
        adults = row.AdultsAmount;
    })
    
    bookFlightForm.selectFromAirport(from);
    bookFlightForm.selectToAirport(to);
    bookFlightForm.setDepartureDate(departureDate);
    bookFlightForm.setReturnDate(returnDate);
})

And('user clicks Search Flights', () => {
    bookFlightForm.clickSearch();
})

Then('error message {string} appears', (ErrorMessage) => {
    genericPage.getErrorMessage().should('have.text', ErrorMessage)
})
})

 