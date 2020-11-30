

// Variables
var currentDay = moment();
console.log(currentDay);


var searchButton = $("#searchButton");

// Current weather API
var apiKey="b00842725560772b42346de28aa7a4f1";



//Variables for Rendering Current Data
 var name = $("<h4>");
 var temperature = $("<h4>");
 var humidity = $("<h4>");
 var windSpeed = $("<h4>");
 //var weatherIcon = 


//var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q={cityname}" + search + "&appid=" + apiKey;
function weatherRequest(){

    // user input of city name
    var city = $("#citySearch").val();


    $.ajax({
      
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey,

    method:"GET",

  }).then(function(response){
  
    console.log(response);
    console.log(response.name);
    console.log(response.main.temp);
    console.log(response.main.humidity);
    console.log(response.wind.speed);
    console.log(response.weather[0].icon);












    
  })

}
weatherRequest();


// Event Listener for the Search Button
searchButton.click( function (event)  {

  var citySearched = $('#citySearch').val();
  console.log(searchButton);
  console.log(citySearched);
  weatherRequest();
});






// THEN i am presented with current and future conditions for that city and that city is added to the search history

// NEXT we need to build the URL for the first API request ("https://")
// Use Current weather API q and API Key

// function makeWeatherRequest() {
//     //Next make the request to the URL with Jquery Ajax

    



//     //Start rendering data to the HTML
//     //THEN get the lat and long out of the response object 
//     //Next call the makeOneCallRequest(lat, long) and pass in the lat and long 
//     )}


// function makeOneCallRequest(lat, lon){
// //then build URL 
// //next make the request to the URL with JQuery ajax

// //can use one call api for 5 day forecast and UVI

// $.ajax( queryUrl ).then( function(response){

//     //Finish rendering data to the HTML

// } );
















// WHEN I view current conditions for that city
// THEN i am presented with the city name date and icon representation of weather conditions the temp the humidity the wind speed and uv index

// WHEN i view the UV index
// THEN ia m presented with a color that indicates whether the conditions are favorable moderate or severe

//WHEN i view future weather conditions for that city 
//THEN i am presented with a 5 day forecast that displays the date an icon of weather conditions the temp and humidity

//WHEN I click on a city in the search history
//THEN i am again presented with current and future conditions for that city

//WHEN i open the weather dashboard
//THEN i am presented with the last searched city forecast


//data attributes on buttons click events
//ombd buttons activity
//additional end point for UV indexes


// Modified jumbotron for header d-flex or .row and .col system 
// Grid Rows 
// Form and button styles for the search input
// LIst group for the side bar buttons
// Card for main content area

//template literal blocks/ make html static and then replace with javascript
