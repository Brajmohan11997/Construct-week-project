export class FooterLink{
    footerLink='ul[class="f-list-2 f-list"]'

    clickFooterLink(){
        return cy.get(this.footerLink)
                 .should('contain', 'About Us')
                 .should('be.visible')
                 .should('not.be.disabled')
                 .click()
    }
}