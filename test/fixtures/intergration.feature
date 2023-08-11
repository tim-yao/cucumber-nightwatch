Feature: Cucumber and Nightwatch intergration test
This is a demo test for testing the cucumber-nightwatch.
Use nightwatch.js browser testing API in the Cucumber test.

  @pass
  Scenario: The nightwatch command and assert should work
    Given I visit the Google AU homepage
    When I check the page title
    Then the title text should be "Google"

  @pass
  Scenario: The nightwatch command and expect should work 2
    Given I visit the Google AU homepage
    Then I run
    | command | arg |
    | waitForElementPresent | input |
    | waitForElementVisible | form[role="search"] |
    | waitForElementNotPresent | #not-existing-element |
    | element | input |
    Then element commands should work

  @fail
  Scenario: The nightwatch command and assert should capture the failure
    Given I visit the Google AU homepage
    When I check the page title
    Then the title text should be "Bing"

  @fail
  Scenario: The nightwatch waitForElementVisible should capture the failure
    Given I visit the Google AU homepage
    Then I run
    | command | arg |
    | waitForElementVisible | #not-existing-element |

 @fail
  Scenario: The nightwatch element API should capture the failure
    Given I visit the Google AU homepage
    Then I run
    | command | arg |
    | element | #not-existing-element |
