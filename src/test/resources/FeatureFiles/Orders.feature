Feature: End to End Ordering Scenarios

  @Orders @One
	Scenario: Verify whether the user is able to place an order
		 Given I loging to the application
		 When I add any product to the cart then checkout
		 And I place an order
		 Then I sould see that the order is placd successfully
		 
		 
		 
	