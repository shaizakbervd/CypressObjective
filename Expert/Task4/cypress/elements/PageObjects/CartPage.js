import locator from '../../fixtures/xpathlocators.json'
import csslocator from '../../fixtures/csslocators.json'
var genMethod = require('../Components/GenericMethods');

class CartPage {

    Assert_Cart()
    {

        cy.GetCounterVal().then((expectedLength)=>{
            cy.get(".product-list > .table > tbody > tr").its('length').should('eq', expectedLength+1);

        })

    }

    Delete_Products(currency)
    {
        cy.get("span[class='bold totalamout']").then(totalText => {
            const totalPrice = parseFloat(totalText.text().replace("€", "").replace(",", ""));
            
            
            // Check if total price exceeds 200
            if (totalPrice > 200) {
              // Get all items in the cart
              cy.get("div[class='container-fluid cart-info product-list'] table[class='table table-striped table-bordered'] tbody tr").then(rows => {
                let highestPrice = 0;
                let highestPriceIndex = -1;
                
                // Find the highest-priced item
                rows.each((index, row) => {
                    const priceText = Cypress.$(row).find("td.align_right").eq(0).text(); // Adjusted selector
                    const price = parseFloat(priceText.replace(currency, "").replace(",", ""));
                    if (price > highestPrice) {
                      highestPrice = price;
                      highestPriceIndex = index;
                    }
                  });
        
                  // Remove the highest-priced item if only one item left
                  if (rows.length === 1) {
                    cy.get(".container-fluid.cart-info.product-list table tbody tr a.btn.btn-sm.btn-default").click();
                  } else if (highestPriceIndex !== -1) {
                    cy.get(".container-fluid.cart-info.product-list table tbody tr").eq(highestPriceIndex).find("a.btn.btn-sm.btn-default").click();
                  }
              });
            }
          });
    }

}

export default CartPage;