class HomePage
{
    Resources_Tab="a[id='navResourceBtn']";

    Get_Text(text)
    {
        return cy.contains(text);
    }

    Navigate(text)
    {
        this.Get_Text(text).click();
    }

    Get_Resources()
    {
        return cy.get(this.Resources_Tab);
    }

    Navigate_Resources()
    {
        this.Get_Resources().click();
        
    }

    
}

export default HomePage;