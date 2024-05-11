Feature: Shopping Cart

    As a automationpractice retail company consumer
    I want to be able to add items I want to buy to the shopping cart

    # Background: Navigate to automationpractice website
    #     Given I visit the automationpractice website
    #     And I navigate to the Women's Catalog

    Scenario: Add item(s) to cart
        Given I choose an <item> select the <quantity>, <size>, <color> from the catalog
        When I add the item to the cart
        Then I can verify that item is added to the cart