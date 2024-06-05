/// <reference types="Cypress" />


function Price_Comparision(price_list)
{
    cy.wrap(price_list).then((prices)=>{
        
        for(var i=0; i<prices.length-1; i++)
            {
                if(!(prices[i]<=prices[i+1]))
                    {
                        assert.fail("Pricing invalid");
                        break;
                    }
            }
    })
}


module.exports={
    Price_Comparision
}
