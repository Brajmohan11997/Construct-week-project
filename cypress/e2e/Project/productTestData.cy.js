import { productPage } from "./productPage.cy";

var ProductPage = new productPage();

describe('Product', ()=>{
    it('validate product deatils',()=>{
        ProductPage.getBaseURL()
        ProductPage.ClasicFitclick()
        ProductPage.Contentclick()
        // ProductPage.verifyImg("div[id='p-image-showcase-container'] img");
        ProductPage.verifyTitle('Rigo');
        ProductPage.verifyDescription("Men's Classic Crewneck T-Shirt");
        ProductPage.verifyPrice('₹599')
        ProductPage.verifyDiscount('TriBe members get an extra discount of ₹40 and FREE shipping.')
    })
})