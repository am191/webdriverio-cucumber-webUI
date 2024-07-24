Feature: Search functionality on University of Latvia website 

    Scenario: As a user, I can select cookie preferences

        Given I see the main page
        When I see cookie preference bar 
        And I can select optional checkbox for "statistics" cookies
        And I click the "Pielāgot" button
        And I see a cookie modal pop-up
        And I click the "Saglabāt uzstādījumus" button
        Then I see the main page without the cookie preference bar


    Scenario: As a user, I can search for an article
        When I click on the Search button
        And I see the Search bar open
        And I input "abc" in the search input field
        And I see the search result page
        And I see 0 search matches
        And I input "datorzinātnes" in the search input field
        And I see 10 search matches

