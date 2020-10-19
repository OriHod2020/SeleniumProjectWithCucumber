Feature: Search Functionality Scenarios


  @Search @One
	Scenario: Verify whether the user is able to search for the products
		  Given I launch the application
		  When I search for the product "Samsung SyncMaster 941Bw"
		  Then I should see the product in the search results
		  
		  
	@Search @Two
	Scenario: Verify whether the user is informed when the product being searched is not available
		  Given I launch the application
		  When I search for the product "Apple iPhone"
		  Then I should see the page displaying the message "There is no product that matches the search criteria."
		 