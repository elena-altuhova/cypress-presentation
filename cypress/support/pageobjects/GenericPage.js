class GenericPage {
    getErrorMessage(){
        return cy.get('.notification > li');
    }
}
export default GenericPage