import { defineStep } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../elements/PageObjects/HomePage';
import loginPage from '../../elements/PageObjects/LoginPage';


const loginMethods = new loginPage();
const homeMethods=new HomePage();

defineStep("Navigate to AutomationStore website {string}", function(url){
    loginMethods.goToUrl(url);
});

defineStep("Fill the Login credentials {string} and {string} and validate home page", function(username, password){
    loginMethods.userLogin(username, password, "css", "Welcome");
});