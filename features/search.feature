Feature: Search functionality on University of Latvia website 

    Scenario: As a user, I can select cookie preferences

        Given I see the main page
        When I see cookie preference bar 
        And I can select optional checkbox for "statistics" cookies
        And I click the "Pielāgot" button
        And I see a cookie modal pop-up
        And I click the "Saglabāt uzstādījumus" button
        Then I see the main page without the cookie preference bar

    Scenario: As a user, I can open the Search bar
        Given I see the main page
        When I click on the Search button on the navigation bar
        Then I should see the Search bar open

    Scenario: As a user, I can search for a term with no results
        Given The Search bar is open
        When I input "abcabc" in the navigation bar search input field
        And I click the search button
        Then I should see the Search Result page
        And I should see 0 search matches

    Scenario: As a user, I can search for a valid term and see results
        Given I am on the Search Result page
        When I input "datorzinātnes" in the search page input field
        And I click the search button in the Search Result page
        Then I should see more than 1 search match
@test
    Scenario: As a user, I can sort search results by age
        Given I see the search result page for "kursi"
        When I see the "KĀRTOT PĒC" filter section
        And I notice the year that the first article is from
        And I choose to sort by the "oldest"
        Then I see the first article year is before the default year
@test2
    Scenario: As a user, I can sort search results by type
        Given I see the search result page for "komunikācijas"
        When I open "Tipi" filter section
        And I check <type> checkbox
        And I see returned results have <type> type
        Then I clear the filter checkbox

        Examples: 
        | type |
        | Saturs |
        | Kurss |
        | Ziņas |
        | Programma |
@test3
    Scenario: As as user, I can clear search results
        Given I see the search result page for "hyperlink"
        When I clear filters and search 
        Then I see empty search page




