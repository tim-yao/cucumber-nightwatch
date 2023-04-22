Feature: Cucumber Nightwatch itegration

Background:
  Given a Cucumber setup

Scenario: Can run Cucumber test with Nightwatch
  When I run the cucumber-js with "--tags @pass"
  Then it passes

Scenario: Can run Cucumber Nightwatch test to capture failure
  When I run the cucumber-js with "--tags @fail"
  Then it fails
