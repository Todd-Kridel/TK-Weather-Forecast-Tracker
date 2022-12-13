

//////////////////////////////////////////////////////
//
// Weather Tracker process code
//
//


//////////////////////////
//
// Global Variables and program-start initialization
//
//


var anErrorConditionExists = false;
var theWeatherCurrentDaySummary = document.getElementById("theWeatherCurrentDaySummary");
theWeatherCurrentDaySummary.textContent = "Selected city weather current-day information will be displayed at here.";
var theWeatherCurrentDayInformationDisplayTextArea = 
  document.getElementById("theWeatherCurrentDayInformationDisplayTextArea");
theWeatherCurrentDayInformationDisplayTextArea.innerHTML = "\n" + 
  "Search for a city by field entry ... or select a pre-set city by button click at below ...to display current " + 
  "weather information and 5-day forecast weather information that is for that city." + "\n" + 
  "\n" + 
  "Selected city weather current-day information will be displayed at here." + "\n" + 
  "\n";
//
var theWeatherForecastDay1InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay1InformationDisplayTextArea");
theWeatherForecastDay1InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>" + "\n";
var theWeatherForecastDay1Summary = document.getElementById("theWeatherForecastDay1Summary");
theWeatherForecastDay1Summary.textContent = "Selected city weather forecast information will be displayed at here." 
  + "\n";
//
var theWeatherForecastDay2InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay2InformationDisplayTextArea");
theWeatherForecastDay2InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>" + "\n";
var theWeatherForecastDay2Summary = document.getElementById("theWeatherForecastDay2Summary");
theWeatherForecastDay2Summary.textContent = "Selected city weather forecast information will be displayed at here." 
  + "\n";
//
var theWeatherForecastDay3InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay3InformationDisplayTextArea");
theWeatherForecastDay3InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>" + "\n";
var theWeatherForecastDay3Summary = document.getElementById("theWeatherForecastDay3Summary");
theWeatherForecastDay3Summary.textContent = "Selected city weather forecast information will be displayed at here." 
  + "\n";
//
var theWeatherForecastDay4InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay4InformationDisplayTextArea");
theWeatherForecastDay4InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>" + "\n";
var theWeatherForecastDay4Summary = document.getElementById("theWeatherForecastDay4Summary");
theWeatherForecastDay4Summary.textContent = "Selected city weather forecast information will be displayed at here." 
  + "\n";
//
var theWeatherForecastDay5InformationDisplayTextArea = 
  document.getElementById("theWeatherForecastDay5InformationDisplayTextArea");
theWeatherForecastDay5InformationDisplayTextArea.innerHTML = "<MORE INFORMATION>" + "\n";
var theWeatherForecastDay5Summary = document.getElementById("theWeatherForecastDay5Summary");
theWeatherForecastDay5Summary.textContent = "Selected city weather forecast information will be displayed at here." 
  + "\n";
//
var theCitySearchField = document.getElementById("theCitySearchField");
theCitySearchField.value = "Enter a weather-search city specification."
var theCitySearchButton = document.getElementById("theCitySearchButton");
var theSearchButtonNoteButton = document.getElementById("theSearchButtonNoteButton");
var theSearchButtonNote = document.getElementById("theSearchButtonNote");
theSearchButtonNote.innerHTML = 
  "Note: Spelling must be correct in order for the search process to be successful. A \",&nbspState\" search " + 
  "element can be entered at the end of a city name ... such as \"Denver\" ... that exists in different states ... " + 
  "but a record will be retrieved only if the specified city has a record in the API \"City\" search database that " + 
  "is being used by this program. The retrieved city might be a default (closest-match) city that is different than " + 
  "the one that was intended for the search. Also/Instead ... a \",&nbspCountry\" search element can also be specified " + 
  "instead of a state specification to search for non-USA cities. For state/country specifications ... at some times " + 
  "a state/country abbreviation or code has to be used instead of a spelled-out state/country name. If a search does " + 
  "not work ... then you can try a new search with the other type of state/country specification.";
var theSearchButtonNoteMode = "hidden";
var SearchByMode = "";
// 
var theSearchDateStamper = new Date();
var theSearchDateStamp = "";
//
var theCitySearchHistoryButtonArea = document.getElementById("theCitySearchHistoryButtonArea");
var theCurrentActiveSearchCityForHistory = {"theCityName" : "", "theStateName" : ""};
var theCurrentActiveHistorySearchListSequenceNumber = 0;
var aNewCitySearchHistoryRecord = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};
theCitySearchHistoryButtonArea = document.getElementById("theCitySearchHistoryButtonArea");
theCitySearchHistoryListNameButton1 = document.getElementById("theCitySearchHistoryListNameButton01");
theCitySearchHistoryListDeleteButton1 = document.getElementById("theCitySearchHistoryListDeleteButton01");
theCitySearchHistoryListNameButton2 = document.getElementById("theCitySearchHistoryListNameButton02");
theCitySearchHistoryListDeleteButton2 = document.getElementById("theCitySearchHistoryListDeleteButton02");
theCitySearchHistoryListNameButton3 = document.getElementById("theCitySearchHistoryListNameButton03");
theCitySearchHistoryListDeleteButton3 = document.getElementById("theCitySearchHistoryListDeleteButton03");
theCitySearchHistoryListNameButton4 = document.getElementById("theCitySearchHistoryListNameButton04");
theCitySearchHistoryListDeleteButton4 = document.getElementById("theCitySearchHistoryListDeleteButton04");
theCitySearchHistoryListNameButton5 = document.getElementById("theCitySearchHistoryListNameButton05");
theCitySearchHistoryListDeleteButton5 = document.getElementById("theCitySearchHistoryListDeleteButton05");
theCitySearchHistoryListNameButton6 = document.getElementById("theCitySearchHistoryListNameButton06");
theCitySearchHistoryListDeleteButton6 = document.getElementById("theCitySearchHistoryListDeleteButton06");
theCitySearchHistoryListNameButton7 = document.getElementById("theCitySearchHistoryListNameButton07");
theCitySearchHistoryListDeleteButton7 = document.getElementById("theCitySearchHistoryListDeleteButton07");
theCitySearchHistoryListNameButton8 = document.getElementById("theCitySearchHistoryListNameButton08");
theCitySearchHistoryListDeleteButton8 = document.getElementById("theCitySearchHistoryListDeleteButton08");
theCitySearchHistoryListNameButton9 = document.getElementById("theCitySearchHistoryListNameButton09");
theCitySearchHistoryListDeleteButton9 = document.getElementById("theCitySearchHistoryListDeleteButton09");
theCitySearchHistoryListNameButton10 = document.getElementById("theCitySearchHistoryListNameButton10");
theCitySearchHistoryListDeleteButton10 = document.getElementById("theCitySearchHistoryListDeleteButton10");
theCitySearchHistoryListNameButton11 = document.getElementById("theCitySearchHistoryListNameButton11");
theCitySearchHistoryListDeleteButton11 = document.getElementById("theCitySearchHistoryListDeleteButton11");
theCitySearchHistoryListNameButton12 = document.getElementById("theCitySearchHistoryListNameButton12");
theCitySearchHistoryListDeleteButton12 = document.getElementById("theCitySearchHistoryListDeleteButton12");
theCitySearchHistoryListNameButton13 = document.getElementById("theCitySearchHistoryListNameButton13");
theCitySearchHistoryListDeleteButton13 = document.getElementById("theCitySearchHistoryListDeleteButton13");
var theCitySearchHistoryList = []; // Initialize a starting template city search history list array variable.
theCitySearchHistoryList[0] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 1
theCitySearchHistoryList[1] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 2
theCitySearchHistoryList[2] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 3
theCitySearchHistoryList[3] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 4
theCitySearchHistoryList[4] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 5
theCitySearchHistoryList[5] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 6
theCitySearchHistoryList[6] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 7
theCitySearchHistoryList[7] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 8
theCitySearchHistoryList[8] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 9
theCitySearchHistoryList[9] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 10
theCitySearchHistoryList[10] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 11
theCitySearchHistoryList[11] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 12
theCitySearchHistoryList[12] = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};  // button 13
var theCurrentCitySearchHistoryListAmountOfActualRecords = 0;
//
var theApplicationStatusDisplayTextArea = document.getElementById("theApplicationStatusDisplayTextArea");
theApplicationStatusDisplayTextArea.innerHTML = "** NEW SESSION **" + "\n";
//
// a possible future enhancement
// Load from local storage the previously-saved array variable that holds the involved selected city weather forecasts
// that were saved by the process of the "Show 5-Day Weather Forecast" button that was clicked by the user.
//var thePreviousSelectedCityWeatherRecord = JSON.parse(localStorage.getItem("TKCityWeatherForecastRecord"));


