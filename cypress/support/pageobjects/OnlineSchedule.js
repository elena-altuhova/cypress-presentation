class OnlineSchedule {
    click(element){
        switch(element){
            case "Departure":
                cy.get('#flights-departure').click();
                break;
            case "Arrival":
                cy.get('#flights-arrival').click();
                break;
        }
    }

    checkYesterdaySchedule(){
        yesterday.setDate(today.getDate() - 1);
        
        cy.get('div[class = "table-schedule-body row day"]').first()
            .should('have.text', 'Flight Schedule for yesterday ' + this.formatDate(yesterday));
    }

    checkTodaySchedule(){
        cy.get('div[class = "table-schedule-body row day"]').eq(1)
            .should('have.text', 'Flight Schedule for today ' + this.formatDate(today));
    }

    checkTomorrowSchedule(){
        tomorrow.setDate(today.getDate() + 1);

        cy.get('div[class = "table-schedule-body row day"]').eq(2)
            .should('have.text', 'Flight Schedule for tomorrow ' + this.formatDate(tomorrow));
    }

    formatDate(date) {
        var dd = date.getDate();
        var mm = date.getMonth()+1; 
        var yyyy = date.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 

        if(mm<10) 
        {
            mm='0'+mm;
        } 

        return dd + '.' + mm +'.' + yyyy;
    }
}

const today = new Date();
const yesterday = new Date();
const tomorrow = new Date();
export default OnlineSchedule