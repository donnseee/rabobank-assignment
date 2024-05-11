Feature: Search

    As a automationpractice retail company consumer
    I want to be able to search for items in the catalog


    Scenario: Search for a specific item
        Given I am on the automationpractice website
        When I search for an <item>
        Then I should see the item I searched for on the results grid
