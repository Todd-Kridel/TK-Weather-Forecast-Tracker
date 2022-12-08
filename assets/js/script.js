

//////////////////////////////////////////////////////
//
// Weather process code
//
//


//theWeatherForecastDay1InformationSummaryDisplayArea

// a section that is to be run for page/variable/data initialization upon page load
var anErrorConditionExists = false;
var theWeatherCurrentDaySummary = document.getElementById("theWeatherCurrentDaySummary");
theWeatherCurrentDaySummary.textContent = "Selected city weather current-day information will be displayed at here.";
var theWeatherCurrentDayInformationDisplayTextArea = 
  document.getElementById("theWeatherCurrentDayInformationDisplayTextArea");
theWeatherCurrentDayInformationDisplayTextArea.innerHTML = "\n" + 
  "Search for a USA city by field entry...or select a pre-set city by button click at below..." + 
  "to display current weather information and 5-day forecast weather information that is for that city." + 
  "\n" + 
  "Selected city weather current-day information will be displayed at here." + "\n" + 
  "\n";
//var theWeatherCurrentDayIcon = document.getElementById("theWeatherCurrentDayIcon");  // a removed other idea
//theWeatherCurrentDayIcon.innerHTML = "<ICON>"; // an initial idea for displaying the weather icons
//
var theWeatherForecastDay1InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay1InformationDisplayTextArea");
theWeatherForecastDay1InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>";
var theWeatherForecastDay1Summary = document.getElementById("theWeatherForecastDay1Summary");
theWeatherForecastDay1Summary.textContent = "Selected city weather forecast information will be displayed at here.";
//var theWeatherForecastDay1Icon = document.getElementById("theWeatherForecastDay1Icon");
//theWeatherForecastDay1Icon.textContent = "<ICON>";
//
var theWeatherForecastDay2InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay2InformationDisplayTextArea");
theWeatherForecastDay2InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>";
var theWeatherForecastDay2Summary = document.getElementById("theWeatherForecastDay2Summary");
theWeatherForecastDay2Summary.textContent = "Selected city weather forecast information will be displayed at here.";
//var theWeatherForecastDay2Icon = document.getElementById("theWeatherForecastDay2Icon");
//theWeatherForecastDay2Icon.textContent = "<ICON>";
//
var theWeatherForecastDay3InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay3InformationDisplayTextArea");
theWeatherForecastDay3InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>";
var theWeatherForecastDay3Summary = document.getElementById("theWeatherForecastDay3Summary");
theWeatherForecastDay3Summary.textContent = "Selected city weather forecast information will be displayed at here.";
//var theWeatherForecastDay3Icon = document.getElementById("theWeatherForecastDay3Icon");
//theWeatherForecastDay3Icon.textContent = "<ICON>";
//
var theWeatherForecastDay4InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay4InformationDisplayTextArea");
theWeatherForecastDay4InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>";
var theWeatherForecastDay4Summary = document.getElementById("theWeatherForecastDay4Summary");
theWeatherForecastDay4Summary.textContent = "Selected city weather forecast information will be displayed at here.";
//var theWeatherForecastDay4Icon = document.getElementById("theWeatherForecastDay4Icon");
//theWeatherForecastDay4Icon.textContent = "<ICON>";
//
var theWeatherForecastDay5InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay5InformationDisplayTextArea");
theWeatherForecastDay5InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>";
var theWeatherForecastDay5Summary = document.getElementById("theWeatherForecastDay5Summary");
theWeatherForecastDay5Summary.textContent = "Selected city weather forecast information will be displayed at here.";
//var theWeatherForecastDay5Icon = document.getElementById("theWeatherForecastDay5Icon");
//theWeatherForecastDay5Icon.textContent = "<ICON>";
//
var theCitySearchField = document.getElementById("theCitySearchField");
theCitySearchField.value = "Enter a weather-search USA city specification."
var theCitySearchButton = document.getElementById("theCitySearchButton");
var theSearchButtonNoteButton = document.getElementById("theSearchButtonNoteButton");
var theSearchButtonNote = document.getElementById("theSearchButtonNote");
theSearchButtonNote.innerHTML = 
  "(Note: Spelling must be correct in order for the search process to be successful. A \",&nbspState\" search " + 
  "element can be entered at the end of a city name...such as \"Denver\"...that exists in different states...but " + 
  "a record will be retrieved only if the specified city has a record in the API \"City\" search database that is " + 
  "being used by this program. The retrieved city might be a default (closest-match) city that is different than " + 
  "the one that was intended for the search.";
var theSearchButtonNoteMode = "hidden";
//
var theApplicationStatusDisplayTextArea = document.getElementById("theApplicationStatusDisplayTextArea");
theApplicationStatusDisplayTextArea.innerHTML = "";

// Load from local storage the previously-saved array variable that holds the involved selected city weather forecasts
// that were saved by the process of the "Show 5-Day Weather Forecast" button that was clicked by the user.
//var thePreviousSelectedCityWeatherRecord = JSON.parse(localStorage.getItem("TKCityWeatherForecastRecord"));

//window.alert("PROGRAM START");


//////////////////////////
//
// Event Listener Functions
//
//


theCitySearchField.addEventListener("click", function() {
  if (theCitySearchField.value == "Enter a weather-search USA city specification.") {
    theCitySearchField.value = "";
  }
})


theCitySearchField.addEventListener("keypress", function(event) {
  if (event.key == "Enter") {
    event.preventDefault();
    document.getElementById("theCitySearchButton").click();
  }
})


function toggleNoteDisplay() { 
  // for the "theSearchButtonNoteButton" built-in on-click event parameter
  if (theSearchButtonNoteMode == "hidden") {
    theSearchButtonNote.style.display = "block";
    //theSearchButtonNote.style.height = "1px";
    theSearchButtonNoteMode = "shown";
    theSearchButtonNoteButton.innerHTML = "Hide the note.";
  }
  else if (theSearchButtonNoteMode == "shown") {
    theSearchButtonNote.style.display = "none";
    //theSearchButtonNote.style.height = "auto";
    theSearchButtonNoteMode = "hidden";
    theSearchButtonNoteButton.innerHTML = "Important Note";
  }
}                                         


