Feature: Login functionality

Scenario Outline: Enter the credentials

Given Navigate to AutomationStore website "https://automationteststore.com/"
Then Fill the Login credentials "<username>" and "<password>" and validate home page

Examples:

    | username           | password      |
    | shaiz      | vivov11pro  |