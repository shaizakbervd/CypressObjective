const {Price_Comparision} = require("../../support/Utils/Utils");

class HomePage
{
    Landing_Homepg="div.app_logo";
    price="div[class='inventory_item_price']";
    Cart="div.pricebar button";
    ProdName="div[class='inventory_item_name ']";
    Cartpg="a.shopping_cart_link";
    price_list=[];
    counter=0;

    Navigate_Cartpg()
    {
        cy.get(this.Cartpg).click();
    }

    Get_Cart()
    {
        return cy.get(this.Cart);
    }


    Get_Landingpg_Text()
    {
        return cy.get(this.Landing_Homepg);
    }

    Get_Sort_DropDown()
    {
        return cy.get("select");
    }

    Get_Item_Price()
    {
        return cy.get(this.price);
    }

    Compare_Msg(text)
    {
        cy.Comparator(this.Get_Landingpg_Text(), text);
    }

    Set_Filter_DropDown(value)
    {
        this.Get_Sort_DropDown().select(value);
    }

    Extract_Item_Prices() {
        this.Get_Item_Price().each(($el, index, $list) => {
            const price = $el.text();
            cy.PriceExtractor(price, '$').then((prices)=>{
                this.price_list.push(prices);
            })
        });
    }

    Add_Items_Cart()
    {
        this.Get_Cart().each(($el, index, $list) => {
            if(index<2)
                {
                    this.Get_Cart().eq(index).click();
                    cy.SetCounterVal();
                }
        });
        
    }

    Get_Price_List() {
        return cy.wrap(this.price_list).then(priceList => {
            return priceList;
        });
    }

    Check_Filter_Validitiy()
    {
        this.Get_Price_List().then((pricelist)=>{
            Price_Comparision(pricelist);
        })
    }

    
}

export default HomePage;