Feature: Search functionality on University of Latvia website 
@test
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

    Scenario: As a user, I can sort search results by age
        Given I am on the Search Result page for <searchQuery> query
        When I sort results by <sortOrder>
        And I verify that the URL contains <parameter> for required sorting
        And I wait until the query results have updated
        Then I verify the sorting order is <sortOrder>

        Examples:
        | searchQuery | sortOrder | parameter |
        | kursi | asc | orderBy=asc |
        | priekšmeti | desc | orderBy=desc |
 

    Scenario: As as user, I can clear search results
        Given I am on the Search Result page for <searchQuery> query
        When I clear search field 
        And I click the search button in the Search Result page
        Then I see "0" search results

        Examples:
        | searchQuery |
        | pasākums | 




