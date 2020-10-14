package com.tutorialsninja.automation.config;

public interface ConfigurationReader {
	
	public String getUrl();
	public String getBrowser();
	public int getPageLoadTimeOut();
	public String getUsername();
	public String getPassword();
	public String getProduct();
	public String getFirstName();
	public String getLastName();
	public String getAdress();
	public String getCity();
	public String getCountry();

}
