export class AddToCartAndCheckout{
    bestseller='img[src="https://images.bewakoof.com/uploads/grid/app/category-Icon-Homepage-common-1713936362.gif"]'
    slimfit='img[class="product-image"]'
    addtobag='button[id="pd-add-to-bag-btn"]'
    

    getBaseURL(){
        return cy.visit('https://bewakoooff.netlify.app/html/index.html');
    }
    clickBestSeller(bestseller){
        return cy.get(this.bestseller).first().should('be.visible').click();
    }
    clickSlimFit(slimfit){
        return cy.get(this.slimfit).first().should('be.visible').click();
    }
    clickAddToBag(addtobag){
        return cy.get(this.addtobag).first().should('be.visible');
    }
    

}