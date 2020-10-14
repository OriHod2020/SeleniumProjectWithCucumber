package com.tutorialsninja.automation.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"classpath:FeatureFiles/Register.feature", 
		"classpath:FeatureFiles/Login.feature" ,
		"classpath:FeatureFiles/search.feature",
		"classpath:FeatureFiles/Orders.feature"},
glue= {"classpath:com.tutorialsninja.automation/stepdef"},
plugin= {"html:target/cucumber_html_report"})
//tags= {"@Register", "@One"})
public class Runner {

}
