Feature: Search functionality on LU website 

    Scenario: As a user, I can select cookie preferences

        Given I see the main page
        When I see cookie preference bar 
        And I can select optional checkboxes
        And I the checkbox is selected
        And I see a modal pop-up when clicking on <Pielāgot> button
        And I click <Saglabāt uzstādījumus> button
        Then I see the main page without the <cookie preference bar>