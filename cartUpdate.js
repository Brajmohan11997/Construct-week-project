export class CartUpate{
    myBag='span[class="cart-count"]'
    total='p[class="summary-total"]'
    
    getBaseURL(){
        return cy.visit('https://bewakoooff.netlify.app/html/cart')
    }
    validateMyBag(expectedBag){
        return cy.get(this.myBag).should('contain.text', expectedBag)
    }
    validateTotal(expectedToTal){
        return cy.get(this.total).eq(0).should('contain.text', expectedToTal)
    }
}