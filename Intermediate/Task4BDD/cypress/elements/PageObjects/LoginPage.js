import locator from '../../fixtures/xpathlocators.json'
import csslocator from '../../fixtures/csslocators.json'
var genMethod = require('../Components/GenericMethods');

class LoginPage {
  goToUrl(string) {
    cy.visit(string)
  }
  clickSignIn(selectorType="css") {
    if(selectorType=="xpath")
      {
        genMethod.click_xpath(locator.Login)
      }
      else
      {
        genMethod.click_xpath(locator.Login)
      }
    
  }

  enterUserName(string, selectorType="css") {
    if(selectorType=="xpath")
      {
        genMethod.input_xpath(locator.userNameSelector, string)
      }
      else{
        genMethod.input(csslocator.userNameSelector, string)
      }
  }

  enterPassword(string, selectorType="css") {
    if(selectorType=="xpath")
      {
        genMethod.input_xpath(locator.passwordSelector, string)
      }
      else{
        genMethod.input(csslocator.passwordSelector, string)
      }
  }

  clickSubmit(selectorType="css") {
    if(selectorType=="xpath")
      {
        genMethod.click_xpath(locator.submitSelector)
      }
      else{
        genMethod.click(csslocator.submitSelector)
      }
  }

  verifyLogin(string, selectorType='css') {
    if(selectorType=="xpath")
      {
        genMethod.verifyText_xpath(locator.HomeText, string);
      }
      else{
        genMethod.verifyText(csslocator.HomeText, string);
      }
    
  }

  userLogin(userName, password, selectorType, hometext) {
    this.clickSignIn(selectorType);
    this.enterUserName(userName, selectorType)
    this.enterPassword(password, selectorType)
    this.clickSubmit(selectorType)
    this.verifyLogin(hometext, selectorType)
  }
}
 
export default LoginPage;
