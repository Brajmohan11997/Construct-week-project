export class productPage{

    // img = "div[id='p-image-showcase-container'] img"
    clasicFit = "//section[@id='trendCategories']//img[2]"
    content = "(//div[@class='content_div'])[1]"

    title = '.pd-title'
    description = '.pd-description'
    price = '.pd-price-section'
    discount = '.pd-discount-message'

    clasicFit = "//section[@id='trendCategories']//img[2]"
    content = "(//div[@class='content_div'])[1]"

    getBaseURL(){
        return cy.visit('https://bewakoooff.netlify.app/html/index.html');
    }
    ClasicFitclick(){
        return cy.xpath(this.clasicFit).click({force:true});
    }
    Contentclick(){
        return cy.xpath(this.content).click({force:true});
    }
    // verifyImg(expectedimg){
    //     return cy.get(this.img).eq(0).should('contain.text', expectedimg)
    // }
    verifyTitle(expectedtitle){
        return cy.get(this.title).eq(0).should('contain.text', expectedtitle)
    }
    verifyDescription(expecteddescription){
        return cy.get(this.description).eq(0).should('contain.text', expecteddescription)
    }
    verifyPrice(expectedprice){
        return cy.get(this.price).eq(0).should('contain.text', expectedprice)
    }
    verifyDiscount(expecteddiscount){
        return cy.get(this.discount).eq(0).should('contain.text', expecteddiscount)
    }
    
    
    
}