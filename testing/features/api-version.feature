Feature: API Version

  Scenario: Get API Version
    When Call to "/"
    Then the response status code should be "200"
    And the response should be "v1.0"
    