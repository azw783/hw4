// "page load" event handler
$(function() {
  let apiKey = "2494eee6ef144034bddc00a26df3f57d";
  let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    let world1 = data.results[0]
    console.log(world1)
    // article 1
    jQuery("#toptitle1").text(data.results[0].title)
    jQuery("#toptitle1").attr("href", data.results[0].url)
    jQuery("#byline1").text(data.results[0].byline)
    jQuery("#articlesummary1").text(data.results[0].abstract)
    // article 2
    jQuery("#toptitle2").text(data.results[1].title)
    jQuery("#toptitle2").attr("href", data.results[1].url)
    jQuery("#byline2").text(data.results[1].byline)
    jQuery("#articlesummary2").text(data.results[1].abstract)
    // article 3
    jQuery("#toptitle3").text(data.results[2].title)
    jQuery("#toptitle3").attr("href", data.results[2].url)
    jQuery("#byline3").text(data.results[2].byline)
    jQuery("#articlesummary3").text(data.results[2].abstract)
    // article 4
    jQuery("#toptitle4").text(data.results[3].title)
    jQuery("#toptitle4").attr("href", data.results[3].url)
    jQuery("#byline4").text(data.results[3].byline)
    jQuery("#articlesummary4").text(data.results[3].abstract)

  });

});

$(function() {
  let apiKey = "dc9d561572ec44319a276ca0512f595e";
  let url = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    let sports1 = data.articles[0]
    console.log(sports1)
    // // sports article 1
    jQuery("#sportspic1").attr("src", data.articles[0].urlToImage)
    jQuery("#sports1").text(data.articles[0].title)
    jQuery("#sports1").attr("href", data.articles[0].url)
    jQuery("#sportsby1").text(data.articles[0].author)
    jQuery("#sportssummary1").text(data.articles[0].description)
    // // sports article 2
    jQuery("#sportspic2").attr("src", data.articles[1].urlToImage)
    jQuery("#sports2").text(data.articles[1].title)
    jQuery("#sports2").attr("href", data.articles[1].url)
    jQuery("#sportsby2").text(data.articles[1].author)
    jQuery("#sportssummary2").text(data.articles[1].description)
    // // sports article 3
    jQuery("#sportspic3").attr("src", data.articles[2].urlToImage)
    jQuery("#sports3").text(data.articles[2].title)
    jQuery("#sports3").attr("href", data.articles[2].url)
    jQuery("#sportsby3").text(data.articles[2].author)
    jQuery("#sportssummary3").text(data.articles[2].description)

  });

});

$(function() {
  let apiKey = "dc9d561572ec44319a276ca0512f595e";
  let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    let usnews1 = data.articles[0]
    console.log(usnews1)
    // // sports article 1
    jQuery("#uspic1").attr("src", data.articles[0].urlToImage)
    jQuery("#ustop1").text(data.articles[0].title)
    jQuery("#ustop1").attr("href", data.articles[0].url)
    jQuery("#usby1").text(data.articles[0].author)
    jQuery("#ustoparticle1").text(data.articles[0].description)
    // // sports article 2
    jQuery("#uspic2").attr("src", data.articles[1].urlToImage)
    jQuery("#ustop2").text(data.articles[1].title)
    jQuery("#ustop2").attr("href", data.articles[1].url)
    jQuery("#usby2").text(data.articles[1].author)
    jQuery("#ustoparticle2").text(data.articles[1].description)
    // // sports article 3
    jQuery("#uspic3").attr("src", data.articles[2].urlToImage)
    jQuery("#ustop3").text(data.articles[2].title)
    jQuery("#ustop3").attr("href", data.articles[2].url)
    jQuery("#usby3").text(data.articles[2].author)
    jQuery("#ustoparticle3").text(data.articles[2].description)

  });

});

// have a look at what "data" is in the browser console
//   $(".row").empty();
//   for (let i=0; i<data.results.length; i++) {
//     let movie = data.results[i];
//     let html = '<div class="col-4">';
//     html = html + '<div class="card">';
//     html = html + '<img class="card-img-top" src="' + movie.multimedia.src + '">';
//     html = html + '<div class="card-body">';
//     html = html + '<h4 class="card-title">' + movie.display_title + '</h4>';
//     html = html + '<p class="card-text">' + movie.summary_short + '</p>';
//     html = html + '</div></div></div>';
//     $(".row").append(html);
//   }
//   $(".row").fadeIn(2000);

// This section is for Weather


let updateWidget = function(data) {

  console.log("Got weather data: ", data)

  let time1 = data.list[3].dt_txt
  console.log("the date is: ", time1)
  jQuery("#time1").text(time1)

  let time2 = data.list[11].dt_txt
  console.log("the date is: ", time2)
  jQuery("#time2").text(time2)

  let time3 = data.list[19].dt_txt
  console.log("the date is: ", time3)
  jQuery("#time3").text(time3)

  let temp1 = Math.round(data.list[3].main.temp)
  console.log("the temp is: ", temp1)
  jQuery("#temp1").text(temp1 + "°F")

  let temp2 = Math.round(data.list[11].main.temp)
  console.log("the temp is: ", temp2)
  jQuery("#temp2").text(temp2 + "°F")

  let temp3 = Math.round(data.list[19].main.temp)
  console.log("the temp is: ", temp3)
  jQuery("#temp3").text(temp3 + "°F")

  let location = data.city.name
  console.log("the location is: ", location)
  $("#weather-location").text("Weather in " + location )

  let icon1 = data.list[3].weather[0].icon
  console.log(icon1)
  $("#iconpic1").attr("src", "http://openweathermap.org/img/w/" + icon1 + ".png")

  let icon2 = data.list[11].weather[0].icon
  console.log(icon2)
  $("#iconpic2").attr("src", "http://openweathermap.org/img/w/" + icon2 + ".png")

  let icon3 = data.list[19].weather[0].icon
  console.log(icon3)
  $("#iconpic3").attr("src", "http://openweathermap.org/img/w/" + icon3 + ".png")

  let weathercond1 = data.list[3].weather[0].main
  console.log(weathercond1)
  $("#weathercond1").text(weathercond1)

  let weathercond2 = data.list[11].weather[0].main
  console.log(weathercond2)
  $("#weathercond2").text(weathercond2)

  let weathercond3 = data.list[19].weather[0].main
  console.log(weathercond3)
  $("#weathercond3").text(weathercond3)

  // YOUR CODE GOES HERE

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.
}


let getWeather = function(info) {
  console.log(info)
  let latitude = info.coords.latitude.toFixed(4)
  let longitude = info.coords.longitude.toFixed(4)
  // let latitude = '48.8566';
  // let longitude = '2.3522';
  let apiKey = '9806186a433dcb0443e013c6fa81e665'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/forecast?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);

}

// $("#get_forecast").on("click", getWeather)

let handlePosition = function(event) {
  console.log("Starting handlePosition...")
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
  console.log("Ending handlePosition...")
}

let link = jQuery("#get_forecast")
link.on("click", handlePosition);

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
