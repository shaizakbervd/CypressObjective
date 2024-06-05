Feature: Adding Dove Items

Scenario Outline: Scenario Outline name: Add the Dove items to the Cart

Given Navigate to AutomationStore website "https://automationteststore.com/"
Then Fill the Login credentials "<username>" and "<password>" and validate home page

When Navigate to the "Dove" items
Then Add the Products to Cart and Assert them

Examples:

    | username           | password      |
    | shaiz      | vivov11pro  |