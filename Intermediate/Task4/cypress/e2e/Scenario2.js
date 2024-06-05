import ApparelsPage from '../elements/PageObjects/ApparelsPage';
import HomePage from '../elements/PageObjects/HomePage';
import loginPage from '../elements/PageObjects/LoginPage';

describe('Scenario2', function () {
  let fixture_data;
  const loginMethods = new loginPage();
  const homeMethods=new HomePage();
  const apparalMethods=new ApparelsPage();

  beforeEach(()=>{

    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.fixture("data").then(function(data){
        fixture_data=data;
    })
});

  it('Scenario 2: Navigating to Shoes Tab and add highest valued product', function () {
    loginMethods.goToUrl(fixture_data.WebsiteUrl)
    loginMethods.userLogin(fixture_data.Username, fixture_data.Password, "css", "Welcome")
    homeMethods.Navigate_Tab("css", "Apparel");
    homeMethods.Navigate_Tab("css", "Shoes");
    apparalMethods.Add_Highest_Price_Product();
    apparalMethods.Change_Qty("2");
    apparalMethods.Add_Cart();
    apparalMethods.Delete_Product();
  });

  it('Scenario 2: Navigating to Tshirts filtering the pricr from low-high and add the top 3 lowest products', function (){

    loginMethods.goToUrl(fixture_data.WebsiteUrl)
    loginMethods.userLogin(fixture_data.Username, fixture_data.Password, "css", "Welcome")

    homeMethods.Navigate_Tab("css", "Apparel");
    homeMethods.Navigate_Tab("css", "Tshirts");
    homeMethods.Select_Dropdown("p.price-ASC");
    homeMethods.Add_Top3_Tshirts();
  })

})