Feature: Search functionality on LU website 

    Scenario: As a user, I can select cookie preferences

        Given I see the main page
        When I see cookie preference bar 
        And I can select optional checkbox for "statistics" cookies
        And I click the "Pielāgot" button
        And I see a cookie modal pop-up
        And I click the "Saglabāt uzstādījumus" button
        Then I see the main page without the cookie preference bar