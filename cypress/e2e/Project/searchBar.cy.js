export class searchBar{
    searchbar = 'input[placeholder="search"]'
    searchIcon = 'img[src*="search.svg"]'

    getBaseURL(){
        return cy.visit('https://bewakoooff.netlify.app/html/index.html');
    }
    enterSearchquery(){
        return cy.get(this.searchbar).clear().type(query, { force: true })
    }
    clicksearchIcon(){
        return cy.get(this.searchIcon).click({ force: true })
    }
    validateSearchResults(expectedText) {
        cy.contains(expectedText).should('be.visible');
    }


}