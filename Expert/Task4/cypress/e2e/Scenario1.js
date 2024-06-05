import HomePage from '../elements/PageObjects/HomePage';
import loginPage from '../elements/PageObjects/LoginPage';
import CartPage from '../elements/PageObjects/CartPage';

describe('Scenario1', function () {
  let fixture_data;
  const loginMethods = new loginPage();
  const homeMethods=new HomePage();
  const cartMethods=new CartPage();

  beforeEach(()=>{

    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.fixture("data").then(function(data){
        fixture_data=data;
    })
});

  it('Login and add the Dove products to the cart', function () {
    loginMethods.goToUrl(fixture_data.WebsiteUrl)
    loginMethods.userLogin(fixture_data.Username, fixture_data.Password, "xpath", "Welcome")
    homeMethods.Navigate_Tab("xpath", "Home");
    homeMethods.Navigate_Tab("css", "SkinCare");
    
    homeMethods.Select_Currency("€ Euro");
    homeMethods.Add_Sale_Items_Cart();
    cy.wait(3000);
    homeMethods.Navigate_Cart();
    
    cartMethods.Assert_Cart();
    cartMethods.Delete_Products("€");
    homeMethods.Select_Currency("£ Pound Sterling");
    cartMethods.Delete_Products("£");
    homeMethods.Select_Currency("$ US Dollar");
    cartMethods.Delete_Products("$");


  })

})