import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from '../../elements/PageObjects/HomePage';
import ApparelsPage from '../../elements/PageObjects/ApparelsPage';

const homeMethods=new HomePage();
const apparalMethods=new ApparelsPage();



When("Navigate to {string} section and then to {string}", function(apparel, shoe){

    homeMethods.Navigate_Tab("css", apparel);
    homeMethods.Navigate_Tab("css", shoe);
})

Then("Add the highest priced products", function(){

    apparalMethods.Add_Highest_Price_Product();
})

When("Change to quantity to {string}", function(qty){
    
    apparalMethods.Change_Qty(qty);
})

When("Add products to the cart", function(){

    apparalMethods.Add_Cart();
})

Then("Validate the product and delete them",function(){

    apparalMethods.Delete_Product();
})

Then("Sort the products", function(){

    homeMethods.Select_Dropdown("p.price-ASC");
})

When("Add the top3 items", function(){

    homeMethods.Add_Top3_Tshirts();
})