//////////////////////////
//
// System-Start processes
//
//


// Load any existing search history records from the existing previous city search history list record array variable
// (if any) that is stored in local storage memory and transfer those records to the current/new list record array 
// variable of the current application session.
if (localStorage.getItem("TKWeatherForecastTrackerPreviousSearchHistory") != null) {
  var theCitySearchHistoryListProcessingPrevious = [];
  theCitySearchHistoryListProcessingPrevious = JSON.parse(localStorage.getItem(
  "TKWeatherForecastTrackerPreviousSearchHistory"));
  for (theLoopCounter = 0; theLoopCounter < 13; theLoopCounter++) {
    if (theCitySearchHistoryListProcessingPrevious[theLoopCounter].theCityName != "") {
      theCitySearchHistoryList[theLoopCounter] = theCitySearchHistoryListProcessingPrevious[theLoopCounter];
    }
    else {  // An empty (non-search) record has been encountered; No more previous search history records exist.
      theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + theLoopCounter + 
        " previous city search history record[s] has/have been loaded from local storage memory." + "\n"; 
      break;
    }
  }
}
else {
  // A previous city search history list record array currently does not exist in local storage memory. Therefore save
  // the starting initialization template list array variable to the local storage memory.
  localStorage.setItem("TKWeatherForecastTrackerPreviousSearchHistory", 
    JSON.stringify(theCitySearchHistoryList));
  theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "No previous city " + 
    "search history records existed in local storage memory and therefore an initialization empty list template " + 
    "variable has been created." + "\n";
}
// Determine the length of the current city search history list (if any).
doDetermineTheLengthOfCurrentCitySearchHistoryList();
//window.alert("theCurrentCitySearchHistoryListAmountOfActualRecords at Load: " + 
//  theCurrentCitySearchHistoryListAmountOfActualRecords);
//
// Display the existing (or not) search history records.
doDisplayTheExistingCitySearchHistoryListButtons()


//////////////////////////
//
// Event Listener Functions
//
//


