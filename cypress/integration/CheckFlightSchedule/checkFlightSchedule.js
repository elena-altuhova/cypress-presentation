/// <reference types="cypress" />

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";
import GenericPage from '../../support/pageobjects/GenericPage'
import OnlineSchedule from "../../support/pageobjects/OnlineSchedule";

const genericPage = new GenericPage();
const onlineSchedule = new OnlineSchedule();

Given('user accesses Landing Page', () => {
    cy.visit(Cypress.env('baseUrl'));
})

When('user selects {string} from header menu', (menuName) =>{
    genericPage.selectMenu(menuName);
})

And('user clicks {string}', (element) =>{
    onlineSchedule.click(element);
})

Then('tables for yesterday, today and tomorrow appear', () =>{
    onlineSchedule.checkYesterdaySchedule();
    onlineSchedule.checkTodaySchedule();
    onlineSchedule.checkTomorrowSchedule();
})

