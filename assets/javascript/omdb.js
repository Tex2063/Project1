
//$(document).ready(function () {
  console.log("connected");

  var initialName = "ice age"; 
  var search = initialName; 
  // return API link with searched item
  function getUrlOmdb(search) {

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

  
    //if the button is invoked, get text pass it to callOmdb
    $("#theButton").on("click", function (event) {
      // event.preventDefault();
      input = $("#movie-input").val().trim();
      if (input == "") {
        alert("please enter a movie name");
      }
      else {
        //console.log(input);
        callOmdb(input);
        //console.log(getUrlOmdb(input)); 
      }

    });
 

  function handleResponse(response) {
    //console.log(response);
    var poster = response.Poster;
    var moviePlot = response.Plot;
    var movieName = response.Title;
    var rating = response.Ratings[0].Value;


    //append movie poster
    $(".moviePoster").html("<img src=" + poster + ">" + "</img>");


    //add movie title
    $(".movieName").text(movieName);

    //add movie plot 
    $(".moviePlot").text(moviePlot);

    $(".movieRating").text("Ratings: " + rating);
    console.log(rating);

  }
  callOmdb(search); 