//document.addEventListener("keypress", function(event) {  // not really necessary/applicable but an option
//  if (event.key == "Enter") {
//    event.preventDefault();
//    document.getElementById("theCitySearchButton").click();
//  }
//})

    
theCitySearchButton.addEventListener("click", function() {
// Validate the user's search-parameter input before attempting to pass the input to the API fetch function.
// * no blank submissions
// * no characters other than those that are indicated in the validation string at below.
// * no multiple commas
// * and check about a state specification and process accordingly
var aValidationErrorExists = false;
var theUserInput = (theCitySearchField.value).trim();
var theUserInputCapitalized = theUserInput.toUpperCase();
var theValidationCharacterString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,. ";
var theAmountOfCommas = 0;
// 
if ((theUserInput == "") || (theUserInput == "Enter a weather-search USA city specification.")) {
  aValidationErrorExists = true;
  //window.alert("ERROR: NO ENTRY");
  theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "ERROR: NO ENTRY" + 
    "\n";
}
else {
  for (theInputValidationLoopCounter = 0; theInputValidationLoopCounter < theUserInput.length; 
    theInputValidationLoopCounter++) {
    if (theValidationCharacterString.indexOf(theUserInputCapitalized[theInputValidationLoopCounter]) == -1) {
      aValidationErrorExists = true;
      theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
        "INPUT ERROR: with character '" + 
        theUserInputCapitalized[theInputValidationLoopCounter] + "' at position index '" + 
        theInputValidationLoopCounter + "'. " + "\n";
    }
    if (theUserInputCapitalized[theInputValidationLoopCounter].indexOf(",") != -1) {
      theAmountOfCommas = theAmountOfCommas +1;
    }
  }
}
if (theAmountOfCommas > 1) {
  aValidationErrorExists = true;
  theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
    "INPUT ERROR: A search parameter can contain only 1 comma. Re-specify and re-submit." + "\n";
}
if (aValidationErrorExists != true) {
  if (theAmountOfCommas == 0) {  // a valid "city (only)" search parameter pre-entry
    //window.alert("SEARCH SUBMISSION FOR : " + theUserInput + " NO_STATE_INPUT");
    getWeatherInformationApiUrl(theUserInput, "NO_STATE_INPUT", "USA", "NAME");
  }
  else {  // a valid "city, state" search parameter pre-entry
    var theUserInputCity = theUserInput.substring(0, theUserInput.indexOf(","));
    var theUserInputState = theUserInput.substring((theUserInput.indexOf(",")), theUserInput.length);
    //window.alert("SEARCH SUBMISSION FOR: " + theUserInputCity + " " + theUserInputState);
    getWeatherInformationApiUrl(theUserInputCity, theUserInputState, "USA", "NAME");
  }
}
else {
  window.alert(
    "INPUT ERROR: The search city name (and state name if included) can contain only letter characters and " + 
    "additionally (if applicable) a '.' character and a ' ' (space) character (and a ',' character for a state " + 
    "specification)...and the submitted Search field specification cannot be blank. Correct the input and submit " + 
    "a new search." + "\n"
    );
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = theWeatherCurrentDayInformationDisplayTextArea.innerHTML + 
    "\n" + 
    "INPUT ERROR: The search city name (and state name if included) can contain only letter characters and " + 
    "additionally (if applicable) a '.' character and a ' ' (space) character (and a ',' character for a state " + 
    "specification)...and the submitted Search field specification cannot be blank. Correct the input and submit " + 
    "a new search." + "\n";
  // Highlight the "More Information" field of the Current-Day Information display area.
  highlightTheMoreInformationTextAreaUponUpdate();
}
anErrorConditionExists = false;
})


// Note: This event listener did not function because the text area is read-only and auto-updated.
//theWeatherCurrentDayInformationDisplayTextArea.addEventListener ("onchange", function() {
//  theWeatherCurrentDayInformationDisplayTextArea.style.border = "3px solid rgb(255, 255, 100)";
//  setTimeout(function () {
//    theWeatherCurrentDayInformationDisplayTextArea.style.border = "2px solid lightgray";
//  }, 3000);
//  //
//})


//////////////////////////
//
// General Functions
//
//


function highlightTheMoreInformationTextAreaUponUpdate() {
// Highlight the "More Information" field of the Current-Day Information display area.
theWeatherCurrentDayInformationDisplayTextArea.style.border = "5px solid rgb(255, 255, 100)";
setTimeout(function () {
  theWeatherCurrentDayInformationDisplayTextArea.style.border = "2px solid lightgray";
}, 3000);
}


