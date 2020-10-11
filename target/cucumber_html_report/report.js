$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality scenarios",
  "description": "",
  "id": "login-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9223025200,
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
  "duration": 3474707000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_the_account_Login_page()"
});
formatter.result({
  "duration": 1785178300,
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
  "duration": 1002528400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_user_is_able_to_login_successfully()"
});
formatter.result({
  "duration": 61703400,
  "status": "passed"
});
formatter.after({
  "duration": 781894600,
  "status": "passed"
});
formatter.before({
  "duration": 5733635300,
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
  "duration": 2825673300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_the_account_Login_page()"
});
formatter.result({
  "duration": 1487810300,
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
  "duration": 721512300,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 47577400,
  "status": "passed"
});
formatter.after({
  "duration": 1240981600,
  "status": "passed"
});
formatter.before({
  "duration": 5691159800,
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
  "duration": 2776110600,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_the_account_Login_page()"
});
formatter.result({
  "duration": 1463608200,
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
  "duration": 639004500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentials_are_invalid()"
});
formatter.result({
  "duration": 63582700,
  "status": "passed"
});
formatter.after({
  "duration": 791113900,
  "status": "passed"
});
formatter.before({
  "duration": 5821427000,
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
  "duration": 2790771000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_the_account_Login_page()"
});
formatter.result({
  "duration": 1719795100,
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
  "duration": 1391086400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_the_user_that_information_related_to_resetting_password_was_sent_to_his_email_address()"
});
formatter.result({
  "duration": 53177700,
  "status": "passed"
});
formatter.after({
  "duration": 823097200,
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
  "duration": 5906522100,
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
  "duration": 2813490800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 2326875300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_needed_valid_details(DataTable)"
});
formatter.result({
  "duration": 743635400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 104215600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 1146477600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_has_successfully_created()"
});
formatter.result({
  "duration": 61496500,
  "status": "passed"
});
formatter.after({
  "duration": 866685200,
  "status": "passed"
});
formatter.before({
  "duration": 5879553300,
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
  "duration": 2797780000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 2635139600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 518757200,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_was_not_created()"
});
formatter.result({
  "duration": 105638700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_shlould_see_the_error_message_informing_the_user_to_fill_the_mandatory_infomration()"
});
formatter.result({
  "duration": 210069100,
  "status": "passed"
});
formatter.after({
  "duration": 1222913000,
  "status": "passed"
});
formatter.before({
  "duration": 5805875900,
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
  "duration": 3837392300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 2463801100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_needed_valid_details(DataTable)"
});
formatter.result({
  "duration": 679599500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 99971800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_the_Newsletter()"
});
formatter.result({
  "duration": 106903600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 695614700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_has_successfully_created()"
});
formatter.result({
  "duration": 59709600,
  "status": "passed"
});
formatter.after({
  "duration": 826720700,
  "status": "passed"
});
formatter.before({
  "duration": 5922101900,
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
  "duration": 2854330900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 2520400300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_duplicated_details(DataTable)"
});
formatter.result({
  "duration": 636934700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 111685400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 494536300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_is_restricted_from_creating_duplicate_account()"
});
formatter.result({
  "duration": 40491300,
  "status": "passed"
});
formatter.after({
  "duration": 1001796500,
  "status": "passed"
});
formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality scenarios",
  "description": "",
  "id": "search-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5869619100,
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
  "duration": 4440864900,
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
  "duration": 2060626700,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_results()"
});
formatter.result({
  "duration": 61005600,
  "status": "passed"
});
formatter.after({
  "duration": 821208800,
  "status": "passed"
});
formatter.before({
  "duration": 5800530500,
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
  "duration": 2759515600,
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
  "duration": 1412297800,
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
  "duration": 39799800,
  "status": "passed"
});
formatter.after({
  "duration": 771329700,
  "status": "passed"
});
});