package com.tutorialsninja.automation.pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

public class CheckoutPage {
	
	public CheckoutPage() {
		
		PageFactory.initElements(Base.driver, this);
	}
	
	
	
	
	@FindBy(id="input-payment-firstname")
	public static WebElement fillFirstName;
	
	@FindBy(id="input-payment-lastname")
	public static WebElement fillLastName;
	
	@FindBy(id="input-payment-address-1")
	public static WebElement fillAddress;
	
	@FindBy(id="input-payment-city")
	public static WebElement fillCity;
	
	@FindBy(id="input-payment-country")
	public static WebElement fillCountry;
	
	@FindBy(id="input-payment-zone")
	public static WebElement fillRegion;

	
	
	
	@FindBy(id="button-payment-address")
	public static WebElement continueButtonOfbillingDetailsSection;
	
	@FindBy(id="button-shipping-address")
	public static WebElement continueButtonOfDeliveryDetailsSection;
	
	@FindBy(id="button-shipping-method")
	public static WebElement continueButtonOfDeliveryMethodSection;
	
	@FindBy(name="agree")
	public static WebElement checkTermsCheckBox;
	
	@FindBy(id="button-payment-method")
	public static WebElement continueButtonOfPaymentMethodSection;
	
	@FindBy(id="button-confirm")
	public static WebElement pressConfirmButton;
	
	
	
    public static void addBillingDetails(){
    	
		
		if(Elements.isDisplayed(fillFirstName))
		{
			
			Elements.TypeText(fillFirstName, Base.reader.getFirstName());
			Elements.TypeText(fillLastName, Base.reader.getLastName());
			Elements.TypeText(fillAddress, Base.reader.getAdress());
			Elements.TypeText(fillCity, Base.reader.getCity());
			Elements.click(fillCountry);
			Elements.TypeText(fillCountry, Base.reader.getCountry());
			Elements.TypeText(fillRegion, Base.reader.getCity());
			
			
		}
		
		clickOnBillingDetails();
		
		
	}
    
    
    public static void clickOnBillingDetails() {
    	
    	Elements.click(continueButtonOfbillingDetailsSection);
    	
    }
	
	
	
    public static void clickOnDeliveryContinueButton() {
		
		Elements.click(continueButtonOfDeliveryDetailsSection);
	}
    
    public static void clickOnDeliveryMethodContinueButton() {
		
		Elements.click(continueButtonOfDeliveryMethodSection);
	}
    
    
    
    public static void clickOnTermsCheckbox() {
		
		Elements.click(checkTermsCheckBox);
	}
    
    public static void clickOnPaymentOption() {
		
		Elements.click(continueButtonOfPaymentMethodSection);
    }
    
    public static void clickOnConfirmButton() {
		
		Elements.click(pressConfirmButton);
    }
}
