package com.tutorialsninja.automation.stepdef;

import org.junit.Assert;

import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.HeadersSection;
import com.tutorialsninja.automation.pages.SearchResultsPage;

import cucumber.api.java.en.*;

public class Search {
	
	HeadersSection hsec = new HeadersSection();
	SearchResultsPage srcRePa = new SearchResultsPage();
	
	
	@When("^I search for the product \"([^\"]*)\"$")
	public void i_search_for_the_product(String product){
		
		Elements.TypeText(HeadersSection.searchBoxField, product);
	    Elements.click(HeadersSection.searchButton);
	}
	

	@Then("^I should see the product in the search results$")
	public void i_should_see_the_product_in_the_search_results(){
		
		Assert.assertTrue(Elements.isDisplayed(SearchResultsPage.samsungSyncMasterSearchResult));
	    
	}
	
	@Then("^I should see the page displaying the message \"([^\"]*)\"$")
	public void i_should_see_the_page_displaying_the_message(String message){
		
		Assert.assertTrue(Elements.VerifyTextEquals(SearchResultsPage.noResultsMessage, message));
	}
	    


	

	

}
