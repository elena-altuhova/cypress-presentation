Feature: Checking Online Schedule on AirMoldova Website
User wants to check departed flights

Scenario: Checking departed flights

Given user accesses Landing Page
When user selects "OnlineSchedule" from header menu
And user clicks "Departure"
Then tables for yesterday, today and tomorrow appear

Scenario: Checking arrived flights
When user selects "OnlineSchedule" from header menu
And user clicks "Arrival"
Then tables for yesterday, today and tomorrow appear