import { AddToCartAndCheckout } from "./pageObject/addTocart";
import { CartUpate } from "./pageObject/cartUpdate";
import { CheckOut } from "./pageObject/checkOut";
import { ContactUs } from "./pageObject/contactUs";
import { FooterLink } from "./pageObject/footerLink";
import { ResponsivenessAndLayout } from "./pageObject/responsivenessAndlayout";


var addTocartAndcheckout=new AddToCartAndCheckout
var cartUpate=new CartUpate
var checkOut=new CheckOut
var contactUs=new ContactUs
var footerLink=new FooterLink
var responsivenessAndlayout=new ResponsivenessAndLayout

describe('Bewakooff', () => {
    it('add a products to cart', () => {
        addTocartAndcheckout.getBaseURL()
        addTocartAndcheckout.clickBestSeller()
        addTocartAndcheckout.clickSlimFit()
        addTocartAndcheckout.clickAddToBag()
        
    });
    it('update the cart', () => {
        cartUpate.getBaseURL()
        cartUpate.validateMyBag('1 items(s)')
        cartUpate.validateTotal('₹799')
        
    });
    it('check out process', () => {
        cartUpate.getBaseURL()
        checkOut.clickAddress()
        checkOut.enterFullname('JatinderKumar')
        checkOut.enterMobilenumber('6006445575')
        checkOut.enterPincode('181133')
        checkOut.enterCity('Jammu')
        checkOut.enterState('Jammu&Kasmhir')
        checkOut.enterFlatno('10')
        checkOut.enterArea('Dollian')
        checkOut.enterLandmark('K.K Model School')
        checkOut.clickOrder()
        
    });
    it('contact us', () => {
        addTocartAndcheckout.getBaseURL()
        contactUs.ensureContactUsEnable()
        
    });
    it('footer link', () => {
        addTocartAndcheckout.getBaseURL()
        footerLink.clickFooterLink()
        
    });
    it('responsiveness and layout', () => {
        addTocartAndcheckout.getBaseURL()
        responsivenessAndlayout.getNav()
        responsivenessAndlayout.getMainContent()
        responsivenessAndlayout.getFooter()
        
    });
});
