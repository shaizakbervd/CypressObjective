Feature: Sorting the products and adding it to the cart

Scenario Outline: Go to Apparel section then sort the shoes items and add highest valued product to cart

Given Navigate to AutomationStore website "https://automationteststore.com/"
Then Fill the Login credentials "<username>" and "<password>" and validate home page

When Navigate to "Men" Tab
When Add products to cart ending with "m"

Examples:

    | username           | password      |
    | shaiz      | vivov11pro  |
