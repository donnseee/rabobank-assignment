Feature: Product Comparison

    As a automationpractice retail company consumer
    I want to be able to compare items I want to buy


    # Background: Navigate to automationpractice website
    #     Given I visit the automationpractice website
    #     And I navigate to the Women's Catalog

    Scenario: Add item(s) to Product Comparison
        Given I choose an item from the catalog
        When I add the an item to compare
        Then I can see the item is added on the compare section

# Scenario: Remove item(s)from Product Comparison

# Scenario: Add item to Cart from Product Comparison

