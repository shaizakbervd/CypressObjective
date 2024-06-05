import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../elements/PageObjects/HomePage';

const homeMethods=new HomePage();


When("Navigate to the {string} items", function(tab){
    homeMethods.Navigate_Tab("xpath", "Home");
    homeMethods.Navigate_Tab("xpath", "Dove");
})

Then("Add the Products to Cart and Assert them", function(){
    homeMethods.Add_Products_Cart();
})