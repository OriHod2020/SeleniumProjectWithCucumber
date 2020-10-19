Selenium Project: Selenium + Java + Cucumber + Maven + PageFactory
=================

This is a demo study project which automates the below web application:
[Go to the Application](http://www.tutorialsninja.com/demo/)



Project Architecture:

* **src/main/java/base** - This package contains base class with static objects(Logger, WebDriver, ConfigurationReader).
* **src/main/java/config** - This package contains ConfigurationReader & PropertyFileReader classes which helps to read the properties from config.properties file.
* **src/main/java/framework** - This package contains methods for the WebElements and handling the Browser.
* **src/main/java/pages**  - This package contains a class for each page of the application.
* **src/main/java/util** - This package contains PathHelper class which help to use the full path of the file
* **src/main/resources/ConfigarationFile** - This package contains config.properties and log4j.properties files.
* **src/test/java/runner** - This package contains runner class to execute the tests.
* **src/test/java/stepdef** - This package contains Hooks class which execute before and after every scenario and loging (log4j) and all the test cases.
* **src/test/resources/FeatureFiles** - This package contains all feature files.
* **target/cucumber_html_report/index.html** - HTML file with the tests resaults. 




Features: 
-------------
* @Register - This feature will automate registration functionality scenarios
         Scenarios:
		            1. Verify whether the user is able to register into the application by providing all the details.
					2. Verify whether the user is not allowed to register due to skipping mandatory fields.
					3. Verify whether the user is able to register into the application by opting for the Newsletter Subscription and providing all the details.
					4. Verify whether the user is able to register into the application by providing all the details(duplicate email address).
					
* @Login - This feature will automate login functionality scenarios
         Scenarios:
		            1. Verify whether the User is able to login with valid credentials.
					2. Verify whether the User is not able to login with invalid credentials.
					3. Verify whether the User is not able to login without providing credentials.
					4. Verify whether the User is able to reset the forgotten password.

* @search - This feature will automate search functionality scenarios
         Scenarios:
		            1. Verify whether the user is able to search for the products.
					2. Verify whether the user is informed when the product being searched is not available.
					
* @Orders - This feature will automate End to End ordering Scenarios
         Scenarios:
		            1. Verify whether the user is able to place an order.				

					


Running test
--------------

Go to the project directory from the terminal and hit the following commands:
* `mvn test (will run all scenarios)`
* `mvn test -Dcucumber.options="classpath:FeatureFiles/FeatureFileName.feature"`  // to run all tests in a specific feature file.
* `mvn test -Dcucumber.options="classpath:FeatureFiles/Register.feature"`  // For example: to run all tests in the Register feature file.
* `mvn test -Dcucumber.options="classpath:FeatureFiles/Register.feature --tags @One"' //  to run a specific test in the Register feature file.




-----------------------
