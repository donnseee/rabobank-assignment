Feature: Shopping Cart

    As a automationpractice retail company consumer
    I want to be able to add items I want to buy to the shopping cart


    Scenario: Add item(s) to cart
        Given I choose a product in stock from the catalog
        When I add the item to the cart
        Then I can verify that item is added to the cart