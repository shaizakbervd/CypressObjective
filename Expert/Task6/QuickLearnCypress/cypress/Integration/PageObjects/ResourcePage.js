class ResourcePage
{
    Heading="h4[class='resource-heading']:nth-child(";
    w3schools="#beginnerResourceBox > :nth-child(2) > .card > .card-body > .btn";

    Validate_Url()
    {
        cy.url().then((url)=>{
            expect(url).contains("w3schools");
        })
    }

    Get_W3Schools()
    {
        return cy.get(this.w3schools);
    }

    Get_Locator(locator)
    {
        return cy.contains(locator);
    }

    Navigate_Locator(locator)
    {
        this.Get_Locator(locator).click();
    }

    Change_Tab()
    {
        this.Get_W3Schools().invoke("removeAttr", "target").click();
    }

    Get_Text(index)
    {
        
        return cy.get(this.Heading+index+")");
    }

    Get_Heading_Text(index, heading_text)
    {
        this.Get_Text(index).then((txt)=>{
            expect(txt.text()).to.equal(heading_text);
        })
    }
    
}

export default ResourcePage;