
$(document).ready(function () {
  console.log("connected");



  // return API link with searched item
  function getUrlOmdb(search) {
    //return search
    return "https://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=9170740"
    

  }
//Establish the API connection and get values.
  function callOmdb(search) {
    $.ajax({
      url: getUrlOmdb(search),
      method: "GET"
    }).then(function (response) {
      handleResponse(response);


  //fire if there is API connection issue
     })
    //  .error(function (request, response, error) {
    //   console.log(error);
    // })

  }


  function getInput(input) {

    $("#theButton").on("click", function (event) {
      event.preventDefault();
      input = $("#movie-input").val().trim();
      console.log(input);
      callOmdb(input);
      //console.log(getUrlOmdb(input)); 

    });
  }

  function handleResponse(response) {
console.log(response);
    var rottenDiv; 
    var poster = response.Poster;
    var moviePlot=response.Plot;
    var movieName =response.Title;
    var rating = response.Ratings[0].Value; 
    

    //append movie poster
    $(".moviePoster").append("<img src=" + poster +">"+"</img>");


    //add movie title
    $("#movieName").text(movieName);

    //add movie plot 
    $("#moviePlot").text(moviePlot);

    $("#movieRating").text("Ratings: "+ rating);
    console.log(rating);
  }

getInput(); 

});














    /*// OMDB SCRIPT THINGS
    // variables
var movie = "";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

var createRow = function(data) {
    // Get reference to existing tbody element, create a new table row element
    var tBody = $("tbody");
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(data.Title);
    var plotTd = $("<td>").text(data.Plot);
    var ratingTd = $("<td>").text(data.Rating);
    // Append the newly created table data to the table row
    tRow.append(titleTd, plotTd, ratingTd);
    // Append the table row to the table body
    tBody.append(tRow);
  };

  // The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to createRow
  var searchOMDB = function(movie) {
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      createRow(response);
    });
  };

  $("#button").on("click", function() {
    alert("I've been clicked!");
  });
  */

