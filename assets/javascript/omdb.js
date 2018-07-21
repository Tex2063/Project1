    // OMDB SCRIPT THINGS
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

  searchOMDB(movie);