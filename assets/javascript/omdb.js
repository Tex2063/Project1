    // variables
var movie = "";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // Get reference to existing tbody element, create a new table row element
    var tBody = $("tbody");
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(response.Title);
    var plotTd = $("<td>").text(response.Plot);
    var ratingTd = $("<td>").text(response.Ratings);
    // Append the newly created table data to the table row
    tRow.append(titleTd, plotTd, ratingTd);
    // Append the table row to the table body
    tBody.append(tRow);
});