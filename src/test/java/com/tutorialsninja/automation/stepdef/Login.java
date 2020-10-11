package com.tutorialsninja.automation.stepdef;

import org.junit.Assert;

import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.ForgotPasswordPage;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.LoginPage;
import com.tutorialsninja.automation.pages.MyAccountPage;

import cucumber.api.java.en.*;

public class Login {
	
	HeadersSection hsec = new HeadersSection();
	LoginPage loginPage = new LoginPage();
	MyAccountPage myacntp = new MyAccountPage();
	ForgotPasswordPage fppage = new ForgotPasswordPage();
	
	@And("^I navigate to the account Login page$")
	public void i_navigate_to_the_account_Login_page(){
		
		Elements.click(HeadersSection.myAccountLink);
		Elements.click(HeadersSection.login);
	    
	}

	@When("^I login to the application using Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void i_login_to_the_application_using_Username_and_Password(String email, String password){
		
		LoginPage.doLoging(email, password);
	}

	@Then("^I should see that the user is able to login successfully$")
	public void i_should_see_that_the_user_is_able_to_login_successfully(){
		
		Assert.assertTrue(Elements.isDisplayed(MyAccountPage.registerAffiliateAccount));
	    
	}
	
	@Then("^I should see an error message that the credentials are invalid$")
	public void i_should_see_an_error_message_that_the_credentials_are_invalid(){
		
		Assert.assertTrue(Elements.VerifyTextEquals(LoginPage.mainWarning,"Warning: No match for E-Mail Address and/or Password."));
	
	}
	
	
	@When("^I reset the forgotten password for email \"([^\"]*)\"$")
	public void i_reset_the_forgotten_password_for_email(String email){
		
		Elements.click(LoginPage.forgotPassword);
		Elements.TypeText(ForgotPasswordPage.emailFiled, email);
		Elements.click(ForgotPasswordPage.continueButton);
	}
	    

	@Then("^I should see a message informing the user that information related to resetting password was sent to his email address$")
	public void i_should_see_a_message_informing_the_user_that_information_related_to_resetting_password_was_sent_to_his_email_address(){
		
		Assert.assertTrue(Elements.VerifyTextEquals(LoginPage.mainWarning, "An email with a confirmation link has been sent your email address."));
	    
	}
	    
	    
	    



}
