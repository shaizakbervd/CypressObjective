import HomePage from '../elements/PageObjects/HomePage';
import loginPage from '../elements/PageObjects/LoginPage';

describe('Scenario4', function () {
  let fixture_data;
  const loginMethods = new loginPage();
  const homeMethods=new HomePage();

  beforeEach(()=>{

    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.fixture("data").then(function(data){
        fixture_data=data;
    })
});

  it('Login and navigate to Men section and add products to cart whose name ends with M', function () {
    loginMethods.goToUrl(fixture_data.WebsiteUrl)
    loginMethods.userLogin(fixture_data.Username, fixture_data.Password, "xpath", "Welcome")
    homeMethods.Navigate_Tab("css", "Men");
    homeMethods.Add_Products_Men("M");

  })

})