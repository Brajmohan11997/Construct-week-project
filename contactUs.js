export class ContactUs{
    contactus='ul[class="f-list-1 f-list"]'

    ensureContactUsEnable(){
       return cy.get(this.contactus)
                .should('contain', 'CUSTOMER SERVICE')
                .should('be.visible')
                .should('not.be.disabled')
                .click({force: true});
    }
  
}