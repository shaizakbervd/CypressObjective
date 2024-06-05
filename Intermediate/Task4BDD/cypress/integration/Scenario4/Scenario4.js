import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../elements/PageObjects/HomePage';

const homeMethods=new HomePage();



When("Navigate to {string} Tab", function(men){

    homeMethods.Navigate_Tab("css", men);
})

When("Add products to cart ending with {string}", function(letter){

    homeMethods.Add_Products_Men(letter);
})

