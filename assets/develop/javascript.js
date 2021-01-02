// Variables
var currentDay = moment().format("MMM Do YY");
console.log(currentDay);

var searchButton = $("#searchButton");

//Searched Cities Array
var savedCities = [];
// Current weather API
var apiKey = "b00842725560772b42346de28aa7a4f1";

//Variables for Rendering Current Data
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

    var iconcode = response.list[0].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(iconurl);

    var image = $("<img>").attr("src", iconurl);
    $("#currentForecast").append(image);

    //Rendering Current Weather API values to HTML
    var header = $("<h2>").text("Current Forecast");
    var cityEl = $("<h4>").text(response.city.name);
    var currentDay = $("<h4>").text(moment().format("MMM Do YY"));
    var temperature = $("<h4>").text(
      "Temperature:\n" + response.list[0].main.temp + "\nF"
    );
    var humidity = $("<h4>").text(
      "Humidity:\n" + response.list[0].main.humidity + "\n%"
    );
    var windSpeed = $("<h4>").text(
      "Wind Speed:\n" + response.list[0].wind.speed + "\nmph"
    );
    for (var i = 1; i < 6; i++) {
      var newDay = moment().add(i, "d");
      var fiveDay = newDay.format("MMM Do YY");
      var iconfiveDay = response.list[i].weather[0].icon;
      console.log(iconfiveDay);
      var iconurlTwo =
        "http://openweathermap.org/img/w/" + iconfiveDay + ".png";

      var imageTwo = $("<img>").attr("src", iconurlTwo);
      $("#fiveDayForecast").append(imageTwo);

      //Append fiveday Forecast
      var newDiv = $("<div></div>"); //append to five day row

      var fiveDate = $("<h4>").text(fiveDay);
      var fiveTemp = $("<h4>").text(
        "Temperature:" + response.list[i].main.temp + "\nF"
      );
      var fiveHum = $("<h4>").text(
        "Humidity:" + response.list[i].main.humidity + "%"
      );

      $(".fiveDay").append(newDiv);
      newDiv.append(imageTwo, fiveDate, fiveTemp, fiveHum);

      console.log(newDay);
      console.log(response.list[i].main.temp);
      console.log(response.list[i].main.humidity);
    }

    //Append Values to HTML
    $("#currentForecast").append(
      header,
      cityEl,
      currentDay,
      temperature,
      humidity,
      windSpeed
    );

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


function renderButtons() {


$("#searchedCities").empty();



for (var i=0; i<savedCities.length;i++){
$("#searchedCities").append("<button>" + savedCities[i] +  "</button>")

}










}
console.log(savedCities);



// Event Listener for the Search Button
searchButton.click(function (event) {
   var newCity = $("#citySearch").val();
  console.log(searchButton);
  console.log(citySearch);
  weatherRequest();

//var newCity = $("#citySearch").val();
savedCities.push(newCity);
console.log(newCity);


  renderButtons();

  // localStorage.setItem("cities", JSON.stringify(citySearch));
  // console.log(localStorage);
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
