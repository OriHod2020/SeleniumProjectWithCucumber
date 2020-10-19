Selenium Project: Selenium + Java + Cucumber + Maven + PageFactory
=================

This is a demo study project which automates the below web application:
----------------
 http://www.tutorialsninja.com/demo/ 



Project Architecture:
-------------------

* **src/main/java/base** - This package contains base class with static objects(Logger, WebDriver, ConfigurationReader).
* **src/main/java/config** - This package contains ConfigurationReader & PropertyFileReader classes which helps to read the properties from config.properties file.
* **src/main/java/framework** - This package contains reusable methods for WebElement and for handling the Browser.
* **src/main/java/pages**  - This package contains a class for each web page of the application.
* **src/main/java/util** - This package contains PathHelper class which help to use the full path of the file.
* **src/main/resources/ConfigarationFile** - This package contains config.properties and log4j.properties files.
* **src/test/java/runner** - This package contains runner class to execute the tests.
* **src/test/java/stepdef** - This package contains Hooks class which executes before and after every scenario as well all the test classes.
* **src/test/resources/FeatureFiles** - This package contains all feature files.
* **target/cucumber_html_report/index.html** - HTML file with the tests results. 




Features: 
-------------
* **@Register** - This feature will automate registration functionality scenarios. 
* **Scenarios:**
* **@One**   Verify whether the user is able to register into the application by providing all the details.
* **@Two**   Verify whether the user is not allowed to register due to skipping mandatory fields.
* **@Three** Verify whether the user is able to register into the application by opting for the Newsletter Subscription and providing all the details.
* **@Four**  Verify whether the user is able to register into the application by providing all the details(duplicate email address).
---------		
* **@Login** - This feature will automate login functionality scenarios.
* **Scenarios:**
* **@One**   Verify whether the user is able to login with valid credentials.
* **@Two**   Verify whether the user is not able to login with invalid credentials.
* **@Three** Verify whether the user is not able to login without providing credentials.
* **@Four**  Verify whether the user is able to reset the forgotten password.
---------
* **@search** - This feature will automate search functionality scenarios.
* **Scenarios:**
* **@One**   Verify whether the user is able to search for the products.
* **@Two**   Verify whether the user is informed when the product being searched is not available.
---------			
* **@Orders** - This feature will automate End to End ordering Scenarios.
* **Scenarios:**
* **@One**   Verify whether the user is able to place an order.				
---------
					


Running the tests with Maven:
--------------

Go to the project directory from the terminal and hit the following commands:
* `mvn test`   Will run all scenarios
* `mvn test -Dcucumber.options="classpath:FeatureFiles/FeatureFileName.feature"`        Will run all scenarios in a specific feature file
* `mvn test -Dcucumber.options="classpath:FeatureFiles/Register.feature"`               Will run all scenarios in Register feature file
* `mvn test -Dcucumber.options="classpath:FeatureFiles/Register.feature --tags @One"`   Will run the first scenario in Register feature file


Running the tests from the project:
--------------
Run the TestRunner.java file under  src/test/java/runner


-----------------------
