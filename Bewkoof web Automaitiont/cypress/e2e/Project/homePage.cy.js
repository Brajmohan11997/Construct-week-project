export class homePage{

    shoNow = '//span[text()="SHOP NOW"]';
    men = '//span[text()="MEN"]';
    women = '//span[text()="WOMEN"]';
    accessories = '//span[text()="ACCESSORIES"]';
    liveNow = '//span[text()="LIVE NOW"]';
    heavyDuty = '//span[text()="HEAVY DUTY"]';
    bewkoofAir = '//span[text()="BEWAKOOF AIR"]';
    officialMerch = '//span[text()="OFFICIAL MERCH"]';
    plusSize = '//span[text()="PLUS SIZE"]';

    getBaseURL () {
        return cy.visit('https://bewakoooff.netlify.app/html/index.html');
    }
    Shopnowclick(){
        return cy.xpath(this.shoNow).contains('SHOP NOW').should('be.visible').click({force:true})
    }

    Menclick(){
        return cy.xpath(this.men).contains('MEN').should('be.visible').click();
    }
    Womenclick(){
        return cy.xpath(this.women).contains('WOMEN').should('be.visible').click();
    }
    Accessoriesclick(){
        return cy.xpath(this.accessories).contains('ACCESSORIES').should('be.visible').click();
    }
    Livenowclick(){
        return cy.xpath(this.liveNow).contains('LIVE NOW').should('be.visible').click();
    }

    HeavyDutyclick(){
        return cy.xpath(this.heavyDuty).contains('HEAVY DUTY').should('be.visible').click();
    }
    BewkoofAirclick(){
        return cy.xpath(this.bewkoofAir).contains('BEWAKOOF AIR').should('be.visible').click();
    }
    OfficialMerchclick(){
        return cy.xpath(this.officialMerch).contains('OFFICIAL MERCH').should('be.visible').click();
    }
    Plussizeclick(){
        return cy.xpath(this.plusSize).contains('PLUS SIZE').should('be.visible').click();
    }


    navbarToshopnow() {
        this.Shopnowclick()
    }
    navbarTomen(){
        this.Menclick()
    }
    navbarTowomen(){ 
        this.Womenclick()
    }
    navbarToaccessories(){
        this.Accessoriesclick()
    }
    navbarTolivenow(){
        this.Livenowclick()
    }
    navbarToheavyduty(){
        this.HeavyDutyclick()
    }
    navbarTobewkoofair(){
        this.BewkoofAirclick()
    }
    navbarToofficialmerch(){
        this.OfficialMerchclick()
    }
    navbarToplussize(){
        this.Plussizeclick()
    }
}