theCitySearchField.addEventListener("click", function() {
if (theCitySearchField.value == "Enter a weather-search city specification.") {
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
// Initialize variable components and their associated display elements.
theWeatherCurrentDayInformationDisplayTextArea.innerHTML = "";
// 
if ((theUserInput == "") || (theUserInput == "Enter a weather-search city specification.")) {
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
    theCitySearchField.value = "";
    theCurrentActiveSearchCityForHistory = {"theCityName" : theUserInput, "theStateName" : "NO_STATE_INPUT"};
    getWeatherInformationApiUrl(theUserInput, "NO_STATE_INPUT", "USA", "NAME", "FIELD");
  }
  else {  // a valid "city, state" search parameter pre-entry
    var theUserInputCity = theUserInput.substring(0, theUserInput.indexOf(","));
    var theUserInputState = theUserInput.substring(((theUserInput.indexOf(",")) + 2), theUserInput.length);
    //window.alert("SEARCH SUBMISSION FOR: " + theUserInputCity + " " + theUserInputState);
    theCitySearchField.value = "";
    theCurrentActiveSearchCityForHistory = {"theCityName" : theUserInputCity, "theStateName" : theUserInputState};
    getWeatherInformationApiUrl(theUserInputCity, theUserInputState, "USA", "NAME", "FIELD");
  }
}
else {
  // window.alert(
  //   "INPUT ERROR: The search city name (and state name if included) can contain only letter characters and " + 
  //   "additionally (if applicable) a '.' character and a ' ' (space) character (and 1 ',' character for a state " + 
  //   "specification) ... and the submitted Search field specification cannot be blank. Correct the input and submit " + 
  //   "a new search." + "\n"
  //   );
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = theWeatherCurrentDayInformationDisplayTextArea.innerHTML + 
    "\n" + 
    "INPUT ERROR: The search city name (and state name if included) can contain only letter characters and " + 
    "additionally (if applicable) a '.' character and a ' ' (space) character (and 1 ',' character for a state " + 
    "specification) ... and the submitted Search field specification cannot be blank. Correct the input and submit " + 
    "a new search." + "\n" + 
    "\n";
  // Highlight the "More Information" field of the Current-Day Information display area.
  doHighlightTheMoreInformationTextAreaUponUpdate();
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


// Add an event listener that is for the webpage div/section container that contains the City Search history buttons 
// and the corresponding Delete buttons of the city search history record button section.
theCitySearchHistoryButtonArea.addEventListener("click", function(event) {
var theCitySearchHistoryButtonAreaClickTargetObject = null;
var theIndexSequenceNumberProcessing = "";
theCitySearchHistoryButtonAreaClickTargetObject = event.target;
var theArrayLength = (theCitySearchHistoryButtonAreaClickTargetObject.id).length;
theCurrentActiveHistorySearchListSequenceNumber = 0;
theIndexSequenceNumberProcessing = (theCitySearchHistoryButtonAreaClickTargetObject.id).substring(
  (theArrayLength - 2), theArrayLength);
// Determine the history record list sequence number of the involved list record button that was clicked...and process 
// accordingly depending about which button was clicked and about if the involved button has any city details that can 
// actually be processed. If a city name button was clicked then re-issue the involved previous city search (if any). 
// If a city search history record Delete button was clicked...then delete/clear the involved corresponding city 
// search history record (if any).
if (theIndexSequenceNumberProcessing.indexOf("0") == 0) {  
  // If the button index number has a leading 0 then remove the 0.
  theCurrentActiveHistorySearchListSequenceNumber = theIndexSequenceNumberProcessing[1];
}
else {
  theCurrentActiveHistorySearchListSequenceNumber = theIndexSequenceNumberProcessing;
}
//
theCurrentActiveSearchCityForHistory.theCityName = theCitySearchHistoryList[
  (theCurrentActiveHistorySearchListSequenceNumber - 1)].theCityName;
theCurrentActiveSearchCityForHistory.theStateName = theCitySearchHistoryList[(
  theCurrentActiveHistorySearchListSequenceNumber - 1)].theStateName;
//
if (((theCitySearchHistoryButtonAreaClickTargetObject.id).indexOf("Name") != -1) && 
  (theCitySearchHistoryList[(theCurrentActiveHistorySearchListSequenceNumber - 1)].theCityName != "")) {
  // This button is a city name button that actually contains a city search history record that has processable city 
  // details.
  //
  // Clear the "More Information" display area of the current-day weather information section and then submit the 
  // previous city search information that was selected.
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = "";
  //
  //window.alert("theCitySearchHistoryButtonAreaClickTargetObject.id: " + 
  //theCitySearchHistoryButtonAreaClickTargetObject.id + "\n" + 
  //"theCurrentActiveHistorySearchListSequenceNumber button: " + 
  //theCurrentActiveHistorySearchListSequenceNumber + "\n" + 
  //"for history city Search: " + theCurrentActiveSearchCityForHistory.theCityName);
  //
  getWeatherInformationApiUrl(
    theCurrentActiveSearchCityForHistory.theCityName, theCurrentActiveSearchCityForHistory.theStateName, 
      "USA", "NAME", "FIELD");
}
else if (theCitySearchHistoryList[(theCurrentActiveHistorySearchListSequenceNumber - 1)].theCityName == "") {
  //window.alert("The clicked city search history button currently does not contain a search history record.");
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = theWeatherCurrentDayInformationDisplayTextArea.innerHTML + 
    "The clicked city search history button currently does not contain a search history record." + "\n" + 
    "\n";
  // Highlight the "More Information" field of the Current-Day Information display area.
  doHighlightTheMoreInformationTextAreaUponUpdate();
}
//
if (((theCitySearchHistoryButtonAreaClickTargetObject.id).indexOf("Delete") != -1) && 
(theCitySearchHistoryList[(theCurrentActiveHistorySearchListSequenceNumber - 1)].theCityName != "")) {
  // This button is a search record Delete button that is for an actual processable with-details city search history
  // record; Empty search history record city name buttons have a button label that begins with the text "NO #".
  //
  //
  //window.alert("theCitySearchHistoryButtonAreaClickTargetObject.id: " + 
  //theCitySearchHistoryButtonAreaClickTargetObject.id + "\n" + 
  //"theCurrentActiveHistorySearchListSequenceNumber button: " + 
  //theCurrentActiveHistorySearchListSequenceNumber + "\n" + 
  //"for history city Delete: " + theCurrentActiveSearchCityForHistory.theCityName);
  //
  // Delete/Clear city search records that are selected for deletion by the user by using the Delete button of the
  // involved search history button section row.
  doDeleteExistingCitySearchFromSearchHistory();
}
else if (theCitySearchHistoryList[(theCurrentActiveHistorySearchListSequenceNumber - 1)].theCityName == "") {
  //window.alert("The clicked city search history button currently does not contain a search history record.");
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = theWeatherCurrentDayInformationDisplayTextArea.innerHTML + 
    "The clicked city search history button currently does not contain a search history record." + "\n" + 
    "\n";
  // Highlight the "More Information" field of the Current-Day Information display area.
  doHighlightTheMoreInformationTextAreaUponUpdate();
}
})


// Note: This per-button event-listener section was not needed because of the button-div-container event listener
// function that is at above.
// Add event listeners for each of the City Search history buttons and the corresponding Delete buttons of the city 
// search history record button section.
// theCitySearchHistoryListNameButton1.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton1.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton2.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton2.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton3.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton3.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton4.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton4.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton5.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton5.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton6.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton6.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton7.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton7.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton8.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton8.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton9.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton9.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton10.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton10.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton11.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton11.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton12.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton12.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListNameButton13.addEventListener("click", function () {
//   //
// });
// theCitySearchHistoryListDeleteButton13.addEventListener("click", function () {
//   //
// });


//////////////////////////
//
// General Functions
//
//


function doHighlightTheMoreInformationTextAreaUponUpdate() {
// Highlight the "More Information" field of the Current-Day Information display area.
window.scrollTo(0, 0);
theWeatherCurrentDayInformationDisplayTextArea.style.border = "5px solid rgb(255, 255, 100)";
setTimeout(function () {
  theWeatherCurrentDayInformationDisplayTextArea.style.border = "2px solid lightgray";
}, 3000);
}


function doDetermineTheLengthOfCurrentCitySearchHistoryList() {
// Determine the length of the current city search history list; i.e., the amount of records that actually have city 
// search details; The array list structure is always initialized to and kept at 13 record/button positions.
theCurrentCitySearchHistoryListAmountOfActualRecords = 0;
for (var theLoopCounter = 12; theLoopCounter >= 0; theLoopCounter--) {
  if ((theCitySearchHistoryList[theLoopCounter].theCityName) != "") {
    theCurrentCitySearchHistoryListAmountOfActualRecords = theCurrentCitySearchHistoryListAmountOfActualRecords + 1;
    //window.alert("search history city detected during list record amount count process: " + 
    //  (theCitySearchHistoryList[theLoopCounter].theCityName));
  }
}
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
  "A new city search history list length of actual records was calculated after a process for record loading: " + 
  theCurrentCitySearchHistoryListAmountOfActualRecords + " records." + "\n";
// Display/Re-Display the calculated/re-calculated details of the current city search history list to the console.log 
// system for possible diagnostic inspection viewing.
//console.log(theCitySearchHistoryList);
}


function doDisplayTheExistingCitySearchHistoryListButtons() {
// Display the buttons of the existing city search history records...i.e. the actual records that contain city search 
// details. The search list (button) numbers are offset by 1 from their corresponding array element position because 
// the array starts at index position 0. At after when the new arrangement of the history record buttons is displayed...
// then display the new arrangement of the empty non-record list positions (if any)...if the list of records currently 
// is not full at 13 total button positions that start at sequence number 1.
var theLastProcessedListIndexOfNonFullList = -1;
//window.alert("theCurrentCitySearchHistoryListAmountOfActualRecords for Display: " + 
//  theCurrentCitySearchHistoryListAmountOfActualRecords);
//
if (theCurrentCitySearchHistoryListAmountOfActualRecords > 0) {
  for (var theLoopCounter = 0; theLoopCounter < theCurrentCitySearchHistoryListAmountOfActualRecords; theLoopCounter++) {
    var theButtonNameProcessing = "";
    theButtonNameProcessing = ((theCitySearchHistoryList[theLoopCounter]).theCityName);
    if ((theCitySearchHistoryList[theLoopCounter].theStateName != "NO_STATE_INPUT") && 
      (theCitySearchHistoryList[theLoopCounter].theStateName != "")) {  // A state was specified.
      theButtonNameProcessing = theButtonNameProcessing + ",";
    }
    theButtonNameProcessing = theButtonNameProcessing + " " + (theCitySearchHistoryList[theLoopCounter].theStateName) + 
      "<br/>" + "(from " + (theCitySearchHistoryList[theLoopCounter].theSearchDate) + ")";
    // Add the dynamic processed button label text.
    switch (theLoopCounter) {
      case 0:
        theCitySearchHistoryListNameButton1.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton1.innerHTML = "Delete";
        break;
      case 1:
        theCitySearchHistoryListNameButton2.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton2.innerHTML = "Delete";
        break;
      case 2:
        theCitySearchHistoryListNameButton3.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton3.innerHTML = "Delete";
        break;
      case 3:
        theCitySearchHistoryListNameButton4.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton4.innerHTML = "Delete";
        break;
      case 4:
        theCitySearchHistoryListNameButton5.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton5.innerHTML = "Delete";
        break;
      case 5:
        theCitySearchHistoryListNameButton6.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton6.innerHTML = "Delete";
        break;
      case 6:
        theCitySearchHistoryListNameButton7.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton7.innerHTML = "Delete";
        break;
      case 7:
        theCitySearchHistoryListNameButton8.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton8.innerHTML = "Delete";
        break;
      case 8:
        theCitySearchHistoryListNameButton9.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton9.innerHTML = "Delete";
        break;
      case 9:
        theCitySearchHistoryListNameButton10.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton10.innerHTML = "Delete";
        break;
      case 10:
        theCitySearchHistoryListNameButton11.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton11.innerHTML = "Delete";
        break;
      case 11:
        theCitySearchHistoryListNameButton12.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton12.innerHTML = "Delete";
        break;
      case 12:
        theCitySearchHistoryListNameButton13.innerHTML = theButtonNameProcessing;
        theCitySearchHistoryListDeleteButton13.innerHTML = "Delete";
        break;
      case -1:
      case 13:
        theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "ERROR: " + 
        "A non-valid search history button index reference occurred during a record Display process." + "\n";
        break;
    }
    // Increment the counter of the search history record indexes that are processed for display.
    theLastProcessedListIndexOfNonFullList = theLastProcessedListIndexOfNonFullList + 1;
  }
  // Display the buttons of any existing city search history record positions that currently are empty/deleted. The
  // search list (button) numbers are offset by 1 from their corresponding array element position because the array 
  // starts at index position 0. The list/arrangement of history list buttons always has a total of 13 buttons and 
  // starts at sequence number 1.
  //
  //window.alert("city search history non-records for button display: " + (13 - (
  //  theLastProcessedListIndexOfNonFullList + 1)));
  //
  for (var theLoopCounter = (theLastProcessedListIndexOfNonFullList + 1); theLoopCounter < 13; 
    theLoopCounter++) {
      // Note: A button label of "NO #<position> SEARCH HISTORY RECORD YET" has an empty "" value in the city search 
      // history list array variable that is referenced/tested for several current-amount full/empty tests in the 
      // program of the application.
      //
      switch (theLoopCounter) {
        case 0:
          theCitySearchHistoryListNameButton1.innerHTML = "NO #1 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton1.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 1:
          theCitySearchHistoryListNameButton2.innerHTML = "NO #2 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton2.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 2:
          theCitySearchHistoryListNameButton3.innerHTML = "NO #3 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton3.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 3:
          theCitySearchHistoryListNameButton4.innerHTML = "NO #4 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton4.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 4:
          theCitySearchHistoryListNameButton5.innerHTML = "NO #5 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton5.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 5:
          theCitySearchHistoryListNameButton6.innerHTML = "NO #6 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton6.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 6:
          theCitySearchHistoryListNameButton7.innerHTML = "NO #7 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton7.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 7:
          theCitySearchHistoryListNameButton8.innerHTML = "NO #8 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton8.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 8:
          theCitySearchHistoryListNameButton9.innerHTML = "NO #9 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton9.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 9:
          theCitySearchHistoryListNameButton10.innerHTML = "NO #10 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton10.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 10:
          theCitySearchHistoryListNameButton11.innerHTML = "NO #11 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton11.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 11:
          theCitySearchHistoryListNameButton12.innerHTML = "NO #12 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton12.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case 12:
          theCitySearchHistoryListNameButton13.innerHTML = "NO #13 SEARCH HISTORY<br/>RECORD YET";
          theCitySearchHistoryListDeleteButton13.innerHTML = "&nbsp<br/>&nbsp";
          break;
        case -1:
        case 13:
          theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "ERROR: " + 
          "A non-valid search history button index reference occurred during a record Display process." + "\n";
          break;
      };
    }
  }
  if (theCurrentCitySearchHistoryListAmountOfActualRecords == 0) { 
    theCitySearchHistoryListNameButton1.innerHTML = "NO #1 SEARCH HISTORY<br/>RECORD YET";
    theCitySearchHistoryListDeleteButton1.innerHTML = "&nbsp<br/>&nbsp";
  }
  // Display/Re-Display the re-organized search history list details of the current city search history list to the 
  // console.log system for possible diagnostic inspection viewing.
  //console.log(theCitySearchHistoryList);
}


function doAddNewCitySearchRecordToSearchHistoryList() {
var aNewCitySearchHistoryRecordShouldBeAdded = true;
// If a new validated search has occurred...record the search in the history if the search is not already part of the 
// current history records.
theSearchDateStamp = (((theSearchDateStamper.getMonth() + 1)).toString()) + "/" + 
  ((theSearchDateStamper.getDate()).toString()) + "/" + ((theSearchDateStamper.getFullYear()).toString());
aNewCitySearchHistoryRecord = {"theCityName" : theCurrentActiveSearchCityForHistory.theCityName, "theStateName" : 
theCurrentActiveSearchCityForHistory.theStateName, "theSearchDate" : theSearchDateStamp};
var theCityProcessing = aNewCitySearchHistoryRecord.theCityName;
var theStateProcessing = aNewCitySearchHistoryRecord.theStateName;
var theDuplicateIndex = "";
//
// Search through the existing history list/array (if any) and check about if any current history records exist for 
// the same city and state combination that the current for-addition search record is for. If an existing record is 
// not found then add the new search record to the list; otherwise skip the record-add processing.
if (theCurrentCitySearchHistoryListAmountOfActualRecords > 0) {
  // Do a for-loop to check for an existing record.
  // If found, skip the add record; Otherwise add the record at the end of the array.
  //
  //window.alert("a test for a duplicate city search history list record for " + theCityProcessing + " " + 
  //theStateProcessing);
  //
  for (var theLoopCounter = 0; theLoopCounter < theCurrentCitySearchHistoryListAmountOfActualRecords; 
    theLoopCounter++) {
    if ((theCitySearchHistoryList[theLoopCounter].theCityName == theCityProcessing) && (
      (theCitySearchHistoryList[theLoopCounter].theStateName == theStateProcessing))) {
      aNewCitySearchHistoryRecordShouldBeAdded = false;
      theDuplicateIndex = theLoopCounter;
      break;
    }
  }
  if (aNewCitySearchHistoryRecordShouldBeAdded == false) {
    //window.alert("A duplicate city search history list record was detected: " + 
    //  (theCitySearchHistoryList[theDuplicateIndex].theCityName) + " " + 
    //  (theCitySearchHistoryList[theDuplicateIndex].theStateName));
    theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
      "A new city search history record was NOT added for this search because a history record already exists for " + 
      "the city." + "\n";
  }
  else {
    //window.alert("A duplicate city search history list record was not detected.");
    // aNewCitySearchHistoryRecordShouldBeAdded = true;
  }
  if (aNewCitySearchHistoryRecordShouldBeAdded == true) {
    // Check about if the current city search history list is full at 13 records. If so...then remove the last/oldest 
    // record so a new search record can be added at the top/beginning of the list (array and button list).
    if (theCurrentCitySearchHistoryListAmountOfActualRecords == 13) {
      // Delete the last/oldest history record that is now at position 13...soon to be 14...in the list that has 
      // maximum of 13 records.
      theCurrentCitySearchHistoryListAmountOfActualRecords = theCurrentCitySearchHistoryListAmountOfActualRecords - 1;
      theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
        "The city search history list currently is full and a new search record has to be added. Therefore the " + 
        "last/oldest search record has been removed from the list." + "\n";
    }
    // Add the new city search record at the top (most-recent) record position of the list.
    theCitySearchHistoryList.unshift(aNewCitySearchHistoryRecord);
    // Delete the last/oldest history record that is now at position 14 in the list that has maximum of 13 records.
    theCitySearchHistoryList.pop();
  }
}
else {  // The search history record list length is 0.
  // Add the new search history record to the beginning record position of the history list.
  theCitySearchHistoryList[0] = aNewCitySearchHistoryRecord;
}
if (aNewCitySearchHistoryRecordShouldBeAdded == true) {
  // Store the current city search history list to local storage memory.
  localStorage.setItem("TKWeatherForecastTrackerPreviousSearchHistory", 
    JSON.stringify(theCitySearchHistoryList));
  // Increment the length of the history list.
  theCurrentCitySearchHistoryListAmountOfActualRecords = theCurrentCitySearchHistoryListAmountOfActualRecords + 1;
  //window.alert("theCurrentCitySearchHistoryListAmountOfActualRecords: " + 
  //  theCurrentCitySearchHistoryListAmountOfActualRecords);
  //
  // Display the new search history list.
  doDisplayTheExistingCitySearchHistoryListButtons();
}
}


function doDeleteExistingCitySearchFromSearchHistory() {
// Delete/Clear city search records that are selected for deletion by the user by using the Delete button of the
// involved search history button section row. Then Display the new arrangement of the search history list. The
// search list (button) numbers are offset by 1 from their corresponding array element position because the array 
// starts at index position 0.
//
//window.alert("theCurrentActiveHistorySearchListSequenceNumber for Delete: " + 
//  theCurrentActiveHistorySearchListSequenceNumber + "\n" + 
//  "theCitySearchHistoryList[deleted index/button]: " + 
//  theCitySearchHistoryList[(theCurrentActiveHistorySearchListSequenceNumber - 1)].theCityName + "\n" + 
//  "theCitySearchHistoryList.length: " + theCitySearchHistoryList.length);
//
switch (theCurrentActiveHistorySearchListSequenceNumber) {
  case "1":
    theCitySearchHistoryList.splice(0, 1);
    break;
  case "2":
    theCitySearchHistoryList.splice(1, 1);
    break;
  case "3":
    theCitySearchHistoryList.splice(2, 1);
    break;
  case "4":
    theCitySearchHistoryList.splice(3, 1);
    break;
  case "5":
    theCitySearchHistoryList.splice(4, 1);
    break;
  case "6":
    theCitySearchHistoryList.splice(5, 1);
    break;
  case "7":
    theCitySearchHistoryList.splice(6, 1);
    break;
  case "8":
    theCitySearchHistoryList.splice(7, 1);
    break;
  case "9":
    theCitySearchHistoryList.splice(8, 1);
    break;
  case "10":
    theCitySearchHistoryList.splice(9, 1);
    break;
  case "11":
    theCitySearchHistoryList.splice(10, 1);
    break;
  case "12":
    theCitySearchHistoryList.splice(11, 1);
    break;
  case "13":
    theCitySearchHistoryList.splice(12, 1);
    break;
  case "0":
  case "14":
    theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "ERROR: " + 
      "A non-valid search history button index reference occurred during a record Delete process." + "\n";
    break;
}
// Decrement the length of the history list.
theCurrentCitySearchHistoryListAmountOfActualRecords = theCurrentCitySearchHistoryListAmountOfActualRecords - 1;
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
  "An existing city search history record was deleted/cleared upon request by clicking the corresponding Delete " + 
  "button (#" + theCurrentActiveHistorySearchListSequenceNumber + ")...resulting with a new history list record " + 
  "total of " + theCurrentCitySearchHistoryListAmountOfActualRecords + " record[s]." + "\n";
//window.alert("theCurrentCitySearchHistoryListAmountOfActualRecords after Delete: " + 
//  theCurrentCitySearchHistoryListAmountOfActualRecords);
//
if (theCurrentActiveHistorySearchListSequenceNumber >= 1) {
//  window.alert("theCitySearchHistoryList: new content of deleted index: " + theCitySearchHistoryList[
//    (theCurrentActiveHistorySearchListSequenceNumber - 1)].theCityName + "\n" + 
//    "theCitySearchHistoryList.length: " + theCitySearchHistoryList.length);
}
else {
//  window.alert("theCitySearchHistoryList: new content of deleted index: NOTHING (NON-EXISTENT)" + "\n" + 
//    "theCitySearchHistoryList.length: " + theCitySearchHistoryList.length);
}
// Add a new insertion/replacement blank search history list record in place of the record that was deleted. Add the 
// new blank city search record at the bottom (oldest) record position of the list. For that end-of-list processing...
// do not use the regular "doAddNewCitySearchRecordToSearchHistoryList" function that adds actual search records to 
// the top/beginning of the array and button list.
aNewCitySearchHistoryRecord = {"theCityName" : "", "theStateName" : "", "theSearchDate" : ""};
// Add the blank record but do not increment the count amount of the actual records.
theCitySearchHistoryList.push(aNewCitySearchHistoryRecord); 
// Store the new current city search history list to local storage memory.
localStorage.setItem("TKWeatherForecastTrackerPreviousSearchHistory", 
  JSON.stringify(theCitySearchHistoryList));
// Display the new arrangement of search history records/buttons.
doDisplayTheExistingCitySearchHistoryListButtons();
}


function getWeatherInformationApiUrl(passedCity, passedState, passedLocationType, passedSearchByType, 
  passedSearchByMode) {
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
//
//window.alert("WEATHER API VALIDATED REQUEST FOR " + passedCity + " " + passedState);
//window.alert(passedCity + " " + passedState + " " + passedLocationType + " " + passedSearchByType);
//
SearchByMode = passedSearchByMode;
var selectedCity = "";
//
if (passedSearchByMode == "BUTTON") {
  theCitySearchField.value = "";
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = "";
  window.scrollTo(0, 0);
}
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
    "Because the city name \"Denver\" was specified without a state specification ... then a default weather search of " + 
    "the primary Denver Colorado record is provided (which might be a city that is different than the one that was " + 
    "intended for the search)." + "\n" + 
    "\n";
  selectedCity = selectedCity + "Denver";
  selectedState = selectedState + ", Colorado";
  // Highlight the "More Information" field of the Current-Day Information display area.
  doHighlightTheMoreInformationTextAreaUponUpdate();
}
else if (passedState == "NO_STATE_INPUT") {
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
    theWeatherCurrentDayInformationDisplayTextArea.innerHTML + "\n" + 
    "Because the city name \"" + passedCity + "\" was specified without a state specification ... then a default " + 
    "weather search of the primary city record that has that name in the \"City\" database of the API service is " + 
    "provided (which might be a city that is different than the one that was intended for the search)." + "\n" + 
    "\n";
  selectedCity = selectedCity + passedCity;
  selectedState = "";
  // Highlight the "More Information" field of the Current-Day Information display area.
  doHighlightTheMoreInformationTextAreaUponUpdate();
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
  // Cities can be searched for in the OpenWeather database system by using the city name search parameter *IF* the 
  // involved city record *IS* on-record in the City database of the OpenWeather database; Otherwise the involved 
  // city has to be searched for by using the latitude and longitude coordinates search parameters...and in that case 
  // a exact-same-name city record is returned *ONLY IF* that city is on-record for the involved coordinates or 
  // otherwise a different-name city/town/county record will be returned.
  //
  // selectedCity = "&lat=<latitude_coordinate>&lon=<longitude_coordinate>" 
  //
  // *DENVER CITIES THAT ARE IN THE OPENWEATHER CITY DATABASE (FOR WHICH THE CITY NAME SEARCH CAN FUNCTION);
  // OTHER DENVER CITIES (IN THE NEXT SECTION) HAVE TO BE SEARCHED FOR BY LATITUDE AND LONGITUDE COORDINATES:
  // *Denver, Colorado
  // *Denver, Iowa
  // *Denver, North Carolina
  // *Denver, Pennsylvania
  // *Denver City, Texas
  // *Denver, Australia (AU)
  // *New Denver, Canada (CA)
  //
  theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
    theWeatherCurrentDayInformationDisplayTextArea.innerHTML + "\n" + 
  "The weather information of the selected city was actually searched for in the external third-party API data service " + 
  "based on latitude and longitude location coordinates instead of by city name because currently the \"City\" " + 
  "database of the service does not yet contain a name record that is for that city. The coordinates-based search " + 
  "~might~ result with weather information that is for a city/town that is at nearby to the location coordinates " + 
  "that are being used for the search ... if the coordinates cannot be exactly matched to a database record that is " + 
  "for or related to the specified city." + "\n" + 
  "\n";
  // Highlight the "More Information" field of the Current-Day Information display area.
  doHighlightTheMoreInformationTextAreaUponUpdate();
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
// Get the weather data from the API service.
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
  "** PROCESSING IN-PROGRESS **";
theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "\n" + 
  "Weather Query Submission for Current-Day Information URL: " + requestWeatherCurrentDayUrl + "\n";
//window.alert(requestWeatherCurrentDayUrl);
//
getWeatherInformationApi(requestWeatherCurrentDayUrl, "CURRENT");  // 
//
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
//
getWeatherInformationApi(requestWeatherForecastUrl, "FORECAST");
//
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
}) .then(function(data) {
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
  // for processing the display text at ONLY AFTER when the data is available
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
    theWeatherCurrentDaySummary.innerHTML = "";
    var theWeatherCurrentDaySummaryTextDetails = "";
    var theWeatherCurrentDaySummaryTextCityDate = "";
    var theCurrentDayTemperature = "";
    var theCurrentDayWind = "";
    var theCurrentDayHumidity = "";
    var theCurrentDayGraphicsIcon = "";
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
    var colorCodeEveningDarkBlue = "rgb(69, 97, 126)";
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
      "=============" + "\n" + 
      "CURRENT WEATHER INFORMATION:" + "\n" + 
      "for Date/Time: " + theCurrentDateTimeStamp + "\n" + 
      "-------------" + "\n" + 
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
      "=============" + "\n" + 
      "\n";
    //
    // Display the weather summary information.
    theWeatherCurrentDaySummary.innerHTML = "** PROCESSING SUMMARY INFORMATION **";
    // Isolate and display the weather graphics icon of the day weather information.
    //theWeatherCurrentDayIcon.innerHTML = "<img src='https:\\\\openweathermap.org\\img\\wn\\" + 
    //  data.weather[0].icon + ".png' />";
      // <img src='https:\\openweathermap.org\img\wn\<icon file name>' />
      // file name from: (data.weather[0].icon);
    //window.alert("<img src='https:\\\\openweathermap.org\\img\\wn\\" + data.weather[0].icon + ".png' />");
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
    "<img src='https:\\\\openweathermap.org\\img\\wn\\" + data.weather[0].icon + ".png' " + 
    "style='background-color: ";
    if ((data.weather[0].icon).indexOf("d") != -1) {  // daytime icon indicator
    theCurrentDayGraphicsIcon = theCurrentDayGraphicsIcon + "rgb(209, 240, 255)";  // daytime sky color
    }
    else if ((data.weather[0].icon).indexOf("n") != -1) {  // nighttime icon indicator
    theCurrentDayGraphicsIcon = theCurrentDayGraphicsIcon + "rgb(69, 97, 126)";  // nighttime sky color
    }
    // if ((theCurrentHour > 5) && (theCurrentHour < 18)) {  // daytime times
    //   theCurrentDayGraphicsIcon = theCurrentDayGraphicsIcon + "rgb(209, 240, 255)";  // daytime sky color
    // }
    // else if ((theCurrentHour < 6) || (theCurrentHour > 17)) {  // nighttime times
    //   theCurrentDayGraphicsIcon = theCurrentDayGraphicsIcon + "rgb(69, 97, 126)";  // nighttime sky color
    // }
    theCurrentDayGraphicsIcon = theCurrentDayGraphicsIcon + "; padding-left: 10px; padding-right: 10px; " + 
    "margin-bottom: -10px; border-radius: 5px;' />" + "&nbsp&nbsp";
    theWeatherCurrentDaySummaryTextCityDate = "<p style='padding: 0; margin: 0; line-height: 50px'>" + 
      "<span style='font-size: 40px; font-weight: bolder'>" + location + " (" + 
      theCurrentMonth + "/" + theCurrentDay + "/" + theCurrentYear + ")</span>" + theCurrentDayGraphicsIcon + 
      "&nbsp&nbsp" + "<span style='color: gray; font-weight: normal'>(&nbspAt&nbspSearch&nbspTime&nbsp)</span>" + 
      "<br/>" + "</p>";
    theWeatherCurrentDaySummaryTextDetails = "<br/>" + "<p>" + "<span style='font-size: 20px; font-weight: bolder; " + 
      "line-height: 22px; padding: 0px; margin: 0px'>" + 
      "Temp: " + theCurrentDayTemperature + " °F" + "<br/>" + 
      "<br/>" + 
      "Wind: " + theCurrentDayWind + " MPH" + "<br/>" + 
      "<br/>" + 
      "Humidity: " + theCurrentDayHumidity + " %" + "<br/>" + "</span>" + "</p>";
    //
    theWeatherCurrentDaySummary.innerHTML = theWeatherCurrentDaySummaryTextCityDate +
      theWeatherCurrentDaySummaryTextDetails;
    // Add the city search to the search history list information and the corresponding button area if the search is a 
    // new search that is submitted from the "Search For A City" field and that is not yet in the history information 
    // and button area. Do not add search history for any city searches that are submitted by using any of the pre-set 
    // city buttons of the application that are located at the bottom section of the application screen (those buttons 
    // that use the "BUTTON" submission mode)...or any of the city search history buttons that are located at the left 
    // side of the application window.
    if (SearchByMode != "BUTTON") {
      doAddNewCitySearchRecordToSearchHistoryList();
    }
    // Highlight the "More Information" field of the Current-Day Information display area.
    doHighlightTheMoreInformationTextAreaUponUpdate();
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
    theWeatherForecastDay1InformationDisplayTextArea.innerHTML = "";
    theWeatherForecastDay1Summary.innerHTML = "";
    theWeatherForecastDay2InformationDisplayTextArea.innerHTML = "";
    theWeatherForecastDay2Summary.innerHTML = "";
    theWeatherForecastDay3InformationDisplayTextArea.innerHTML = "";
    theWeatherForecastDay3Summary.innerHTML = "";
    theWeatherForecastDay4InformationDisplayTextArea.innerHTML = "";
    theWeatherForecastDay4Summary.innerHTML = "";
    theWeatherForecastDay5InformationDisplayTextArea.innerHTML = "";
    theWeatherForecastDay5Summary.innerHTML = "";
    var theWeatherForecastDay5Summaries = ["", "", "", "", "", "", "", ""];
    var theForecastArrayThatIsBeingProcessed = "";
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
    var colorCodeDaytimeLightBlue = "rgb(209, 240, 255)";
    var colorCodeEveningDarkBlue = "rgb(69, 97, 126)";
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
    var recordDayCounter = 1;
    var recordCounterTimeGroup = 1;
    var theCurrentDayInformationHasBeenProcessed = false;
    var another12pmDataElementExists = false;
    var nextTimeRecordForForecastSummary = "12:00:00";
    var theDay5ForecastSummaryIsCompleted = false;
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
    //
    // Read and include/compose all of the other applicable interesting weather data elements/details that are in the
    // entire data-set that was sent from the API database.
    //
    for (recordCounterProcess = 0; recordCounterProcess < data.length; recordCounterProcess++) { 
      //
      theWeatherForecastProcessing = "";
      theForecastSummaryDisplayThatIsBeingProcessed = "theWeatherForecastDay" + recordDayCounter + "Summary";
      theForecastDisplayTextAreaThatIsBeingProcessed = "theWeatherForecastDay" + recordDayCounter + 
        "InformationDisplayTextArea";
      //
      theWeatherForecastProcessing = theWeatherForecastProcessing + 
        location + "\n" + 
        "=============" + "\n" + 
        "WEATHER FORECAST INFORMATION:" + "\n" + 
        "for Date/Time: " + data[recordCounterProcess].dt_txt + "\n" + 
        "-------------" + "\n" + 
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
        "=============" + "\n" + 
        "\n";
      //window.alert("data[" + recordCounterProcess + "]" + "\n" + theWeatherForecastProcessing);
      //
      // Acknowledge the record processing that is occurring; done for other variables that are not 
      // auto- incremented/decremented by the for-loop process.
      recordCounterProcessRemaining = recordCounterProcessRemaining - 1;
      //
      // Determine the starting time-group (1 through 8) of the starting record based on the time-group time-stamp of 
      // the 1st record of the received API data.
      if (recordCounterProcess == 0) {
        switch ((data[recordCounterProcess].dt_txt).substring(11, 19)) {
          case "00:00:00":
            recordCounterTimeGroup = 1;
            break;
          case "03:00:00":
            recordCounterTimeGroup = 2;
            break;
          case "06:00:00":
            recordCounterTimeGroup = 3;
            break;
          case "09:00:00":
            recordCounterTimeGroup = 4;
            break;
          case "12:00:00":
            recordCounterTimeGroup = 5;
            break;
          case "15:00:00":
            recordCounterTimeGroup = 6;
            break;
          case "18:00:00":
            recordCounterTimeGroup = 7;
            break;
          case "21:00:00":
            recordCounterTimeGroup = 8;
            break;
          default:
            theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + 
              "ERROR: NON-EXPECTED WEATHER TIME RECORD THAT CANNOT BE PROCESSED: Not of the possible time data: " + 
              "00:00, 03:00, 06:00, 09:00, 12:00, 15:00, 18:00, 21:00." + "\n";
            break;
        }
      }
      //
      // Check about if there are any residual current-day time-group records in the forecast data-set.
      if ((((data[recordCounterProcess].dt_txt).indexOf((theCurrentYear + "-" + theCurrentMonthWithLeading0IfNecessary + 
        "-" + theCurrentDayWithLeading0IfNecessary))) != -1) && (theCurrentDayInformationHasBeenProcessed == false)) {
        // Separate and store any time records that are for the current day; non-forecast information. Add the 
        // additional remaining current-day information (if any) to the end of the "More Information" display 
        // of the current-day section of the application.
        recordDayCounter = 0;  // for non-forecast record display/process position; not 1 through 5
        theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
          theWeatherCurrentDayInformationDisplayTextArea.innerHTML + theWeatherForecastProcessing;
        // Highlight the "More Information" field of the Current-Day Information display area.
        doHighlightTheMoreInformationTextAreaUponUpdate();
        //
        if ((((data[recordCounterProcess].dt_txt).substring(11, 19)) == "21:00:00") || 
        (data[recordCounterProcess].dt_txt).indexOf("21:00:00") != -1) {  // the last record of the day
          theCurrentDayInformationHasBeenProcessed = true;
          recordDayCounter = 1;
          recordCounterTimeGroup = 1;
        }
      }
      else {
        //
        // for all other non-current-day records...i.e., forecast/future day records
        //
        if (theCurrentDayInformationHasBeenProcessed == false) {
          // There were not any residual current-day records at the beginning of the forecast data-set.
          theCurrentDayInformationHasBeenProcessed = true;
        }
        //
        // Compile for future display (at the end of the parse process loop) a listing of all of the forecast 
        // information that is being processed.
        //
        theWeatherForecastProcessingMore = theWeatherForecastProcessingMore + theWeatherForecastProcessing;
        //
        // Compile-Display the on-going being-processed weather forecast information in the appropriate forecast day
        // (1 through 5) display area...depending on the record day sequence number that is being processed.
        //
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
          default:
            theWeatherForecastDay5InformationDisplayTextArea.innerHTML = 
              theWeatherForecastDay5InformationDisplayTextArea.innerHTML + 
              "--------" + "\n" + 
              "EXTRA DAY DATA FROM THE API SOURCE:" + "\n" + 
              "--------" + "\n" + 
              "\n" + 
              theWeatherForecastProcessing;
            break;
        }
        // Preferably obtain forecast summary records that are for the 12:00 noon time of weather data for all of the 5 
        // forecast days...but at many times the 5th day and occasionally the 1st day do/can have partial record sets 
        // depending on the time at which the forecast information is generated and because the free 5-day weather API 
        // service provides only 40 sets of 3-hour-span weather data. If the 12:00pm weather data is not available for 
        // the 5th day forecast...then attempt to find a data-set time-span that is at close to 12:00pm; otherwise...if 
        // that desired data is not obtained by the last set/day of data...then the parse process will accept any of the 
        // time-span weather data that is available (a good-enough forecast).
        //
        ////////
        if (  // START: complex "data[recordCounterProcess].dt_txt" if-clause
          //
          (
          ((((data[recordCounterProcess].dt_txt).substring(11, 19)) == "12:00:00") || 
          (((data[recordCounterProcess].dt_txt).substring(11, 19)) == nextTimeRecordForForecastSummary))
          ) 
          //          
          || // or day 5 (last forecast day) and there might not be a 12:00pm data-set or a preferred next-best 
          // alternative
          (
          (recordDayCounter == 5)  // Accept and process every 3-hour time-span weather data record that is available.
            // Add each processed Day 5 summary to a separate array temporary storage location for eventual assessment.
          )
          ) {  // END: "data[recordCounterProcess].dt_txt" if-clause for passage to the set of next sections
          ////////
          var theForecastTime = "";
          var theForecastSummaryIconBackgroundColor = "daytime";
          // ( or if (((data[recordCounterProcess].dt_txt).indexOf("nextTimeRecordForForecastSummary")) >= 0) )
          // Include for display only the 12:00pm time (if any) record of each forecast; or otherwise the record that is
          // closest to 12:00pm if that record is not available. Possible time data: 00:00, 03:00, 06:00, 09:00, 12:00, 
          // 15:00, 18:00, 21:00.
          if (((data[recordCounterProcess].dt_txt).substring(11, 19)) == "12:00:00") {
            theForecastTime = (((data[recordCounterProcess].dt_txt).substring(11, 19))) + "pm";
            theForecastSummaryIconBackgroundColor = "daytime";
            }
          else if ((((data[recordCounterProcess].dt_txt).substring(11, 19)) == nextTimeRecordForForecastSummary) || 
            (recordDayCounter == 5)) {
            theForecastTime = nextTimeRecordForForecastSummary;
            if (recordDayCounter == 5) {
              theForecastTime = (data[recordCounterProcess].dt_txt).substring(11, 19);
            }
            if ((theForecastTime == "12:00:00") || (theForecastTime == "15:00:00")) {
              theForecastTime = theForecastTime + "pm";
              theForecastSummaryIconBackgroundColor = "daytime";
            } 
            else if ((theForecastTime == "18:00:00") || (theForecastTime == "21:00:00")) {
              theForecastTime = theForecastTime + "pm";
              theForecastSummaryIconBackgroundColor = "nighttime";
            }
            else if ((theForecastTime == "06:00:00") || (theForecastTime == "09:00:00")) {
              theForecastTime = theForecastTime + "am";
              theForecastSummaryIconBackgroundColor = "daytime";
            }
            else {  // if ((theForecastTime == "00:00:00") || (theForecastTime == "03:00:00")) {
              theForecastTime = theForecastTime + "am";
              theForecastSummaryIconBackgroundColor = "nighttime";
            }
          }
          theForecastDayTemperature = data[recordCounterProcess].main.temp;
          theForecastDayWind = data[recordCounterProcess].wind.speed;
          theForecastDayHumidity = data[recordCounterProcess].main.humidity;
          theForecastDayGraphicsIcon = "&nbsp&nbsp&nbsp&nbsp" + 
          "<img src='https:\\\\openweathermap.org\\img\\wn\\" + data[recordCounterProcess].weather[0].icon + ".png' " + 
          "style='background-color: ";
          if (theForecastSummaryIconBackgroundColor == "daytime") {  // daytime indicator
            theForecastDayGraphicsIcon = theForecastDayGraphicsIcon + "rgb(209, 240, 255)";  // daytime sky color
          }
          else if (theForecastSummaryIconBackgroundColor == "nighttime") {  // nighttime indicator
            theForecastDayGraphicsIcon = theForecastDayGraphicsIcon + "rgb(69, 97, 126)";  // nighttime sky color
          }
          // if ((theCurrentHour > 5) && (theCurrentHour < 18)) {  // daytime times
          //   theForecastDayGraphicsIcon = theForecastDayGraphicsIcon + "rgb(209, 240, 255)";  // daytime sky color
          // }
          // else if ((theCurrentHour < 6) || (theCurrentHour > 17)) {  // nighttime times
          //   theForecastDayGraphicsIcon = theForecastDayGraphicsIcon + "rgb(69, 97, 126)";  // nighttime sky color
          // }
          theForecastDayGraphicsIcon = theForecastDayGraphicsIcon + "; padding-left: 10px; padding-right: 10px; margin-bottom: " + 
            "-10px; border-radius: 5px;' />";
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
          // Display the involved being-processed forecast summary information in the appropriate day section...
          // depending on the current record day sequence number that is being processed.
          //
          switch (recordDayCounter) {
            case 1:
              theWeatherForecastDay1Summary.innerHTML = theWeatherForecastDaySummaryTextDate + 
                theWeatherForecastDaySummaryTextDetails;
              break;
            case 2:
              theWeatherForecastDay2Summary.innerHTML = theWeatherForecastDaySummaryTextDate + 
                theWeatherForecastDaySummaryTextDetails;
              break;
            case 3:
              theWeatherForecastDay3Summary.innerHTML = theWeatherForecastDaySummaryTextDate + 
                theWeatherForecastDaySummaryTextDetails;
              break;
            case 4:
              theWeatherForecastDay4Summary.innerHTML = theWeatherForecastDaySummaryTextDate + 
                theWeatherForecastDaySummaryTextDetails;
              break;
            case 5:
              switch ((data[recordCounterProcess].dt_txt).substring(11, 19)) {
                case "00:00:00":
                  theWeatherForecastDay5Summaries[0] = theWeatherForecastDaySummaryTextDate + 
                    theWeatherForecastDaySummaryTextDetails;
                break;
                case "03:00:00":
                  theWeatherForecastDay5Summaries[1] = theWeatherForecastDaySummaryTextDate + 
                    theWeatherForecastDaySummaryTextDetails;
                break;
                case "06:00:00":
                  theWeatherForecastDay5Summaries[2] = theWeatherForecastDaySummaryTextDate + 
                    theWeatherForecastDaySummaryTextDetails;
                break;
                case "09:00:00":
                  theWeatherForecastDay5Summaries[3] = theWeatherForecastDaySummaryTextDate + 
                    theWeatherForecastDaySummaryTextDetails;
                break;
                case "12:00:00":
                  theWeatherForecastDay5Summaries[4] = theWeatherForecastDaySummaryTextDate + 
                    theWeatherForecastDaySummaryTextDetails;
                break;
                case "15:00:00":
                  theWeatherForecastDay5Summaries[5] = theWeatherForecastDaySummaryTextDate + 
                    theWeatherForecastDaySummaryTextDetails;
                break;
                case "18:00:00":
                  theWeatherForecastDay5Summaries[6] = theWeatherForecastDaySummaryTextDate + 
                    theWeatherForecastDaySummaryTextDetails;
                break;
                case "21:00:00":
                  theWeatherForecastDay5Summaries[7] = theWeatherForecastDaySummaryTextDate + 
                    theWeatherForecastDaySummaryTextDetails;
                break;
              }
            break;
          }
          //
          // for an alternative dynamic data-access idea
          //(theForecastSummaryDisplayThatIsBeingProcessed.toString()).innerHTML =   // or perhaps use '.valueOf()'
          //  (theForecastSummaryDisplayThatIsBeingProcessed.toString()).innerHTML + theWeatherForecastDaySummaryTextDate + 
          //  theWeatherForecastDaySummaryTextDetails;
          //
          if (recordCounterProcessRemaining > 7) {
            another12pmDataElementExists = true;
          }
          else {
            another12pmDataElementExists = false;
          }
          //
          // Determine the possible desired ending record that is best (among the available options) for the summary of 
          // the Day 5 which will probably have a partial data-set of forecast information (because the current day 
          // usually has at least 1 residual record of forecast/future weather information in the forecast data-set). This 
          // determination of ending Day 5 record is completed depending on the current data-set record sequence number 
          // that is being processed and the "12:00:00" weather time of the forecast record that currently is being 
          // processed. This determination comes into concern when there are only 8 records (a full day of records) 
          // remaining to be processed.
          //
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
        } //
        // Acknowledge the record processing that occurred; done for other variables that are not 
        // auto- incremented/decremented by the for-loop process.
        recordCounterTimeGroup = recordCounterTimeGroup + 1;
        //
        // Determine about if the processing of a full day of records has been completed.
        if (recordCounterTimeGroup > 8) {  // at the end of the 8 weather-time records per day
          recordCounterTimeGroup = 1;
          recordDayCounter = recordDayCounter + 1;
          theCurrentGroupForecastSummaryIsDone = false;
        }             
      }  // END: else statement that is for the check about residual current-date records that are in the forecast 
         // data-set
    }  // END: "recordCounterProcess" for-loop for record parsing; to move to the next record in the set of all of 
      // the records that were downloaded from the API service
    //
    // Evaluate and further process all of the processed Day 5 Summaries to determine about the one that is the best 
    // one for the overall summary of the weather of the day...among the possible choices (which is most likely a 
    // data-set that does not include a complete set of time-span options...including a desired 12:00pm span). 
    // Include for display the 12:00pm time (if any) record of the forecast; or otherwise the record that is
    // closest to 12:00pm if that record is not available. Possible time data: 00:00, 03:00, 06:00, 09:00, 12:00, 
    // 15:00, 18:00, 21:00.
    var theWeatherForecastDay5SummaryProcessing = "";
    if (theWeatherForecastDay5Summaries[0] != "") {  // Start by accepting 00:00 (12:00am) if it is available.
      theWeatherForecastDay5SummaryProcessing = theWeatherForecastDay5Summaries[0];
    }
    if (theWeatherForecastDay5Summaries[7] != "") {  // Then accept 21:00 (9:00pm) if it is available.
      theWeatherForecastDay5SummaryProcessing = theWeatherForecastDay5Summaries[7];
    }
    if (theWeatherForecastDay5Summaries[1] != "") {  // Then accept 03:00 (3:00am) if it is available.
      theWeatherForecastDay5SummaryProcessing = theWeatherForecastDay5Summaries[1];
    }
    if (theWeatherForecastDay5Summaries[6] != "") {  // Then accept 18:00 (6:00pm) if it is available.
      theWeatherForecastDay5SummaryProcessing = theWeatherForecastDay5Summaries[6];
    }
    if (theWeatherForecastDay5Summaries[2] != "") {  // Then accept 06:00 (6:00am) if it is available.
      theWeatherForecastDay5SummaryProcessing = theWeatherForecastDay5Summaries[2];
    }
    if (theWeatherForecastDay5Summaries[5] != "") {  // Then accept 15:00 (3:00pm) if it is available.
      theWeatherForecastDay5SummaryProcessing = theWeatherForecastDay5Summaries[5];
    }
    if (theWeatherForecastDay5Summaries[3] != "") {  // Then accept 09:00 (9:00am) if it is available.
      theWeatherForecastDay5SummaryProcessing = theWeatherForecastDay5Summaries[3];
    }
    if (theWeatherForecastDay5Summaries[4] != "") {  // Then accept 12:00 (12:00pm) if it is available.
      theWeatherForecastDay5SummaryProcessing = theWeatherForecastDay5Summaries[4];
    }          
    theWeatherForecastDay5Summary.innerHTML = theWeatherForecastDay5SummaryProcessing;
    //
    // Add to the current-day "more" information section the forecast compilation information for possible future
    // review and copying.
    theWeatherForecastProcessingMore = 
    "+++++++++++++" + "\n" + 
    "ALL 5-DAY FORECAST INFORMATION (COMBINED)" + "\n" + 
    "+++++++++++++" + "\n" + 
    "\n" + 
    theWeatherForecastProcessingMore;
    //
    theWeatherCurrentDayInformationDisplayTextArea.innerHTML = 
      theWeatherCurrentDayInformationDisplayTextArea.innerHTML + theWeatherForecastProcessingMore;
    //
    ////////
    // a possible future storage feature for re-usage of the data at elsewhere
    // Scan forecast time data elements and enter each into the appropriate day array; and during that processing...
    //theForecastArrayThatIsBeingProcessed = "theWeatherForecastDay" + recordDayCounter + "SummaryData";
    //  // theWeatherForecastDay#SummaryData[]
    //  // recordDayCounter = 0, 1, 2, 3, 4, 5
    // Scan forecast time data elements and enter each into the appropriate day array; and during that processing
    //theForecastArrayThatIsBeingProcessed.push({theCurrentDateTimeStamp, theWeatherForecast, location, theWeatherForecast});
    ////////
    //
    // POSSIBLE OPTION FOR A FUTURE ENHANCEMENT/EXPANSION:
    // Save the generated weather forecast information to local storage for possible later access/viewing.  
    // localStorage.setItem("TKWeatherTrackerSummaryInformation", JSON.stringify(the5DayForecast));
    // <variable>=JSON.parse(localStorage.getItem("TKWeatherTrackerSummaryInformation"));  // for possible re-loading
    //
  }  // END: "passedInformationType == 'FORECAST'" if statement
}  // END: "anErrorConditionExistsApi == false" if statement
else  {
  theApplicationStatusDisplayTextArea.innerHTML = theApplicationStatusDisplayTextArea.innerHTML + "\n" + 
    "STATUS: WEATHER API QUERY CANCELLED/ABORTED FROM ERROR" + "\n";
}  // END: "anErrorConditionExistsApi == false" if-else statement
});  // END: fetch-response data-then
}  // END: "getWeatherInformationApi" function
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//
//
// END: Weather Tracker process code
//
//////////////////////////////////////////////////////

