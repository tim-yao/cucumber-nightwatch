Feature: Cucumber Nightwatch itegration

Scenario: Can run Cucumber test with Nightwatch
  Given a Cucumber setup with cucumber-nightwatch
  When I run the cucumber-js with "--tags @pass"
  Then it passes

Scenario: Can run Cucumber Nightwatch test to capture failure
  Given a Cucumber setup with cucumber-nightwatch
  When I run the cucumber-js with "--tags @fail"
  Then it fails
