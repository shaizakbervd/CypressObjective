import csslocator from '../../fixtures/csslocators.json'
var genMethod = require('../Components/GenericMethods');

class ApparelsPage {

    Add_Highest_Price_Product()
    {
        const prices = [];
        cy.get(csslocator.PriceTag).each(($price, index) => {
            const price = genMethod.Price_Extractor($price.text(), '$');
            prices.push({ price, index });
        }).then(() => {
            // Step 2: Find the maximum price and its index
            const maxPriceObj = prices.reduce((max, item) => item.price > max.price ? item : max, prices[0]);

            // Step 3: Add the most expensive item to the cart using its index
            cy.get(csslocator.Items).eq(maxPriceObj.index).within(() => {
                cy.get(csslocator.ProductCart).click();
            });
        });
    }

    Change_Qty(qty)
    {
        genMethod.input(csslocator.Qty,qty);
    }

    Add_Cart()
    {
        genMethod.click(csslocator.Cart);
    }

    Delete_Product()
    {
        genMethod.click(csslocator.Remove);
    }
    
}
 
export default ApparelsPage;







