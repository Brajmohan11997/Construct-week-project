import { homePage } from "./homePage.cy";

var Homepage = new homePage()

describe('HomePage', ()=>{
    it('validate the Shop now page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarToshopnow();
    })
    it('validate the Men page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarTomen();
    })    
    it('validate the women page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarTowomen();
    })
    it('validate the Accessories page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarToaccessories();
    })
    it('validate the Live now page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarTolivenow();
    })
    it('validate the Heavy Duty page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarToheavyduty();
    })
    it('validate the Bewkoof air page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarTobewkoofair();
    })
    it('validate the Official Merch page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarToofficialmerch();
    })
    it('validate the Plus Size page', () =>{
        Homepage.getBaseURL();
        cy.wait(4000);
        Homepage.navbarToplussize()
    })
 


})