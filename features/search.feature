Feature: Search functionality on University of Latvia website 

    Scenario: As a user, I can select cookie preferences

        Given I see the main page
        When I see cookie preference bar 
        And I can select optional checkbox for "statistics" cookies
        And I click the "Pielāgot" button
        And I see a cookie modal pop-up
        And I click the "Saglabāt uzstādījumus" button
        Then I see the main page without the cookie preference bar
@test
    Scenario: As a user, I can search for an article
        Given I see the Search option
        When I click on the Search button
        And I see the Search bar open
        And I input "abc" in the search input field
        And I click search
        And I see the search result page
        And I see empty search page
        And I input "datorzinātnes" in the search input field
        Then I see more than 1 search match

    Scenario: As a user, I can sort search results by age
        Given I see the search result page
        When I see the "KĀRTOT PĒC" filter section
        And I notice the year that the first article is from
        And I choose to sort by the "oldest"
        Then I see the first article is from year 2010

    Scenario: As a user, I can sort search results by type
        Given I see the search result page
        When I open "Tipi" filter section
        And I check <type> checkbox
        And I see all returned results have <type> type
        Then I clear the filter checkbox

        Examples: 
        | type |
        | Saturs |
        | Kurss |
        | Ziņas |
        | Programma |

    Scenario: As as user, I can clear search results
        Given I see the search result page
        When I clear filters and search 
        Then I see empty search page




