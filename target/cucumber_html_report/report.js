$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality scenarios",
  "description": "",
  "id": "login-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8264074400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify whether the User is able to login with valid credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 4,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I login to the application using Username \"alexlevi6@gmail.com\" and Password \"Alex\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see that the user is able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2726241800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_the_account_Login_page()"
});
formatter.result({
  "duration": 1698771100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alexlevi6@gmail.com",
      "offset": 43
    },
    {
      "val": "Alex",
      "offset": 78
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 917018600,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_user_is_able_to_login_successfully()"
});
formatter.result({
  "duration": 67451400,
  "status": "passed"
});
formatter.after({
  "duration": 5915690000,
  "status": "passed"
});
formatter.before({
  "duration": 6117615100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify whether the User is not able to login with ivalid credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-not-able-to-login-with-ivalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Login"
    },
    {
      "line": 12,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I navigate to the account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I login to the application using Username \"alexlevi777@gmail.com\" and Password \"Alex777\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see an error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2600700100,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_the_account_Login_page()"
});
formatter.result({
  "duration": 1543135500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alexlevi777@gmail.com",
      "offset": 43
    },
    {
      "val": "Alex777",
      "offset": 80
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 612780900,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 40823000,
  "status": "passed"
});
formatter.after({
  "duration": 5845698700,
  "status": "passed"
});
formatter.before({
  "duration": 5811614800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify whether the User is not able to login without providing credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-not-able-to-login-without-providing-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Login"
    },
    {
      "line": 20,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I login to the application using Username \"\" and Password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should see an error message that the credentials are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2478287400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_the_account_Login_page()"
});
formatter.result({
  "duration": 1368071700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "Login.i_login_to_the_application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 630121900,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 36673100,
  "status": "passed"
});
formatter.after({
  "duration": 5853352100,
  "status": "passed"
});
formatter.before({
  "duration": 5782813000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify whether the User is able to reset the forgotten password",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-able-to-reset-the-forgotten-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Login"
    },
    {
      "line": 29,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I navigate to the account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I reset the forgotten password for email \"alexlevi6@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I should see a message informing the user that information related to resetting password was sent to his email address",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2528427300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_the_account_Login_page()"
});
formatter.result({
  "duration": 1342366300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alexlevi6@gmail.com",
      "offset": 42
    }
  ],
  "location": "Login.i_reset_the_forgotten_password_for_email(String)"
});
formatter.result({
  "duration": 1145800400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_the_user_that_information_related_to_resetting_password_was_sent_to_his_email_address()"
});
formatter.result({
  "duration": 48271200,
  "status": "passed"
});
formatter.after({
  "duration": 5913335700,
  "status": "passed"
});
formatter.uri("FeatureFiles/Orders.feature");
formatter.feature({
  "line": 1,
  "name": "End to End ordering Scenarios",
  "description": "",
  "id": "end-to-end-ordering-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5688804800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the user is able to place an order",
  "description": "",
  "id": "end-to-end-ordering-scenarios;verify-whether-the-user-is-able-to-place-an-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Orders"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I loging to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add any product to the cart then checkout",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I place an order",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I sould see that the order is placd successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Orders.i_loging_to_the_application()"
});
formatter.result({
  "duration": 4858410800,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_add_any_product_to_the_cart_then_checkout()"
});
formatter.result({
  "duration": 2540462800,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_place_an_order()"
});
formatter.result({
  "duration": 15253118500,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_sould_see_that_the_order_is_placd_successfully()"
});
formatter.result({
  "duration": 645428700,
  "status": "passed"
});
formatter.after({
  "duration": 5769750900,
  "status": "passed"
});
formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality scenarios",
  "description": "",
  "id": "registration-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5767921700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the user is able to register into the application by providing all the details",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-providing-all-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I provide all the below needed valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Alex"
      ],
      "line": 8
    },
    {
      "cells": [
        "LastName",
        "Levi"
      ],
      "line": 9
    },
    {
      "cells": [
        "Email",
        "alexlevi6@gmail.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "Telephone",
        "9720549843322"
      ],
      "line": 11
    },
    {
      "cells": [
        "Password",
        "Alex"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the privacy policy button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see that the user account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2893387700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 2838026400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_needed_valid_details(DataTable)"
});
formatter.result({
  "duration": 677670700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 91297000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 653254400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_has_successfully_created()"
});
formatter.result({
  "duration": 45472700,
  "status": "passed"
});
formatter.after({
  "duration": 5956265300,
  "status": "passed"
});
formatter.before({
  "duration": 5765073900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify whether the user is not allowed to register due to skipping mandatory fields",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-not-allowed-to-register-due-to-skipping-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Register"
    },
    {
      "line": 18,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I navigate to the Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the Continue button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I should see that the user account was not created",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I shlould see the error message informing the user to fill the mandatory infomration",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3244245600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 2559941000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 516814000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_was_not_created()"
});
formatter.result({
  "duration": 67059600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_shlould_see_the_error_message_informing_the_user_to_fill_the_mandatory_infomration()"
});
formatter.result({
  "duration": 210289000,
  "status": "passed"
});
formatter.after({
  "duration": 5853118700,
  "status": "passed"
});
formatter.before({
  "duration": 5919172900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify whether the user is able to register into the application by opting for the Newsletter Subscription and providing all the details",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-opting-for-the-newsletter-subscription-and-providing-all-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Register"
    },
    {
      "line": 28,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I navigate to the Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I provide all the below needed valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Alex"
      ],
      "line": 33
    },
    {
      "cells": [
        "LastName",
        "Levi"
      ],
      "line": 34
    },
    {
      "cells": [
        "Email",
        "alexlevi6@gmail.com"
      ],
      "line": 35
    },
    {
      "cells": [
        "Telephone",
        "9720549843322"
      ],
      "line": 36
    },
    {
      "cells": [
        "Password",
        "Alex"
      ],
      "line": 37
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I select the privacy policy button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I subscribe to the Newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on the Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should see that the user account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2860685500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 2596267600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_needed_valid_details(DataTable)"
});
formatter.result({
  "duration": 598609600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 89411700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_the_Newsletter()"
});
formatter.result({
  "duration": 102870200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 640737600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_has_successfully_created()"
});
formatter.result({
  "duration": 56306600,
  "status": "passed"
});
formatter.after({
  "duration": 5898890900,
  "status": "passed"
});
formatter.before({
  "duration": 5758075400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify whether the user is able to register into the application by providing all the details",
  "description": "",
  "id": "registration-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-providing-all-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@Register"
    },
    {
      "line": 44,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I navigate to the Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I provide all the below duplicated details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Alex"
      ],
      "line": 49
    },
    {
      "cells": [
        "LastName",
        "Levi"
      ],
      "line": 50
    },
    {
      "cells": [
        "Email",
        "alexlevi6@gmail.com"
      ],
      "line": 51
    },
    {
      "cells": [
        "Telephone",
        "9720549843322"
      ],
      "line": 52
    },
    {
      "cells": [
        "Password",
        "Alex"
      ],
      "line": 53
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I select the privacy policy button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on the Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should see that the user is restricted from creating duplicate account",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2850679200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 2648978200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_duplicated_details(DataTable)"
});
formatter.result({
  "duration": 656542700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 96216300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 483427400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_is_restricted_from_creating_duplicate_account()"
});
formatter.result({
  "duration": 47441800,
  "status": "passed"
});
formatter.after({
  "duration": 5904074200,
  "status": "passed"
});
formatter.uri("FeatureFiles/search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality scenarios",
  "description": "",
  "id": "search-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5833796700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify whether the user is able to search for the products",
  "description": "",
  "id": "search-functionality-scenarios;verify-whether-the-user-is-able-to-search-for-the-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Search"
    },
    {
      "line": 4,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I search for the product \"Samsung SyncMaster 941Bw\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the product in the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2920740700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung SyncMaster 941Bw",
      "offset": 26
    }
  ],
  "location": "Search.i_search_for_the_product(String)"
});
formatter.result({
  "duration": 1755481300,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_results()"
});
formatter.result({
  "duration": 61737600,
  "status": "passed"
});
formatter.after({
  "duration": 5835717500,
  "status": "passed"
});
formatter.before({
  "duration": 5746187300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify whether the user is informed when the product being searched is not available",
  "description": "",
  "id": "search-functionality-scenarios;verify-whether-the-user-is-informed-when-the-product-being-searched-is-not-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Search"
    },
    {
      "line": 11,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I search for the product \"Apple iPhone\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the page displaying the message \"There is no product that matches the search criteria.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 2944746100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone",
      "offset": 26
    }
  ],
  "location": "Search.i_search_for_the_product(String)"
});
formatter.result({
  "duration": 1505711400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There is no product that matches the search criteria.",
      "offset": 46
    }
  ],
  "location": "Search.i_should_see_the_page_displaying_the_message(String)"
});
formatter.result({
  "duration": 37049100,
  "status": "passed"
});
formatter.after({
  "duration": 5837527100,
  "status": "passed"
});
});