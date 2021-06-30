class BookFlightForm {
    selectFromAirport(town){
        cy.get('.departure-select-box > .select-container > .select-field > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
        cy.get('.select2-search__field').type(town)
        cy.get('li.select2-results__option').click()
    }

    selectToAirport(town){
        cy.get('#select_to > .select-field > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
        cy.get('.select2-search__field').type(town)
        cy.get('li.select2-results__option').click()
    }

    setDepartureDate(departureDate){
        cy.get('.departure-box').click()
    
        var depYear = departureDate.getFullYear();
        var depMonth = departureDate.getMonth();
        tomorrow.setTime(today.getTime() + 86400000);
        this.iterateMonths((depMonth+12*depYear)-(tomorrow.getMonth()+12*tomorrow.getFullYear()));
        this.validateSelectedYearAndMonth(departureDate);        

        cy.get('.ui-state-default').contains(departureDate.getDate()).click()
    }

    setReturnDate(returnDate){
        cy.get('.return-box').click();

        var retYear = returnDate.getFullYear();
        var retMonth = returnDate.getMonth();
        this.iterateMonths((todayMonth+12*todayYear) - (retMonth+12*retYear));
        this.validateSelectedYearAndMonth(returnDate);

        cy.get('.ui-state-default').contains(returnDate.getDate()).click()
    }

    setAdultsAmount(amount){
        cy.get(':nth-child(1) > .wrapp').click()
        var iterAdults = adults;
        while (iterAdults > 1){
            cy.get(':nth-child(1) > .wrapp > .box-content > .ui-spinner > .ui-spinner-up > .ui-button-text').click()
            iterAdults--;
        }
        cy.get('#adultSpinner').should('have.value', adults);
    }

    clickSearch(){
        cy.get('#seatchFlights').click();
    }

    iterateMonths(amount){
        while (amount > 0){
            cy.get('.ui-datepicker-next > .ui-icon').click();
            amount--;
        }
    }

    validateSelectedYearAndMonth(date){
        cy.get('.ui-datepicker-month').should('have.text', new Intl.DateTimeFormat('en-US', options).format(date))
        cy.get('.ui-datepicker-year').should('have.text', date.getFullYear())
    }


}
const today = new Date();
var tomorrow = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const options = { month: 'long'};
export default BookFlightForm