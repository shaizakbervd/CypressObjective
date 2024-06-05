import locator from '../../fixtures/xpathlocators.json'
import csslocator from '../../fixtures/csslocators.json'
var genMethod = require('../Components/GenericMethods');

class HomePage {

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

    Add_Products_Men(endletter)
    {
        cy.get('.prdocutname:visible').each(($el, index) => {
            const productName = $el.text().trim();
            cy.log(productName);
            if (productName.endsWith(endletter)) {
              // Step 3: Add the product to the cart
              cy.log("found product")
              cy.wrap($el)
                .parents('.col-md-3')
                .find('.productcart')
                .click();
            }
          });

          genMethod.click(csslocator.Cart);
          genMethod.click(csslocator.Remove);
    }

    Add_Products_Cart()
    {
        genMethod.Select_Products()
    }

    Add_SkinCare_Products()
    {
        let saleItemsCount = 0;
        let outOfStockSaleItemsCount = 0;

        // Loop through each product
        cy.get(csslocator.Skinproducts).each(($el, index, $list) => {
            // Check if the product is on sale
            if ($el.find(csslocator.Sale).length) {
                saleItemsCount++;
                
                // Check if the product is out of stock
                if ($el.find(csslocator.Nostock).length) {
                    outOfStockSaleItemsCount++;
                } else {
                    // Add the product to the cart
                    cy.wrap($el).find(csslocator.ProductCart).click();
                }
            }
        }).then(() => {
            cy.log('Total sale items: ' + saleItemsCount);
            cy.log('Total out of stock sale items: ' + outOfStockSaleItemsCount);
        });
    }

    Select_Dropdown(value)
    {
        genMethod.selectFromDropDownbyValue(csslocator.Select_dd, value);
    }

    Add_Top3_Tshirts()
    {
        const getInStockProducts = () => {
            const productDetails = [];
            cy.get('.col-md-3.col-sm-6.col-xs-12').each((product) => {
                const priceElement = product.find(csslocator.Productprice);
                const stockElement = product.find(csslocator.Productstock);
                const addToCartButton = product.find(csslocator.Productcart);

                // Check if the product is in stock
                if (stockElement.length === 0) {
                    // Get the price and push product details to array
                    const price = genMethod.Price_Extractor(priceElement.text(), "$");
                    productDetails.push({
                        price,
                        addToCartButton
                    });
                }
            }).then(() => {
                // Sort products by price in ascending order and get the top 3
                productDetails.sort((a, b) => a.price - b.price);
            });
            return cy.wrap(productDetails);
        };

        // Initialize the counter
        let counter = 0;

        // Function to add products to the cart
        const addProductsToCart = (products) => {
            if (counter < 3 && products[counter]) {
                cy.wrap(products[counter].addToCartButton).click();
                cy.go('back');
                cy.wait(1000); // Wait for the page to reload
                counter++;
                getInStockProducts().then(addProductsToCart); // Re-query and add next product
            }
        };

        // Get the initial list of in-stock products and start the process
        getInStockProducts().then(addProductsToCart);
    }
}
 
export default HomePage;