function getWeatherInformationApiUrl(passedCity, passedState, passedLocationType, passedSearchByType) {
// Use the "OpenWeatherMap" API system to obtain a weather information for user-selected cities for current-day
// weather conditions and for a 5-day time-span forecast from the current date. The city names are specified/clicked 
// and queried for 1-at-a-time in a URL city query string parameter (q=<city name>,<state code>,<country code>); and 
// also the "&cnt" parameter for the amount of days for the forecasting; and also the "&units=imperial" parameter to 
// indicate/use USA units of temperature measurement (Fahrenheit); and also the "&appid=<API KEY PER ACCOUNT 
// REGISTRATION>" security parameter. The OpenWeatherMap *free* "3-hour Forecast 5 days" service option which is 
// accessed through the "Current Weather Data" option/plan is used for this data connection.
//
// https://openweathermap.org/api
//
// Available Current-Day Weather API field names and JSON format and syntax examples are documented about at the URL 
// "https://openweathermap.org/current".
//
// Available Forecast Weather API field names and JSON format and syntax examples are documented about at the URL 
// "https://openweathermap.org/forecast5#data".
//
// Available weather symbol icon graphics that could be used for CSS styling and that are indicated in "icon" 
// data attributes of the API data are listed and described at the URL 
// "https://openweathermap.org/weather-conditions"; with icon graphics files at the URL
// "https://openweathermap.org/img/wn/".
// 
// EXAMPLE (for Denver Colorado current-day weather and forecast weather): 
// https://api.openweathermap.org/data/2.5/weather?q=Denver,CO,US&units=imperial&appid=993d2f12ebc448e7d897eca3a201a7c2
// https://api.openweathermap.org/data/2.5/forecast?q=Denver,CO&cnt=5&units=imperial&appid=993d2f12ebc448e7d897eca3a201a7c2
//
//
// Build the URL--including the necessary query parameters--that is required for obtaining the desired data
// from the API system, based on the city (and possibly state) search information that was submitted.
// * and check about a state specification and process accordingly
//window.alert("WEATHER API VALIDATED REQUEST FOR " + passedCity + " " + passedState);
// theApplicationStatusDisplayTextArea.innerHTML = "";
// theWeatherCurrentDayInformationDisplayTextArea.innerHTML = "";
// theWeatherForecastDay1InformationDisplayTextArea.innerHTML = "";
// theWeatherForecastDay1Summary.innerHTML = "";
// theWeatherForecastDay2InformationDisplayTextArea.innerHTML = "";
// theWeatherForecastDay2Summary.innerHTML = "";
// theWeatherForecastDay3InformationDisplayTextArea.innerHTML = "";
// theWeatherForecastDay3Summary.innerHTML = "";
// theWeatherForecastDay4InformationDisplayTextArea.innerHTML = "";
// theWeatherForecastDay4Summary.innerHTML = "";
// theWeatherForecastDay5InformationDisplayTextArea.innerHTML = "";
// theWeatherForecastDay5Summary.innerHTML = "";
//window.alert(passedCity + " " + passedState + " " + passedLocationType + " " + passedSearchByType);
var selectedCity = "";
if (passedSearchByType != "COORDINATES") {
  selectedCity = "q=";
}
else {
  selectedCity = "";  // a simplification preparation for the switch statement at below
}
var selectedState = "";
if ((passedSearchByType != "COORDINATES") && (passedState != "NO_STATE_INPUT")) {
  selectedState = ", ";
}
else {
  selectedState = "";  // a simplification preparation for the switch statement at below
}
if ((passedCity == "Denver") && (passedState == "NO_STATE_INPUT")) {
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
    theWeatherCurrentDayInformationDisplayTextArea.innerHTML + "\n" + 
    "Because the city name Denver was specified without a state specification...then a default weather search of the " + 
    "primary Denver Colorado record will be provided (which might be a city that is different than the one that was " + 
    "intended for the search)." + "\n" + 
    "\n";
  selectedCity = selectedCity + "Denver";
  selectedState = selectedState + ", Colorado";
  // Highlight the "More Information" field of the Current-Day Information display area.
  highlightTheMoreInformationTextAreaUponUpdate();
}
else if (passedState == "NO_STATE_INPUT") {
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
    theWeatherCurrentDayInformationDisplayTextArea.innerHTML + "\n" + 
    "Because the city name " + passedCity + " was specified without a state specification...then a default weather " + 
    "search of the primary city record that has that name in the \"City\" database of the API service will be " + 
    "provided (which might be a city that is different than the one that was intended for the search)." + "\n" + 
    "\n";
  selectedCity = selectedCity + passedCity;
  selectedState = "";
  // Highlight the "More Information" field of the Current-Day Information display area.
  highlightTheMoreInformationTextAreaUponUpdate();
}
else {
  selectedCity = selectedCity + passedCity;
  selectedState = selectedState + passedState;
}
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
  "WEATHER API FORMATTED QUERY FOR -- " + selectedCity + selectedState + " " + passedLocationType + " " + 
  passedSearchByType + "\n";
//window.alert("WEATHER API SUBMITTED REQUEST FOR " + selectedCity + selectedState);
//
if (passedLocationType == "USA") {
  if (passedSearchByType != "COORDINATES") {
    selectedState = selectedState + ", US";
  }
  else {
    selectedState = "";  // a simplification preparation for the switch statement at below
  }
}
if (passedLocationType == "NON-USA") {
  // FUTURE ENHANCEMENT: FOR ALLOWING SEARCH FIELD CITY ENTRIES THAT ARE FOR INTERNATIONAL CITIES
  // CURRENTLY USED FOR ONLY SOME 3 OF THE PRE-SET "DENVER" BUTTONS!
  if (passedSearchByType != "COORDINATES") {
    selectedState = selectedState;
  }
  else {
    selectedState = "";  // a simplification preparation for the switch statement at below
    // Use a validated country code.
  }
}
// 
if (passedSearchByType == "NAME") {
  // Use "selectedCity" and "selectedState" (including ", US") as-is (already- validated and composed).
}
if (passedSearchByType == "COORDINATES") {
  // Replace the "selectedCity" query parameter element with the "&lat=" and "&lon=" coordinate parameters (which are 
  // a different representation of the city identity); and clear (and not use) the "selectedState" query parameter 
  // element; and use a switch statement for obtaining the necessary latitude and longitude coordinates; a search type 
  // that is necessary for cities that are not on-record in the OpenWeather city database ("city.list.json.gz").
  // NOTE: Currently this feature/code is used for only Denver city locations that are searched for by the pre-set 
  // buttons of the application; not by way of the "Search" field.
  //
  // selectedCity = "&lat=<latitude_coordinate>&lon=<longitude_coordinate>" 
  //
  // *DENVER CITIES THAT ARE IN THE OPENWEATHER CITY DATABASE (FOR WHICH THE CITY NAME SEARCH CAN FUNCTION);
  // OTHER DENVER CITIES HAVE TO BE SEARCHED FOR BY LATITUDE AND LONGITUDE COORDINATES:
  // *Denver, Colorado
  // Denver, Iowa
  // Denver, North Carolina
  // Denver, Pennsylvania
  // Denver City, Texas
  // *Denver, Australia (AU)
  // *New Denver, Canada (CA)
  //
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
    theWeatherCurrentDayInformationDisplayTextArea.innerHTML + "\n" + 
  "The weather information of the selected city is actually having to be searched for in the API data service " + 
  "based on latitude and longitude location coordinates instead of by city name because currently the \"City\" " + 
  "database of the service does not yet contain a name record that is for that city. The coordinates-based search " + 
  "~might~ result with weather information that is for a city/town that is at nearby to the location coordinates " + 
  "that are being used for the search...if the coordinates cannot be exactly matched to a database record that is " + 
  "for or related to the specified city." + "\n" + 
  "\n";
  // Highlight the "More Information" field of the Current-Day Information display area.
  highlightTheMoreInformationTextAreaUponUpdate();
  //
  switch (passedState) {
  //
  // PRIMARY DENVER:
  // *Denver, Colorado; Latitude: 39.739151, Longitude: -104.984703
    // NA -- THIS CITY IS IN THE OPENWEATHER CITY DATABASE.
  //
  // OTHER STATES THAT HAVE A DENVER CITY:
  // Denver, Alabama; Latitude: 32.9940119, Longitude: -85.6066216
  case "Alabama":
    selectedCity = "lat=32.9940119&lon=-85.6066216";
    selectedState = "";
    break;
  // Denver, Arkansas; Latitude: 36.3925675, Longitude: -93.3149048
  case "Arkansas":
    selectedCity = "lat=36.3925675&lon=-93.3149048";
    selectedState = "";
    break;
  // Denver, Florida; Latitude: 29.4044186, Longitude: -81.5267403
  case "Florida":
    selectedCity = "lat=29.4044186&lon=-81.5267403";
    selectedState = "";
    break;
  // Denver, Georgia; Latitude: 33.191509, Longitude: -85.1743874
  case "Georgia":
    selectedCity = "lat=33.191509&lon=-85.1743874";
    selectedState = "";
    break;
  // Denver, Idaho; Latitude: 45.9982143, Longitude: -116.2359789
  case "Idaho":
    selectedCity = "lat=45.9982143&lon=-116.2359789";
    selectedState = "";
    break;
  // Denver, Illinois; Latitude: 40.2906008, Longitude: -91.1070841
  case "Illinois":
    selectedCity = "lat=40.2906008&lon=-91.1070841";
    selectedState = "";
    break;
  // Denver, Indiana; Latitude: 40.8640309, Longitude: -86.0779475
  case "Indiana":
    selectedCity = "lat=40.8640309&lon=-86.0779475";
    selectedState = "";
    break;
  // *Denver, Iowa; Latitude: 42.6713718, Longitude: -92.337402
    // NA -- THIS CITY IS IN THE OPENWEATHER CITY DATABASE.
  // Denver, Kentucky; Latitude: 37.7762054, Longitude: -82.8546071
  case "Kentucky":
    selectedCity = "lat=37.7762054&lon=-82.8546071";
    selectedState = "";
    break;
  // Denver, Missouri; Latitude: 40.3972163, Longitude: -94.3227345
  case "Missouri":
    selectedCity = "lat=40.3972163&lon=-94.3227345";
    selectedState = "";
    break;
  // Denver, New York; Latitude: 42.2125871, Longitude: -74.5693201
  case "New York":
    selectedCity = "lat=42.2125871&lon=-74.5693201";
    selectedState = "";
    break;
  // *Denver, North Carolina; Latitude: 35.53125, Longitude: -81.0298
    // NA -- THIS CITY IS IN THE OPENWEATHER CITY DATABASE.
  // Denver, Ohio; Latitude: 39.1931222, Longitude: -83.0557362
  case "Ohio":
    selectedCity = "lat=39.1931222&lon=-83.0557362";
    selectedState = "";
    break;
  // Denver, Oklahoma; Latitude: 35.2325687, Longitude: -97.2822515
  case "Oklahoma":
    selectedCity = "lat=35.2325687&lon=-97.2822515";
    selectedState = "";
    break;
  // *Denver, Pennsylvania; Latitude: 40.23315, Longitude: -76.137169
      // NA -- THIS CITY IS IN THE OPENWEATHER CITY DATABASE.
  // Denver, South Carolina; Latitude: 34.5753839, Longitude: -82.7365261
  case "South Carolina":
    selectedCity = "lat=34.5753839&lon=-82.7365261";
    selectedState = "";
    break;
  // Denver, Tennessee; Latitude: 36.0470046, Longitude: -87.9208635
  case "Tennessee":
    selectedCity = "lat=36.0470046&lon=-87.9208635";
    selectedState = "";
    break;
  // *Denver City, Texas; Latitude: 32.96455, Longitude: -102.829102
      // NA -- THIS CITY IS IN THE OPENWEATHER CITY DATABASE.
  // Denver, West Virginia; Latitude: 39.3823159, Longitude: -79.770341
  case "West Virginia":
    selectedCity = "lat=39.3823159&lon=-79.770341";
    selectedState = "";
    break;
  //
  // OTHER COUNTRIES THAT HAVE A DENVER CITY:
  // *Denver, Australia: Latitude: -37.26667, Longitude: 144.300003
      // NA -- THIS CITY IS IN THE OPENWEATHER CITY DATABASE.
  // Denver, England: Latitude: 52.588340, Longitude: 0.381180
  case "England":
    selectedCity = "lat=52.588340&lon=0.381180";
    selectedState = "";
    break;
  // *New Denver, Canada; Latitude: 49.99155, Longitude: -117.375801,
      // NA -- THIS CITY IS IN THE OPENWEATHER CITY DATABASE.
//
  }  // END: "selectedState" switch statement
}  // END: "passedSearchByType == 'COORDINATES'" if statement"
//
var weatherApiKey = "993d2f12ebc448e7d897eca3a201a7c2";
//
var requestWeatherCurrentDayUrlBase = "https://api.openweathermap.org/data/2.5/weather";
var requestWeatherCurrentDayUrl = requestWeatherCurrentDayUrlBase + "?" + selectedCity + selectedState + 
  "&units=imperial" + "&appid=" + weatherApiKey;
//
// Initialized some of the primary processing variables.
theApplicationStatusDisplayTextArea.innerHTML = "";
theWeatherCurrentDayInformationDisplayTextArea.innerHTML = "";
//theWeatherForecastDay1InformationDisplayTextArea.innerHTML = "";
theWeatherForecastDay1Summary.innerHTML = "";
//theWeatherForecastDay2InformationDisplayTextArea.innerHTML = "";
theWeatherForecastDay2Summary.innerHTML = "";
//theWeatherForecastDay3InformationDisplayTextArea.innerHTML = "";
theWeatherForecastDay3Summary.innerHTML = "";
//theWeatherForecastDay4InformationDisplayTextArea.innerHTML = "";
theWeatherForecastDay4Summary.innerHTML = "";
//theWeatherForecastDay5InformationDisplayTextArea.innerHTML = "";
theWeatherForecastDay5Summary.innerHTML = "";
//
// Get the weather data from the API service.
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
  "** PROCESSING IN-PROGRESS **";
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "\n" + 
  "Weather Query Submission for Current-Day Information URL: " + requestWeatherCurrentDayUrl + "\n";
//window.alert(requestWeatherCurrentDayUrl);
getWeatherInformationApi(requestWeatherCurrentDayUrl, "CURRENT");  // 
var requestWeatherForecastUrlBase = "https://api.openweathermap.org/data/2.5/forecast";
var forecastDaySpan = "48";
var requestWeatherForecastUrl = requestWeatherForecastUrlBase + "?" + selectedCity + selectedState + "&cnt=" + 
  forecastDaySpan + "&units=imperial" + "&appid=" + weatherApiKey;
// Get the weather data from the API service.
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
  "** PROCESSING IN-PROGRESS **";
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "\n" + 
  "Weather Query Submission for Forecast Information URL: " + requestWeatherForecastUrl + "\n";
//window.alert(requestWeatherForecastUrl);
getWeatherInformationApi(requestWeatherForecastUrl, "FORECAST");
}  // END: "getWeatherInformationApiUrl" function


