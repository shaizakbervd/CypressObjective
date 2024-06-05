Feature: Sorting the products and adding it to the cart

Scenario Outline: Go to Apparel section then sort the shoes items and add highest valued product to cart

Given Navigate to AutomationStore website "https://automationteststore.com/"
Then Fill the Login credentials "<username>" and "<password>" and validate home page

When Navigate to "Apparel" section and then to "Shoes"
Then Add the highest priced products
When Change to quantity to "2"
When Add products to the cart
Then Validate the product and delete them

Examples:

    | username           | password      |
    | shaiz      | vivov11pro  |


Scenario Outline: Go to Apparels section sort the tshirt items in asc order and add to cart

Given Navigate to AutomationStore website "https://automationteststore.com/"
Then Fill the Login credentials "<username>" and "<password>" and validate home page

When Navigate to "Apparel" section and then to "Tshirts"
Then Sort the products
When Add the top3 items

Examples:

    | username           | password      |
    | shaiz      | vivov11pro  |