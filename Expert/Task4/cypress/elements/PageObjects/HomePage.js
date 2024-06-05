import locator from '../../fixtures/xpathlocators.json'
import csslocator from '../../fixtures/csslocators.json'
var genMethod = require('../Components/GenericMethods');

class HomePage {

    Add_Sale_Items_Cart()
    {
        cy.get('.col-md-3.col-sm-6.col-xs-12').each(($el) => {
            const isOnSale = $el.find('.sale').length > 0; 
            const isOutOfStock = $el.find('.nostock').length > 0;
      
            if (isOnSale && !isOutOfStock) {
              cy.wrap($el).find('.productcart').click();
              cy.SetCounterVal();
              
            }
          });
    }


    GetCount()
    {
        cy.GetCounterVal().then((val)=>{
            return val
        })
    }

    Select_Currency(currency)
    {
        cy.get("li[class='dropdown hover']").first().trigger('mouseover');
    
        cy.get('ul.dropdown-menu.currency li a').contains(currency).click();
    }

    Navigate_Cart()
    {
        cy.get('li.dropdown.hover').eq(1).trigger('mouseover');
    
        
        cy.get('li.dropdown.hover').eq(1).find('a.dropdown-toggle').click();
    }

    Navigate_Tab(selectorType='css', locvalue)
    {
        if(selectorType=='xpath')
            {
                genMethod.click_xpath(locator[locvalue]);
            }
        else{
            genMethod.click(csslocator[locvalue]);
        }
    }
}
 
export default HomePage;