// the basic API fetch-transmit function and data response-return process function
function getWeatherInformationApi(requestUrl, passedInformationType) {
var data = null;
var anErrorConditionExistsApi = false;
fetch(requestUrl)
.then(function (response) {
    if (response.status === 400) {
      theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "\n" + 
        "ERROR: NON-SUCCESSFUL API FETCH-RESPONSE PROCESS. RE-CHECK THE SUBMISSION DATA AND SUBMIT AGAIN AT A LATER " + 
        "TIME." + "\n" +  
        "RELATED INFORMATION (IF ANY): " + response.status + "\n";
        anErrorConditionExistsApi = true;
        //console.log(response);
        // If a fetch/response error occurs...then do not do the data parsing process.
        return;
    }
    if (response.status === 404) {
      anErrorConditionExistsApi = true;
      theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "\n" + 
        "ERROR 'CODE 404': from the API: CITY NOT FOUND." + "\n";
      //console.log(response);
      // If error...do not do the data parsing process.
      return;
    }
    return response.json();
}) .then(function(data){
if (anErrorConditionExistsApi == false) {
  console.log(data);
  //
  // ** NOTE/IMPORTANT: **
  // All of the code/process that is in this fetch-process-response section is in this section specifically because
  // the running of the code is time-dependent in that is MUST be run ONLY AFTER when the fetch response data
  // has been successfully and fully received by this program. 
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 
  // Save to memory for later retrieval and accessing the array variable that holds the entire list of city weather
  // data records that were retrieved during the current weather search.
  var theWeatherInformationFetchResponseDataRawObject = data; 
  // Possibly at later save also to local storage.
  // localStorage.setItem("theWeatherInformationFetchResponseDataRawObject", 
  //   JSON.stringify(theWeatherInformationFetchResponseDataRawObject));
  // read: JSON.parse(localStorage.getItem("theWeatherInformationFetchResponseDataRawObject"));
  //
  // pseudo-function getWeatherForecastText() {  
  //for processing the display text at ONLY AFTER when the data is available
  // Parse-Process the raw bulk data array that was returned from the fetch query to the weather API system. Load from
  // local storage or variable storage for processing the array variable that holds the entire list of city weather
  // data records that were retrieved during the current weather search. Then return/send that array variable to the
  // main part of the program for additional processing. Use an object variable to receive the raw data-set that is 
  // from the API system.
  //
  /////////////////////////////////////////////////////////
  //
  if (passedInformationType == "CURRENT") {  // the current-day weather information gathering/fetching
    /*
    CURRENT-WEATHER DATA OBJECT: 
    {
    "coord":{"lon":-104.9847,"lat":39.7392},
    "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
    "base":"stations",
    "main":{"temp":26.64,"feels_like":20.77,"temp_min":19.72,"temp_max":33.06,"pressure":1021,"humidity":45},
    "visibility":10000,
    "wind":{"speed":5.01,"deg":133},
    "clouds":{"all":2},
    "dt":1670041242,
    "sys":{"type":2,"id":2004334,"country":"US","sunrise":1669989788,"sunset":1670024164},
    "timezone":-25200,
    "id":5419384,
    "name":"Denver",
    "cod":200
    }
    */
    // Initialize variable components and their associated display elements.
    //
    var theWeatherCurrentDaySummaryTextDetails = "";
    var theWeatherCurrentDaySummaryTextCityDate = "";
    var theCurrentDayTemperature = "";
    var theCurrentDayWind = "";
    var theCurrentDayHumidity = "";
    //var theCurrentDayGraphicsIcon = "";
    theWeatherCurrentDaySummaryTextCityDate = "\n" + 
    "City name (MM/DD/YYYY Date)" + "\n";
    theWeatherCurrentDaySummaryTextDetails = "\n" + 
    "Temp: " + theCurrentDayTemperature + " °F" + "\n" + 
    "\n" + 
    "Wind: " + theCurrentDayWind + " MPH" + "\n" + 
    "\n" + 
    "Humidity: " + theCurrentDayHumidity + " %";
    //theWeatherCurrentDayIcon.textContent = "<ICON>";
    //
    var location = "";
    var theWeatherCurrent = "";
    var colorCodeDaytimeLightBlue = "rgb(209, 240, 255)";
    var colorCodeEveningDarkBlue = "rgb(5, 88, 172)";
    // other colors: button blue: 116, 173, 219; highlight yellow: 255, 255, 100; header blue: 50, 50, 150
    //
    // Establish a date-time-stamp variable.
    var theCurrentDateTimeObject = (new Date());
    var theCurrentDateTimeStamp = theCurrentDateTimeObject.toString();
    var theCurrentMonth = ((theCurrentDateTimeObject.getMonth() + 1).toString());
    var theCurrentDay = (theCurrentDateTimeObject.getDate().toString());
    var theCurrentYear = (theCurrentDateTimeObject.getFullYear().toString());
    var theCurrentHour = (theCurrentDateTimeObject.getHours().toString());
    //window.alert("theCurrentDateTimeStamp: " + theCurrentDateTimeStamp + 
    //  "; theCurrentDay: " + theCurrentDay + "; theCurrentHour: " + theCurrentHour);
    //
    // 2 primary data-set elements/collections of weather data are in the response weather object array: "name" for
    // city name and "main" for temperature details. For forecast information...those "name" and "main" items are 
    // organized within "city" and "list.weather" object or/and array data structures because of the larger amount of 
    // listed data.
    //
    // Read the city/location descriptive information.
    // * "name" element of the source data
    location = data.name;
    //
    // Read and include/compose all of the other applicable interesting weather data elements/details.
    theWeatherCurrent = 
      location + "\n" + 
      "===========================" + "\n" + 
      "CURRENT WEATHER INFORMATION:" + "\n" + 
      "for Date/Time: " + theCurrentDateTimeStamp + "\n" + 
      "---------------------------" + "\n" + 
      "Temperature: " + data.main.temp + "F" + "\n" + 
      "Temperature-Minimum: " + data.main.temp_min + "F" + "\n" + 
      "Temperature-Maximum: " + data.main.temp_max + "F" + "\n" + 
      "Description1: " + data.weather[0].main + "\n" + 
      "Description2: " + data.weather[0].description + "\n" + 
      "Clouds: " + data.clouds.all + "%" + "\n" + 
      "Wind: " + data.wind.speed + " MPH" + "\n" + 
      "Visibility: " + data.visibility + " Yards" + "\n" + 
      "Humidity: " + data.main.humidity + "%" + "\n" +
      "Pressure: " + data.main.pressure + " hPa" + "\n" + 
      "Graphics Icon File: " + data.weather[0].icon + "\n" + 
      "Latitude: " + data.coord.lat + "\n" + 
      "Longitude: " + data.coord.lon + "\n" + 
      "===========================" + "\n" + 
      "\n" + 
      "\n";
    //
    // Display the weather summary information.
    theWeatherCurrentDaySummary.textContent = "** PROCESSING SUMMARY INFORMATION **";
    // Isolate and display the weather graphics icon of the day weather information.
    //theWeatherCurrentDayIcon.innerHTML = "<img src='http:\\\\openweathermap.org\\img\\wn\\" + 
    //  data.weather[0].icon + ".png' />";
      // <img src='http:\\openweathermap.org\img\wn\<icon file name>' />
      // file name from: (data.weather[0].icon);
    //window.alert("<img src='http:\\\\openweathermap.org\\img\\wn\\" + data.weather[0].icon + ".png' />");
    //
    theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
      theWeatherCurrentDayInformationDisplayTextArea.innerHTML + theWeatherCurrent;
    //
    //theWeatherCurrentDaySummaryData.push({theCurrentDateTimeStamp, theWeatherCurrent, location});
    // a possible future storage feature for re-usage of the data at elsewhere
    //
    theCurrentDayTemperature = data.main.temp;
    theCurrentDayWind = data.wind.speed;
    theCurrentDayHumidity = data.main.humidity;
    theCurrentDayGraphicsIcon = "&nbsp&nbsp" + 
      "<img src='http:\\\\openweathermap.org\\img\\wn\\" + data.weather[0].icon + ".png' " + 
      "style='background-color: rgb(209, 240, 255); padding-left: 10px; padding-right: 10px; " + 
      "margin-bottom: -10px; border-radius: 5px;' />" + "&nbsp&nbsp";
    //
    //theWeatherCurrentDayIcon.innerHTML = "<img src='http:\\\\openweathermap.org\\img\\wn\\" + 
    //    data.weather[0].icon + ".png' />";
      // <img src='http:\\openweathermap.org\img\wn\<icon file name>' />
      // file name from: (data.weather[0].icon);"
    //
    theWeatherCurrentDaySummaryTextCityDate = "<p style='padding: 0; margin: 0; line-height: 50px'>" + 
      "<span style='font-size: 40px; font-weight: bolder'>" + location + " (" + 
      theCurrentMonth + "/" + theCurrentDay + "/" + theCurrentYear + ")</span>" + theCurrentDayGraphicsIcon + 
      "&nbsp&nbsp" + "<span style='color: gray; font-weight: normal'>(&nbspCurrent&nbspTime&nbsp)</span>" + "<br/>" + "</p>";
    theWeatherCurrentDaySummaryTextDetails = "<br/>" + "<p>" + 
      "Temp: " + theCurrentDayTemperature + " °F" + "<br/>" + 
      "<br/>" + 
      "Wind: " + theCurrentDayWind + " MPH" + "<br/>" + 
      "<br/>" + 
      "Humidity: " + theCurrentDayHumidity + " %" + "<br/>" + "</p>";
    //
    theWeatherCurrentDaySummary.innerHTML = theWeatherCurrentDaySummaryTextCityDate +
      theWeatherCurrentDaySummaryTextDetails;
    // Highlight the "More Information" field of the Current-Day Information display area.
    highlightTheMoreInformationTextAreaUponUpdate();
    //
  }  // END: "passedInformationType == 'CURRENT'" if statement
  //
  /////////////////////////////////////////////////////////
  //
  if (passedInformationType == "FORECAST") {  // the 5-day forecast weather information gathering/fetching
    /*
    FORECAST-WEATHER DATA OBJECT:
    {
    "cod":"200",
    "message":0,
    "cnt":40,
    "list":[{
      "dt":1670155200,
      "main":{"temp":35.38,"feels_like":31.84,"temp_min":35.38,"temp_max":37.89,"pressure":1021,"sea_level":1021,
        "grnd_level":840,"humidity":62,"temp_kf":-1.39},
    "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
    "clouds":{"all":100},
    "wind":{"speed":4.14,"deg":199,"gust":3.89},
    "visibility":10000,
    "pop":0,
    "sys":{"pod":"n"},
    "dt_txt":"2022-12-04 12:00:00"}
    ...other list records...
    ],
    "city":{"id":5419384,"name":"Denver",
      "coord":{"lat":39.7392,"lon":-104.9847},
      "country":"US",
      "population":600158,
      "timezone":-25200,
      "sunrise":1670162703,
      "sunset":1670196943}
    }
    */
    // Initialize variable components and their associated display elements.
    // Note: This initialization location causes an overage of field clearings and useful information is erased 
    // because of repeated function calls.
    //theWeatherForecastDay1InformationDisplayTextArea.innerHTML = "";
    //theWeatherForecastDay1Summary.innerHTML = "";
    //theWeatherForecastDay2InformationDisplayTextArea.innerHTML = "";
    //theWeatherForecastDay2Summary.innerHTML = "";
    //theWeatherForecastDay3InformationDisplayTextArea.innerHTML = "";
    //theWeatherForecastDay3Summary.innerHTML = "";
    //theWeatherForecastDay4InformationDisplayTextArea.innerHTML = "";
    //theWeatherForecastDay4Summary.innerHTML = "";
    //theWeatherForecastDay5InformationDisplayTextArea.innerHTML = "";
    //theWeatherForecastDay5Summary.innerHTML = "";
    //theApplicationStatusDisplayTextArea.innerHTML = "";
    //
    //var theForecastArrayThatIsBeingProcessed = "";
    //
    // Establish a date-time-stamp variable.
    var theCurrentDateTimeObject = (new Date());
    var theCurrentDateTimeStamp = theCurrentDateTimeObject.toString();
    var theCurrentMonth = ((theCurrentDateTimeObject.getMonth() + 1)).toString();
    var theCurrentMonthWithLeading0IfNecessary = theCurrentMonth
    var theCurrentDay = (theCurrentDateTimeObject.getDate()).toString();
    var theCurrentDayWithLeading0IfNecessary = theCurrentDay;
    var theCurrentYear = (theCurrentDateTimeObject.getFullYear()).toString();
    var theCurrentHour = (theCurrentDateTimeObject.getHours()).toString();
    var theForecastDateProcessingYear = "";
    var theForecastDateProcessingMonth = "";
    var theForecastDateProcessingDay = "";
    var theForecastDateFormatted = "";
    if (theCurrentMonth.length == 1) {
      theCurrentMonthWithLeading0IfNecessary = "0" + theCurrentMonth;
    }
    if (theCurrentDay.length == 1) {
      theCurrentDayWithLeading0IfNecessary = "0" + theCurrentDay;
    }
    //window.alert(theCurrentDay.length);
    //window.alert(theCurrentMonthWithLeading0IfNecessary + "/" + theCurrentDayWithLeading0IfNecessary + "/" + 
    //  theCurrentYear);
    //window.alert("theCurrentDateTimeStamp: " + theCurrentDateTimeStamp + 
    //  "; theCurrentDay: " + theCurrentDay + "; theCurrentHour: " + theCurrentHour);
    //
    // all-day-variables forecast processing
    var theForecastProcessing = theWeatherInformationFetchResponseDataRawObject;
    // Use a set of individual data-component string variables to hold the various weather sub-array/object data that 
    // each will be converted to a string representation by using the object internal toString functions.
    var theWeatherForecastProcessing = "";
    var theWeatherForecastProcessingMore = "";
    var location = "";
    // Use a compilation string variable to assemble the final weather summary information that will be displayed
    // in the application to the user for the selected forecast.
    //
    // 2 primary data-set elements/collections of weather data are in the response weather object array: "name" for
    // city name and "main" for temperature details. For forecast information...those "name" and "main" items are 
    // organized within "city" and "list.weather" object or/and array data structures because of the larger amount of 
    // listed data.
    //
    // Read the city/location descriptive information.
    // * "city" section of the source data
    location = theForecastProcessing.city.name; 
    //
    data = theForecastProcessing.list;
      // a section of the API data path text that can be abbreviated in each reference
      // * "list" section of the source data: forecast data-set objects/indexes 0, 1, 2, 3, 4 for the days
    //
    // Loop through the 5 days and within each day of data loop through the 3-hour sets of data
    var recordCounterProcess = null;
    var recordCounterProcessRemaining = data.length;
    var recordDayCounter = 0;
    var recordCounterTimeGroup = 0;
    var theCurrentDayInformationHasBeenProcessed = false;
    var another12pmDataElementExists = false;
    var nextTimeRecordForForecastSummary = "12:00:00";
    var theCurrentGroupForecastSummaryIsDone = false;
    var theLastGroupForecastSummaryTimeIsDetermined = false;
    var theForecastSummaryDisplayThatIsBeingProcessed = "";
    var theForecastDisplayTextAreaThatIsBeingProcessed = "";
    var theForecastDayTemperature = "";
    var theForecastDayWind = "";
    var theForecastDayHumidity = "";
    var theForecastDayGraphicsIcon = "";
    var theWeatherForecastDaySummaryTextDate = "";
    var theWeatherForecastDaySummaryTextDetails = ""; 
    // Read and include/compose all of the other applicable interesting weather data elements/details that are in the
    // entire data-set that was sent from the API database.
    for (recordCounterProcess = 0; recordCounterProcess < data.length; recordCounterProcess++) { 
      //
      theWeatherForecastProcessing = "";
      theForecastSummaryDisplayThatIsBeingProcessed = "theWeatherForecastDay" + recordDayCounter + "Summary";
      theForecastDisplayTextAreaThatIsBeingProcessed = "theWeatherForecastDay" + recordDayCounter + 
        "InformationDisplayTextArea";
      //
      theWeatherForecastProcessing = theWeatherForecastProcessing + 
        location + "\n" + 
        "=====================" + "\n" + 
        "WEATHER FORECAST INFORMATION:" + "\n" + 
        "for Date/Time: " + data[recordCounterProcess].dt_txt + "\n" + 
        "---------------------" + "\n" + 
        "Temperature: " + data[recordCounterProcess].main.temp + "F" + "\n" + 
        "Temperature-Minimum: " + data[recordCounterProcess].main.temp_min + "F" + "\n" + 
        "Temperature-Maximum: " + data[recordCounterProcess].main.temp_max + "F" + "\n" + 
        "Description1: " + data[recordCounterProcess].weather[0].main + "\n" + 
        "Description2: " + data[recordCounterProcess].weather[0].description + "\n" + 
        "Clouds: " + data[recordCounterProcess].clouds.all + "%" + "\n" + 
        "Wind: " + data[recordCounterProcess].wind.speed + " MPH" + "\n" + 
        "Visibility: " + data[recordCounterProcess].visibility + " Yards" + "\n" + 
        "Humidity: " + data[recordCounterProcess].main.humidity + "%" + "\n" +
        "Pressure: " + data[recordCounterProcess].main.pressure + " hPa" + "\n" + 
        "Graphics Icon File: " + data[recordCounterProcess].weather[0].icon + "\n" + 
        "Latitude: " + theForecastProcessing.city.coord.lat + "\n" + 
        "Longitude: " + theForecastProcessing.city.coord.lon + "\n" + 
        "=====================" + "\n" + 
        "\n" + 
        "\n";
      //window.alert("data[" + recordCounterProcess + "]" + "\n" + theWeatherForecastProcessing);
      recordCounterTimeGroup = recordCounterTimeGroup + 1;
      recordCounterProcessRemaining = recordCounterProcessRemaining - 1;
      if ((((data[recordCounterProcess].dt_txt).indexOf((theCurrentYear + "-" + theCurrentMonthWithLeading0IfNecessary + 
        "-" + theCurrentDayWithLeading0IfNecessary))) != -1) && (theCurrentDayInformationHasBeenProcessed == false)) {
        // Separate and store any time records that are for the current day; non-forecast information. Add the 
        // additional remaining current-day information (if any) to the end of the "More Information" display 
        // of the current-day section of the application.
        theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
          theWeatherCurrentDayInformationDisplayTextArea.innerHTML + theWeatherForecastProcessing;
        // Highlight the "More Information" field of the Current-Day Information display area.
        highlightTheMoreInformationTextAreaUponUpdate();
        //
        if (((data[recordCounterProcess].dt_txt).substring(11, 18)) == "21:00:00") {
          theCurrentDayInformationHasBeenProcessed = true;
          recordDayCounter = recordDayCounter + 1;
        }
      }
      else {
        if (theCurrentDayInformationHasBeenProcessed == false) {
          theCurrentDayInformationHasBeenProcessed = true;
          recordDayCounter = recordDayCounter + 1;
        }                   
      }  // for all other non-current-day records
      //
      theWeatherForecastProcessingMore = theWeatherForecastProcessingMore + theWeatherForecastProcessing;
      switch (recordDayCounter) {
        case 1:
          theWeatherForecastDay1InformationDisplayTextArea.innerHTML = 
            theWeatherForecastDay1InformationDisplayTextArea.innerHTML + theWeatherForecastProcessing;
          break;
        case 2:
          theWeatherForecastDay2InformationDisplayTextArea.innerHTML = 
            theWeatherForecastDay2InformationDisplayTextArea.innerHTML + theWeatherForecastProcessing;
          break;
        case 3:
          theWeatherForecastDay3InformationDisplayTextArea.innerHTML = 
            theWeatherForecastDay3InformationDisplayTextArea.innerHTML + theWeatherForecastProcessing;
          break;
        case 4:
          theWeatherForecastDay4InformationDisplayTextArea.innerHTML = 
            theWeatherForecastDay4InformationDisplayTextArea.innerHTML + theWeatherForecastProcessing;
          break;
        case 5:
          theWeatherForecastDay5InformationDisplayTextArea.innerHTML = 
            theWeatherForecastDay5InformationDisplayTextArea.innerHTML + theWeatherForecastProcessing;
          break;
      }
      //
      if ((((data[recordCounterProcess].dt_txt).substring(11, 19)) == "12:00:00") || 
        (((data[recordCounterProcess].dt_txt).substring(11, 19)) == nextTimeRecordForForecastSummary)) {
        // ( or if (((data[recordCounterProcess].dt_txt).indexOf("nextTimeRecordForForecastSummary")) >= 0) )
        // Include for display only the 12:00pm time (if any) record of each forecast; or otherwise the record that is
        // closest to 12:00pm if that record is not available. Possible time data: 00:00, 3:00, 6:00, 9:00, 12:00, 15:00,
        // 18:00, 21:00.
        theForecastTime = (((data[recordCounterProcess].dt_txt).substring(11, 16)));
        theForecastDayTemperature = data[recordCounterProcess].main.temp;
        theForecastDayWind = data[recordCounterProcess].wind.speed;
        theForecastDayHumidity = data[recordCounterProcess].main.humidity;
        theForecastDayGraphicsIcon = "&nbsp&nbsp&nbsp&nbsp" + 
          "<img src='http:\\\\openweathermap.org\\img\\wn\\" + data[recordCounterProcess].weather[0].icon + ".png' " + 
          "style='background-color: rgb(209, 240, 255); padding-left: 10px; padding-right: 10px; margin-bottom: -10px; " + 
          "border-radius: 5px;' />";
        // Format the API date (dt_txt) date in MM/DD/YYYY format.
        theForecastDateProcessingYear = (data[recordCounterProcess].dt_txt).substring(0, 4);
        theForecastDateProcessingMonth = (data[recordCounterProcess].dt_txt).substring(5, 7);
        theForecastDateProcessingDay = (data[recordCounterProcess].dt_txt).substring(8, 10);
        if (theForecastDateProcessingMonth.indexOf("0") == 0) {
          theForecastDateProcessingMonth = theForecastDateProcessingMonth.substring(1, 2);
        }
        if (theForecastDateProcessingDay.indexOf("0") == 0) {
          theForecastDateProcessingDay = theForecastDateProcessingDay.substring(1, 2);
        }
        theForecastDateFormatted = theForecastDateProcessingMonth + "/" + theForecastDateProcessingDay + 
          "/" + theForecastDateProcessingYear;
        theWeatherForecastDaySummaryTextDate = "<p style='padding: 0; margin: 0; line-height: 35px'>" + 
          "<span style='font-size: 30px; font-weight: bold'>" + theForecastDateFormatted + "</span>" + 
          theForecastDayGraphicsIcon + "&nbsp&nbsp" + "<span style='color: gray; font-weight: normal'>(" + 
          theForecastTime + ")</span>" + "<br/>" + "</p>";
        theWeatherForecastDaySummaryTextDetails = "<br/>" + "<p>" + 
          "Temp: " + theForecastDayTemperature + " °F" + "<br/>" + 
          "<br/>" + 
          "Wind: " + theForecastDayWind + " MPH" + "<br/>" + 
          "<br/>" + 
          "Humidity: " + theForecastDayHumidity + " %" + "<br/>" + "</p>";
        //
        switch (recordDayCounter) {
          case 1:
            theWeatherForecastDay1Summary.innerHTML = theWeatherForecastDay1Summary.innerHTML + 
              theWeatherForecastDaySummaryTextDate + theWeatherForecastDaySummaryTextDetails;
            break;
          case 2:
            theWeatherForecastDay2Summary.innerHTML = theWeatherForecastDay2Summary.innerHTML + 
              theWeatherForecastDaySummaryTextDate + theWeatherForecastDaySummaryTextDetails;
            break;
          case 3:
            theWeatherForecastDay3Summary.innerHTML = theWeatherForecastDay3Summary.innerHTML + 
              theWeatherForecastDaySummaryTextDate + theWeatherForecastDaySummaryTextDetails;
            break;
          case 4:
            theWeatherForecastDay4Summary.innerHTML = theWeatherForecastDay4Summary.innerHTML + 
              theWeatherForecastDaySummaryTextDate + theWeatherForecastDaySummaryTextDetails;
            break;
          case 5:
            theWeatherForecastDay5Summary.innerHTML = theWeatherForecastDay5Summary.innerHTML + 
              theWeatherForecastDaySummaryTextDate + theWeatherForecastDaySummaryTextDetails;
            break;
        }
        //(theForecastSummaryDisplayThatIsBeingProcessed.toString()).innerHTML = 
        //  (theForecastSummaryDisplayThatIsBeingProcessed.toString()).innerHTML + theWeatherForecastDaySummaryTextDate + 
        //  theWeatherForecastDaySummaryTextDetails;
        //
        if (recordCounterProcessRemaining > 7) {
          another12pmDataElementExists = true;
        }
        else {
          another12pmDataElementExists = false;
        }
        if ((recordDayCounter == 4) && (theLastGroupForecastSummaryTimeIsDetermined == false)) {
          switch (recordCounterProcessRemaining) {
            case 8:
              nextTimeRecordForForecastSummary = "12:00:00";
              theLastGroupForecastSummaryTimeIsDetermined = true;
              break;
            case 7:
              nextTimeRecordForForecastSummary = "9:00:00";
              theLastGroupForecastSummaryTimeIsDetermined = true;
              break;
            case 6:
              nextTimeRecordForForecastSummary = "06:00:00";
              theLastGroupForecastSummaryTimeIsDetermined = true;
              break;
            case 5:
              nextTimeRecordForForecastSummary = "03:00:00";
              theLastGroupForecastSummaryTimeIsDetermined = true;
              break;
            case 4:
              nextTimeRecordForForecastSummary = "00:00:00";
              theLastGroupForecastSummaryTimeIsDetermined = true;
              break;
            case 3:
              nextTimeRecordForForecastSummary = "21:00:00";
              theLastGroupForecastSummaryTimeIsDetermined = true;
              break;
            case 2:
              nextTimeRecordForForecastSummary = "18:00:00";
              theLastGroupForecastSummaryTimeIsDetermined = true;
              break;
            case 1:
              nextTimeRecordForForecastSummary = "15:00:00";
              theLastGroupForecastSummaryTimeIsDetermined = true;
              break;
          }
        }
      }
      ////////
      // a possible future storage feature for re-usage of the data at elsewhere
      // Scan forecast time data elements and enter each into the appropriate day array; and during that processing...
      //theForecastArrayThatIsBeingProcessed = "theWeatherForecastDay" + recordDayCounter + "SummaryData";
      //  // theWeatherForecastDay#SummaryData[]
      //  // recordDayCounter = 0, 1, 2, 3, 4, 5
      // Scan forecast time data elements and enter each into the appropriate day array; and during that processing
      //theForecastArrayThatIsBeingProcessed.push({theCurrentDateTimeStamp, theWeatherForecast, location, theWeatherForecast});
      ////////  
      if (recordCounterTimeGroup > 7) {
        recordCounterTimeGroup = 0;
        recordDayCounter = recordDayCounter + 1;
        theCurrentGroupForecastSummaryIsDone = false;
      }
    }  // to the next record in the set of all of the records that were downloaded from the API service
      // Add the current forecast compilation information to the appropriate forecast text area.
      // Display the processing status of the resulting weather data.
      //theWeatherForecastDay1InformationDisplayTextArea.innerHTML = theWeatherForecastProcessingMore;
      //theWeatherForecastDay2InformationDisplayTextArea.innerHTML = theWeatherForecastProcessing.More;
      //theWeatherForecastDay3InformationDisplayTextArea.innerHTML = theWeatherForecastProcessing.More;
      //theWeatherForecastDay4InformationDisplayTextArea.innerHTML = theWeatherForecastProcessing.More;
      //theWeatherForecastDay5InformationDisplayTextArea.innerHTML = theWeatherForecastProcessing.More;
      //window.alert(theWeatherForecastProcessingMore);
    //
    // POSSIBLE OPTION FOR A FUTURE ENHANCEMENT/EXPANSION:
    // Save the generated weather forecast information to local storage for possible later access/viewing.  
    // localStorage.setItem("TKWeatherTrackerSummaryInformation", JSON.stringify(the5DayForecast));
    // <variable>=JSON.parse(localStorage.getItem("TKWeatherTrackerSummaryInformation"));  // for possible re-loading
  }  // END: "passedInformationType == 'FORECAST'" if statement
}  // END: "anErrorConditionExistsApi == false" if statement
else  {
  theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "\n" + 
    "STATUS: WEATHER API QUERY CANCELLED/ABORTED FROM ERROR";
}  // END: "anErrorConditionExistsApi == false" if-else statement
});  // END: fetch-response data-then
}  // END: "getWeatherInformationApi" function
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//
//
// END: Weather process code
//
//////////////////////////////////////////////////////

