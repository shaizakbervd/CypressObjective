/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";
import CartPage from "../PageObjects/CartPage";


describe("Scenario Suite", function(){

    let fixture_data;
    const loginpg=new LoginPage();
    const homepg=new HomePage();
    const cartpg=new CartPage();

    beforeEach(()=>{

        cy.fixture("LoginCredentials").then(function(data){
            fixture_data=data;
        })

        cy.visit(Cypress.env("url"));
    });

    it("Scenario1 Entering correct username and password and then asserting home page", function(){
        loginpg.Enter_Values(fixture_data.valid_username, fixture_data.valid_pwd);
        homepg.Compare_Msg("Swag");
    });
    
    it("Scenario2 Sort the item from low to high and assert the added items along with prices", function(){
        loginpg.Enter_Values(fixture_data.valid_username, fixture_data.valid_pwd);
        homepg.Compare_Msg("Swag");

        homepg.Set_Filter_DropDown("lohi");
        homepg.Extract_Item_Prices();
        homepg.Check_Filter_Validitiy();
        homepg.Add_Items_Cart();
        homepg.Navigate_Cartpg();

        cartpg.Validate_Products(homepg.Get_Price_List());

    });

})