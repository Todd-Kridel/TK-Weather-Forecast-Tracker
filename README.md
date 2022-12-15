# Bootcamp Module 6 Challenge Assignment -- a Weather Dashboard/Tracker for Weather Current-Day Conditions and Weather Forecast Days Conditions of Selected Cities

## Description

This current Module 6 Challenge assignment -- a weather dashboard/tracker application -- provided a very-good mechanism for continued learning with accessing/using external API data systems and processing the received data for an application purpose; and for expanded learning about JavaScript programming in enhanced/advanced ways; and for dealing with webpage layout and related styling and linking/tracking/eventing webpage elements with the related functional processes. A large portion and effort of my personal assignment was for a significant attempt to consider about and address concerns of data validation/flexibility and screen responsiveness/flexibility for various functions and processes and data/data conditions; as well as for varied usages/implementations of global-scope variables and local-scope variables. The assignment was also a good mechanism for examining and analyzing and understanding and then designing the styling of the appearance of the application webpage. That styling was initially done in an inline way in the main webpage-definition (HTML) file for reasons of initial-timing circumstances...but then eventually much of the styling components were moved to an external Cascading Style Sheets (CSS) file for reasons of ongoing over-time system maintenance...and during that move-to-CSS time a re-appreciation about the CSS concept and system occurred. The assignment and the bonus-added "Application Status" text area also provided good continued consideration and programming about application error/bug testing and QA testing processes and concerns.

Many extra features and functionality were added to the application by the programmer...just for fun and curiosity and extra practice/education...and especially because the assignment submission was delayed because of schedule conditions/conflicts -- a need to fully-focus on a more-important class project assignment -- that occurred when this challenge assignment was initially assigned. The "Usage" section at below details about the features that were implemented for this challenge assignment application. The programming of this assignment was MUCH assisted and enhanced because the programmer decided to implement a weather forecast information component to the programmer's class project assignment that occurred. The API-usage knowledge that occurred from the pre-learning that occurred for the project assignment was definitely helpful for expanding the features of this challenge assignment. Refer to below for a picture that shows the appearance of the weather feature of the project assignment sub-webpage.

----

The objectives -- user story and acceptance criteria items -- of the assignment were as follows:

Use the 5 Day Weather Forecast Links (with an activated user key per an established user account) to an external site to retrieve weather data for cities. The base URL should look like the following: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}. Query the API data based on city name and also geographical location latitude and longitude coordinates. Use localStorage memory to store persistent data of the application.

[ User Story ]

AS A traveler
I WANT to see the weather outlook for multiple cities...SO THAT I can plan a trip accordingly.

....

[ Acceptance Criteria ]

GIVEN a weather dashboard with form inputs

* WHEN I search for a city...THEN I am presented with current and future conditions for that city and that city is added to the search history.
* WHEN I view current weather conditions for that city...THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed.
* WHEN I view future weather conditions for that city...THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity.
* WHEN I click on a city in the search history...THEN I am again presented with current and future conditions for that city.

....

[ Additional Grading Criteria ]

Also good coding practices and good GitHub/Git repository configuration.

## Installation

Make sure that you have a GitHub membership and account to be able to view the repository of the assignment webpage system. The published GitHub Pages view of the website should be accessible on the public internet access URL without a need to have a GitHub membership/account.

## Usage (indications about application features)

To use this password generator webpage...

* Use the many pre-set weather search buttons (at the lower part of the application) that are for cities that are of particular interest/curiosity to the programmer of the application. Notice about how the application window automatically moves-up (if necessary) the window view to the new summary information. Notice about how the application encounters and deals with situations when cities that are searched for have to at some times be searched for based on city name information and at other times be searched for based on location latitude and longitude coordinates.
* Use the "Search for a City" field and the "Search" button to submit searches for weather information that is about cities that are of interest/curiosity to the specific user of the application. Notice about how the application encounters and deals with situations when cities that are searched for happen to have names that exist in more than 1 state.
* Use the "More Information About The Weather Status/Type Graphics Icons" button to view helpful additional related information.
* Use the upper-position weather information summary display areas to quickly view some essential weather information about the current searched-for city. Notice about how the time of the displayed information is indicated and also about how the timing is illustrated with a corresponding time-specific icon image. Notice about how the current-day-conditions icon has a background color that changes based on the time of the search...and about how the background color of the forecast-day-conditions icons stay at a desired midday time color unless a midday forecast summary is not available because of certain reasons.
* Use the many "More Information" scrollable text areas to view much helpful additional information about the involved weather information search summaries that are displayed for the current search. Notice that the text areas display bonus extra-data information at various times...such as when residual remaining current-day forecast information is available for searches that are done at the beginning of the day...and such as when extra-day forecast information is available and displayed for Day 5 for searches that are done at the end of the day.
* Use the "The Most-Recent 13 Searches" -- City Search History -- area buttons to view the new current image/data of the current-day and forecast-days weather information of cities that recently previously were custom-searched for by using the "Search" button (not by using any of the pre-set city buttons). ** Note: An enhancement feature that was desired for the history section was to add a persistent storage memory area and an application data display field that were for the actual previous-search summary data so the difference between the previous conditions and the new/current conditions could be viewed. Unfortunately that feature could not be added because the programmer ran-out of programming time. **
* Use the Latitude/Longitude coordinate-based search feature section (at the bottom of the webpage) to search for any desired city name locations that could not be located/retrieved in the city search feature (at the top of the webpage) because the involved city name is apparently not yet on-record in the City Name database of the external API weather data system.
* Use the "Delete" buttons of the "City Search History" area to delete/clear any no-longer-desired search history buttons.
* Try to click any of the empty "Previous Search" buttons and "Delete" buttons of the "City Search History" area to see about how the application responds.
* Use the highlighted border of the main current-day-conditions text area to know when there is helpful application usage status/guidance information -- Online Help -- that currently is displayed at the bottom (most-recent-addition area) of the text area.
* Use the "Application Status" field (at the bottom of the search history button area/panel) to view much helpful/interesting additional information about the ongoing functioning of the current usage session of the application.
* Re-size the application window to view about how the window adapts to changing size conditions.

[ Challenge Assignment Appearance ]

The following picture shows the appearance of the completed (for-now) challenge assignment application webpage:

![an example view of the appearance of the weather-search upper webpage](./assets/images/TK-Weather-Forecast-Tracker-Upper.jpg)

![an example view of the appearance of the weather-search lower webpage](./assets/images/TK-Weather-Forecast-Tracker-Lower.jpg)

The following URL is for the GitHub Pages published public view of Todd Kridel's Coding Bootcamp Module 6 Challenge assignment webpage: "https://todd-kridel.github.io/TK-Weather-Forecast-Tracker".

[ Related Project Assignment Appearance ]
(the origin of the code that was used for the coordinate-based search feature of this weather dashboard/tracker application)

![an example view of the appearance of the programmer's related weather-search webpage](./assets/images/Campsite-Finder%20Project%20Application%20--%20Weather%20Forecast%20Feature.jpg)

The following URL is for the GitHub Pages published public view of Todd Kridel's Team Project assignment webpage: "https://alester77.github.io/Project-Camp/index.html" (specifically "https://alester77.github.io/Project-Camp/weather.html#campingTripNotesDisplayArea" for the weather forecast sub-webpage...but a desired campsite must first be selected from the main application webpage).

## Credits

NA

## License

MIT License

Copyright (c) 2022 DU Full-Stack Web Development Coding Boot Camp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

