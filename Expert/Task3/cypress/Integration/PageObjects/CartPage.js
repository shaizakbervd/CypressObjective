class CartPage
{
    products="div.cart_item";
    item_price="div.inventory_item_price";

    Get_Products()
    {
        return cy.get(this.products);
    }

    Get_Item_Price()
    {
        return cy.get(this.item_price);
    }

    Price_Comparator(price_list)
    {
        this.Get_Item_Price().each(($el, index, $list) => {
            const price = $el.text();
            cy.PriceExtractor(price, '$').then((prices)=>{
                
                price_list.then((prices_list)=>{
                    expect(prices_list[index]).to.equal(prices);
                })
            })

        });

    }

    Validate_Products(price_list)
    {
        this.Get_Products().its("length").then((count)=>{
            cy.GetCounterVal().then((counter)=>{
                expect(counter).to.equal(count);
            })
        })
        this.Price_Comparator(price_list);
    }
}

export default CartPage;