package com.tutorialsninja.automation.stepdef;



import org.junit.Assert;

import com.tutorialsninja.automation.framework.Browser;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.framework.Waits;
import com.tutorialsninja.automation.pages.CheckoutPage;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.LoginPage;
import com.tutorialsninja.automation.pages.OrderSuccessPage;
import com.tutorialsninja.automation.pages.SearchResultsPage;
import com.tutorialsninja.automation.pages.ShoppingCartPage;

import cucumber.api.java.en.*;

public class Orders {
	
	HeadersSection hsec = new HeadersSection();
	LoginPage lgIn = new LoginPage();
	SearchResultsPage srPage = new SearchResultsPage();
	ShoppingCartPage Scrtpage = new ShoppingCartPage();
	CheckoutPage coutPage = new CheckoutPage();
	OrderSuccessPage oscp = new OrderSuccessPage();
	
	
	@Given("^I loging to the application$")
	public void i_loging_to_the_application() throws InterruptedException{
		
		Browser.openApplicationURL();
		HeadersSection.navigateToLoginPage();
		LoginPage.doLogin();
		
		
	    
	}
	

	@When("^I add any product to the cart then checkout$")
	public void i_add_any_product_to_the_cart_then_checkout(){
		
		HeadersSection.searchProduct();
		SearchResultsPage.addFirstSearchResultToCart();
		HeadersSection.navigateToShoppingCartPage();
		ShoppingCartPage.clickCheckOutButton();
	   
		
	}

	@And("^I place an order$")
	public void i_place_an_order() throws InterruptedException{
		
		
		CheckoutPage.addBillingDetails();
		CheckoutPage.clickOnBillingDetails();
		CheckoutPage.clickOnDeliveryContinueButton();
		CheckoutPage.clickOnDeliveryMethodContinueButton();
		CheckoutPage.clickOnTermsCheckbox();
		CheckoutPage.clickOnPaymentOption();
		CheckoutPage.clickOnConfirmButton();
	    
	}

	@Then("^I sould see that the order is placd successfully$")
	public void i_sould_see_that_the_order_is_placd_successfully(){
		
		
		Waits.waitUntilElementLocated(10, OrderSuccessPage.successBreadcrumb);
		Assert.assertTrue(Elements.isDisplayed(OrderSuccessPage.successBreadcrumb));
		
	    
	}

}
