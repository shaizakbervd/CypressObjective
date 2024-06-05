/// <reference types="cypress-xpath" />
require('cypress-xpath');


/**
 * Module to use different type of generic methods.
 * @module GenericMethods
 */
module.exports = {
  
    

  input(selector, text) {
    cy.get(selector).clear().type(text)
  },

  Price_Extractor(pricetag, removal)
  {
    const price = parseFloat(pricetag.replace(removal, ''));
    return price
  },


  Select_Products()
  {
    cy.get('.col-md-3.col-sm-6.col-xs-12').each(($product) => {
      cy.wrap($product).within(() => {
          cy.get('.pricetag').then(($pricetag) => {
              if ($pricetag.find('.nostock').length === 0) {
                  cy.get('.productcart').click();
              }
          });
      });
  });
  },

  input_xpath(selector, text)
  {
    cy.xpath(selector).type(text);
  },

  click(selector) {
    cy.get(selector).click()
  },

  click_xpath(selector)
  {
    cy.xpath(selector).click();

  },
  verifyText(selector, text) {
    cy.get(selector).then((loc)=>{
      expect(loc.text()).to.contains(text);
    })
  },

  verifyText_xpath(selector, text) {
    cy.xpath(selector).then((loc)=>{
      expect(loc.text()).to.contains(text);
    })
  },

  selectFromDropDownbyValue(selector, value) {
    cy.get(selector).select(value)
  },

  verifylengthoflist(selector, length) {
    cy.get(selector).children().should('have.length', length)
  },

  selectCurrentDate(selector1, selector2, selector3) {
    cy.get(selector1).click()

    cy.get(selector2 + '>' + selector3).click()
  },

  set_testId(string) {
    config2.set_testId(string)
  },

  navigateBack() {
    cy.go('back')
  },

  navigateForward() {
    cy.go('forward')
  },
  reloadPage() {
    cy.reload()
  },
  verifyUrl(string) {
    cy.url().should('include', string)
  },

  acceptAlert() {
    cy.on('window:alert', (str) => {
      return true
    })
  },

  cancelAlert() {
    cy.on('window:confirm', (str) => {
      return false
    })
  },

  verifyAlertText(string) {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(string)
    })
  },

  clickIframe(selector) {
    cy.get(selector).invoke('removeAttr', 'target').click({ force: true })
  },

  clickIframElement(iframeSelector, iframeElementSelector) {
    cy.get(iframeSelector).then(($iframe) => {
      const body = $iframe.contents().find('body')
      cy.wrap(body).as('iframe')
      cy.get('@iframe').find(iframeElementSelector).click()
    })
  }
}
