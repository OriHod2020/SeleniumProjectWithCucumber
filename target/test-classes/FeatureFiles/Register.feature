Feature: Registration functionality scenarios

	@Register @One
	Scenario: Verify whether the user is able to register into the application by providing all the details
		Given I launch the application
		And I navigate to the Account Registration page
		When I provide all the below needed valid details
			|FirstName|Alex               |
			|LastName |Levi               |
			|Email    |alexlevi6@gmail.com |
			|Telephone|9720549843322      |
			|Password |Alex               |
		And I select the privacy policy button	
		And I click on the Continue button
		Then I should see that the user account has successfully created
		
		
	 @Register @Two
	 Scenario: Verify whether the user is not allowed to register due to skipping mandatory fields
		 Given I launch the application
		 And I navigate to the Account Registration page	
		 When I click on the Continue button
		 Then I should see that the user account was not created
		 And I shlould see the error message informing the user to fill the mandatory infomration
		 
		 
		 
	 @Register @Three
	 Scenario: Verify whether the user is able to register into the application by opting for the Newsletter Subscription and providing all the details
		 Given I launch the application
		 And I navigate to the Account Registration page
		 When I provide all the below needed valid details
			  |FirstName|Alex                |
			  |LastName |Levi                |
			  |Email    |alexlevi6@gmail.com |
			  |Telephone|9720549843322       |
			  |Password |Alex                |
		And I select the privacy policy button	
		And I subscribe to the Newsletter
		And I click on the Continue button
		Then I should see that the user account has successfully created
		
		
	 @Register @Four
	 Scenario: Verify whether the user is able to register into the application by providing all the details
		 Given I launch the application
		 And I navigate to the Account Registration page
		 When I provide all the below duplicated details
			 |FirstName|Alex                |
			 |LastName |Levi                |
			 |Email    |alexlevi6@gmail.com |
			 |Telephone|9720549843322       |
			 |Password |Alex                |
		 And I select the privacy policy button	
		 And I click on the Continue button
		 Then I should see that the user is restricted from creating duplicate account
		
		 
		 