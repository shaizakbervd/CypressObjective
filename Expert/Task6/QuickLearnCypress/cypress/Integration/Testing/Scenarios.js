/// <reference types="Cypress" />

import HomePage from "../PageObjects/HomePage";
import ResourcePage from "../PageObjects/ResourcePage";


describe("Scenario Suite", function(){

    const homepg=new HomePage();
    const resourcepg=new ResourcePage();

    beforeEach(()=>{

        cy.visit(Cypress.env("url"));
    });

    it("Case1", function(){
        homepg.Navigate_Resources();
        resourcepg.Navigate_Locator("Designing");
        resourcepg.Navigate_Locator("Photo");
        resourcepg.Get_Heading_Text(1, "Beginner");
        resourcepg.Get_Heading_Text(3, "Intermediate");
        resourcepg.Get_Heading_Text(5, "Advanced");
    });
    
    it("Case2", function(){
        homepg.Navigate("START LEARNING");
        resourcepg.Navigate_Locator("Programming");
        resourcepg.Navigate_Locator("Java");
        resourcepg.Change_Tab();
        resourcepg.Validate_Url();
    });

})