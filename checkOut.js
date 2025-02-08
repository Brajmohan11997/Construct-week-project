export class CheckOut{
    addAddress='button[class="add-address"]'
    fullName='input[class="form-name"]'
    mobileNumber='input[class="form-mobile"]'
    pinCode='input[class="form-zip"]'
    city='input[class="form-city"]'
    state='input[class="form-state"]'
    flatNo='input[class="form-flatno"]'
    area='input[class="form-locality"]'
    landMark='input[placeholder="Landmark(optional)"]'
    placeOrder='button[class="place-order"]'

    clickAddress(){
       return cy.get(this.addAddress).first().click()
    }
    enterFullname(FullName){
       return cy.get(this.fullName).should('be.visible').type(FullName)
    }
    enterMobilenumber(MobileNumber){
       return cy.get(this.mobileNumber).should('be.visible').type(MobileNumber)
    }
    enterPincode(PinCode){
       return cy.get(this.pinCode).should('be.visible').type(PinCode)
    }
    enterCity(CitY){
       return cy.get(this.city).should('be.visible').type(CitY)
    }
    enterState(StatE){
       return cy.get(this.state).should('be.visible').type(StatE)
    }
    enterFlatno(FlatNo){
       return cy.get(this.flatNo).should('be.visible').type(FlatNo)
    }
    enterArea(AreA){
       return cy.get(this.area).should('be.visible').type(AreA)
    }
    enterLandmark(LandMark){
       return cy.get(this.landMark).should('be.visible').type(LandMark)
    }
    clickOrder(){
       return cy.get(this.placeOrder).click()
    }

}