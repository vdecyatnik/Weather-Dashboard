// Variables
var currentDay = moment().format("dddd, MMMM Do YYYY");
console.log(currentDay);

var searchButton = $("#searchButton");

// Current weather API
var apiKey = "b00842725560772b42346de28aa7a4f1";

// //Variables for Rendering Current Data
var container = $("#container");
var name = $("<h4>");
var temperature = $("<h4>");
var humidity = $("<h4>");
var windSpeed = $("<h4>");
var uvIndex = $("<h4>");
var icon = $("<h4>");
var weatherIcon = $("<img>");

//Current Weather APi Response

function weatherRequest() {
  // user input of city name
  var city = $("#citySearch").val();

  $.ajax({
    url:
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey,

    method: "GET",
  }).then(function (response) {
    console.log(response);
     console.log(response.city.name);
     console.log(response.list[0].main.temp);
     console.log(response.list[0].main.humidity);
     console.log(response.list[0].wind.speed);
    console.log(response.list[0].weather[0].icon);

    for (var i=0; i<5;i++){
      
      console.log(response.list[i].weather[0].icon)
      console.log(response.list[i].main.temp)
      console.log(response.list[i].main.humidity)

    }

    var iconcode = response.list[0].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(iconurl);

    var image = $("<img>").attr("src", iconurl);
    $("#currentForecast").append(image);

    //Rendering Current Weather API values to HTML
    var cityEl = $("<h4>").text(response.city.name);
    var currentDay = $("<h4>").text(moment().format("dddd, MMMM Do YYYY"));
    var temperature = $("<h4>").text(
      "Temperature:\n" + response.list[0].main.temp + "\nF"
    );
    var humidity = $("<h4>").text(
      "Humidity:\n" + response.list[0].main.humidity + "\n%"
    );
    var windSpeed = $("<h4>").text(
      "Wind Speed:\n" + response.list[0].wind.speed + "\nmph"
    );

    //Render Future Weather Conditions
    var newDay = moment().add(i, 'days');
    var fiveDay =  newDay.format("dddd, MMMM Do YYYY");
   
    //Append Values to HTML
    $("#currentForecast").append(
      cityEl,
      currentDay,
      temperature,
      humidity,
      windSpeed
    );

    // $("#fiveDay").append(




    // );

    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/uvi?lat=" +
        response.city.coord.lat +
        "&lon=" +
        response.city.coord.lon +
        "&appid=" +
        apiKey,
      method: "GET",
    }).then(function (uvresponse) {
      console.log(uvresponse);
      var uvIndex = $("<h4>").text("UV Index:\n" + uvresponse.value);
      $("#currentForecast").append(uvIndex);
    });
   
   
  });
}
weatherRequest();

// Event Listener for the Search Button
searchButton.click(function (event) {
  var citySearched = $("#citySearch").val();
  console.log(searchButton);
  console.log(citySearched);
  weatherRequest();
});

// THEN i am presented with current and future conditions for that city and that city is added to the search history

// NEXT we need to build the URL for the first API request ("https://")
// Use Current weather API q and API Key

// function makeWeatherRequest() {
// Next make the request to the URL with Jquery Ajax

//Start rendering data to the HTML
//  THEN get the lat and long out of the response object
//  Next call the makeOneCallRequest(lat, long) and pass in the lat and long
//     )}

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
