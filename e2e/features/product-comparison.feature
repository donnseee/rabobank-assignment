Feature: Product Comparison

    As a automationpractice retail company consumer
    I want to be able to compare items I want to buy


    Scenario: Add item(s) to Product Comparison
        Given I choose an item from the catalog
        When I add the item to Add to compare
        Then I can see the item is added on the compare section
