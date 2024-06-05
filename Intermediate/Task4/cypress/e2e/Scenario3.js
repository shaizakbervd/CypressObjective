import HomePage from '../elements/PageObjects/HomePage';
import loginPage from '../elements/PageObjects/LoginPage';

describe('Scenario3', function () {
  let fixture_data;
  const loginMethods = new loginPage();
  const homeMethods=new HomePage();

  beforeEach(()=>{

    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.fixture("data").then(function(data){
        fixture_data=data;
    })
});

  it('Login and navigate to skin care section and log the items on sale and items which are on sale & out of stock and add sale items', function () {
    loginMethods.goToUrl(fixture_data.WebsiteUrl)
    loginMethods.userLogin(fixture_data.Username, fixture_data.Password, "xpath", "Welcome")
    homeMethods.Navigate_Tab("css", "SkinCare");
    homeMethods.Add_SkinCare_Products();

  })

})