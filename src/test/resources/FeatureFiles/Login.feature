Feature: Login Functionality Scenarios


  @Login @One
	Scenario: Verify whether the User is able to login with valid credentials
		  Given I launch the application 
		  And  I navigate to the account Login page
		  When I login to the application using Username "alexlevi6@gmail.com" and Password "Alex"
		  Then I should see that the user is able to login successfully
		  
		  
	 @Login @Two
	 Scenario: Verify whether the User is not able to login with ivalid credentials
		  Given I launch the application 
		  And  I navigate to the account Login page
		  When I login to the application using Username "alexlevi777@gmail.com" and Password "Alex777"
		  Then I should see an error message that the credentials are invalid 
		  
		  
	 @Login @Three
	 Scenario: Verify whether the User is not able to login without providing credentials
		  Given I launch the application 
		  And  I navigate to the account Login page
		  When I login to the application using Username "" and Password ""
		  Then I should see an error message that the credentials are invalid 
		  
		  
		  
	 @Login @Four
	 Scenario: Verify whether the User is able to reset the forgotten password
		  Given I launch the application 
		  And  I navigate to the account Login page
		  When I reset the forgotten password for email "alexlevi6@gmail.com"
		  Then I should see a message informing the user that information related to resetting password was sent to his email address 
	