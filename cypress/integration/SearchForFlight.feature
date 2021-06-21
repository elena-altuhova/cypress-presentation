Feature: Searching for Flights on AirMoldova Website
User wants to check available flights

Scenario: Searching for a valid flight to Austria

Given user accesses Landing Page
When user introduces search parameters as follows
|From    |To     |DepartureDate   | ReturnDate     | AdultsAmount |
|Chisinau|Vienna |1 September 2021|7 September 2021|3             |
And user clicks Search Flights
Then error message "We found no information" appears