Feature: Check the Google page title
This is a demo test for testing the cucumber-nightwatch

  @pass
  Scenario: Use nightwatch.js browser testing API in the Cucumber test
    Given I visit the Google AU homepage
    When I check the page title
    Then the title text should be "Google"

  @fail
  Scenario: Use nightwatch.js browser testing API in the Cucumber test
    Given I visit the Google AU homepage
    When I check the page title
    Then the title text should be "Bing"
