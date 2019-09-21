@login
Feature: Sign in
  Login our page

  Scenario: Validate required fields
    Given I am on the login page
    When I click on login
    Then Validate message for user incorrect "El usuario es requerido"
    And Validate message for password incorrect "La contraseña es requerida"

  Scenario: Do login correctly
    Given I am on the login page
    When I enter a correct username
    And I enter a correct password
    And I click on login
    Then Go to home page
