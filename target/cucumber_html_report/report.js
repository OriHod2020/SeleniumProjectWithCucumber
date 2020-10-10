$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality scenarios",
  "description": "",
  "id": "registration-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9072047200,
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
  "duration": 45178059800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 5328903500,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_needed_valid_details(DataTable)"
});
formatter.result({
  "duration": 803832100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 134800000,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 802900800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_has_successfully_created()"
});
formatter.result({
  "duration": 79268400,
  "status": "passed"
});
formatter.after({
  "duration": 809702100,
  "status": "passed"
});
formatter.before({
  "duration": 5963081000,
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
  "duration": 39534477400,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 12484535700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 1774439900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_was_not_created()"
});
formatter.result({
  "duration": 111464800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_shlould_see_the_error_message_informing_the_user_to_fill_the_mandatory_infomration()"
});
formatter.result({
  "duration": 295482000,
  "status": "passed"
});
formatter.after({
  "duration": 800074700,
  "status": "passed"
});
formatter.before({
  "duration": 5946721600,
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
  "duration": 7276752900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 10298016800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_needed_valid_details(DataTable)"
});
formatter.result({
  "duration": 748414900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 148335900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_the_Newsletter()"
});
formatter.result({
  "duration": 128961900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 802396600,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_account_has_successfully_created()"
});
formatter.result({
  "duration": 66207900,
  "status": "passed"
});
formatter.after({
  "duration": 819305200,
  "status": "passed"
});
formatter.before({
  "duration": 5870226900,
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
  "duration": 11714820800,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_the_Account_Registration_page()"
});
formatter.result({
  "duration": 5146243900,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_duplicated_details(DataTable)"
});
formatter.result({
  "duration": 746523300,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_privacy_policy_button()"
});
formatter.result({
  "duration": 123011100,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_the_Continue_button()"
});
formatter.result({
  "duration": 1303046700,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_user_is_restricted_from_creating_duplicate_account()"
});
formatter.result({
  "duration": 75600900,
  "status": "passed"
});
formatter.after({
  "duration": 796923300,
  "status": "passed"
});
});