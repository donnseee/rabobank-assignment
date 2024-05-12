Feature: Search

    As a automationpractice retail company consumer
    I want to be able to search for items in the catalog


    Scenario: Search for non existing item
        Given I am on the automationpractice website
        When I search for an non existing item
        Then I should not see the item