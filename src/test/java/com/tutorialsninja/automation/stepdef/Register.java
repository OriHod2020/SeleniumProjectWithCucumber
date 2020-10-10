package com.tutorialsninja.automation.stepdef;

import java.util.Map;

import org.junit.Assert;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.AccountSuccessPage;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.RegisterPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;


public class Register {
	
	HeadersSection hsec = new HeadersSection();
	RegisterPage rPage = new RegisterPage();
	AccountSuccessPage acSuPage = new AccountSuccessPage();
	
	
	@Given("^I launch the application$")
	public void i_launch_the_application() {
		
		Base.driver.get(Base.reader.getUrl());
	    
	    
	}

	@And("^I navigate to the Account Registration page$")
	public void i_navigate_to_the_Account_Registration_page()  {
	   
		Elements.click(HeadersSection.myAccountLink);
		Elements.click(HeadersSection.register);
	}

	@When("^I provide all the below needed valid details$")
	public void i_provide_all_the_below_needed_valid_details(DataTable dataTable)  {
		
		RegisterPage.enterAllDetails(dataTable, "unique");
	}

	@And("^I select the privacy policy button$")
	public void i_select_the_privacy_policy_button(){
		
		Elements.click(RegisterPage.privacyPolicy);
	    
	}

	@And("^I click on the Continue button$")
	public void i_click_on_the_Continue_button(){
		
		Elements.click(RegisterPage.continueButton);
	    
	}

	@Then("^I should see that the user account has successfully created$")
	public void i_should_see_that_the_user_account_has_successfully_created(){
		
	    Assert.assertTrue(Elements.isDisplayed(AccountSuccessPage.successPageValidation));
	
	}
	
	@Then("^I should see that the user account was not created$")
	public void i_should_see_that_the_user_account_was_not_created(){
		
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.successPageValidation));
	    
	}

	@Then("^I shlould see the error message informing the user to fill the mandatory infomration$")
	public void i_shlould_see_the_error_message_informing_the_user_to_fill_the_mandatory_infomration(){
		
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.firstNameWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.lastNameWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.emailWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.passwordWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.telephoneWarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.mainWarning));
	   
	}
	
	@And("^I subscribe to the Newsletter$")
	public void i_subscribe_to_the_Newsletter(){
	   
		Elements.click(RegisterPage.newsletterSubscribe);
	}
	
	@When("^I provide all the below duplicated details$")
	public void i_provide_all_the_below_duplicated_details(DataTable dataTable) {
		
		RegisterPage.enterAllDetails(dataTable, "duplicate");
	    
	}

	@Then("^I should see that the user is restricted from creating duplicate account$")
	public void i_should_see_that_the_user_is_restricted_from_creating_duplicate_account(){
		
		Assert.assertTrue(Elements.VerifyTextEquals(RegisterPage.mainWarning, "Warning: E-Mail Address is already registered!"));
	    
	}



}
