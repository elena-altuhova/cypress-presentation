class GenericPage {
    getErrorMessage(){
        return cy.get('.notification > li');
    }
    
    selectMenu(menuName){
        cy.get('.hamburger-wrapp').click();
        switch(menuName){
            case "OnlineSchedule":
                cy.get('.navigation a[href="/online-schedule-en/"]').click()
        }
    }
}
export default GenericPage