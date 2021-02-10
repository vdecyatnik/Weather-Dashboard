var container = $("#container");
var name = $("<h4>");
var temperature = $("<h4>");
var humidity = $("<h4>");
var windSpeed = $("<h4>");
var uvIndex = $("<h4>");
var icon = $("<h4>");
var weatherIcon = $("<img>");

var searchButton = $("#searchButton");
var apiKey = "b00842725560772b42346de28aa7a4f1";
var currentDay = moment().format("MMM Do YY");

function weatherRequest(city) {
  // user input of city name

  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey,

    method: "GET",
  }).then(function (response) {
    var iconcode = response.list[0].weather[0].icon;
    var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";

    $("#currentForecast").empty();

    //Rendering Current Weather API values to HTML

    var image = $("<img>").attr("src", iconurl);
    $("#currentForecast").append(image);
    var header = $("<h2>").text("Current Forecast");
    var cityEl = $("<h4>").text(response.city.name);
    var currentDay = $("<h4>").text(moment().format("MMM Do YY"));
    var temperature = $("<h4>").text(
      "Temperature:\n" + response.list[0].main.temp + "F"
    );
    var humidity = $("<h4>").text(
      "Humidity:\n" + response.list[0].main.humidity + "%"
    );
    var windSpeed = $("<h4>").text(
      "Wind Speed:\n" + response.list[0].wind.speed + "\nmph"
    );

    $(".fiveDay").empty();
    for (var i = 1; i < 6; i++) {
      var newDay = moment().add(i, "d");
      var fiveDay = newDay.format("MMM Do YY");
      var iconfiveDay = response.list[i].weather[0].icon;
      // console.log(iconfiveDay);
      var iconurlTwo =
        "https://openweathermap.org/img/w/" + iconfiveDay + ".png";

      var imageTwo = $("<img>").attr("src", iconurlTwo);
      $("#fiveDayForecast").append(imageTwo);

      //Append fiveday Forecast
      var newDiv = $(`<div id= "fiveDay" class="card p-2  m-1" </div>`);
      var headerTwo = $("<h2>").text("Five Day Forecast");
      var fiveDate = $("<h4>").text(fiveDay);
      var fiveTemp = $("<h4>").text(
        "Temp:\n" + response.list[i].main.temp + "\nF"
      );
      var fiveHum = $("<h4>").text(
        "Humidity:\n" + response.list[i].main.humidity + "%"
      );
      
      $(".fiveDay").append(newDiv);
      newDiv.append(imageTwo, fiveDate, fiveTemp, fiveHum);
    }

    $("#fiveDayForecast").append(headerTwo);
    //Append Values to HTML
    $("#currentForecast").append(
      header,
      image,
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
      // console.log(uvresponse);
      var uvIndex = $("<h4>").text("UV Index:\n" + uvresponse.value);
      $("#currentForecast").append(uvIndex);

      if(uvresponse.value > 8 ) {
        uvIndex.addClass("text-danger");
        
      }else if (uvresponse.value > 6) {
        uvIndex.css("font-color", "orange");
      }else if (uvresponse.value > 3 ) {
        uvIndex.addClass("text-warning");
      }else {
        uvIndex.addClass("text-success");
      }
    });
  });
}

function renderButtons() {
  $("#searchedCities").empty();

  var localArray = JSON.parse(localStorage.getItem("cities"));
  for (var i = 0; i < localArray.length; i++) {
    var a = $("<button>");

    a.addClass("btn btn-outline-dark citybutton ");

    a.attr("data-city", localArray[i]);

    a.text(localArray[i]);

    $("#searchedCities").append(a);
  }
}
if (localStorage.getItem("cities") === null) {
  localStorage.setItem("cities", JSON.stringify([]));
}

$("#searchedCities").on("click", "[data-city]", function (event) {
  weatherRequest($(this).attr("data-city"));
  console.log(event);
});


renderButtons();

// Event Listener for the Search Button
searchButton.click(function (event) {
  event.preventDefault();
  var newCity = $("#citySearch").val();

  weatherRequest(newCity);

  var localArray = JSON.parse(localStorage.getItem("cities"));
  if (!localArray.includes(newCity)) {
    localArray.push(newCity);
  }
  localStorage.setItem("cities", JSON.stringify(localArray));
  renderButtons();
});
