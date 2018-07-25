$(document).ready(function () {


    function getURLGiphy(search) {
        return "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=z97a11B7OMWkWo2ajStc013lzJbri8w0&limit=15";
    }


    function callGiphy() {
        $.ajax({
            url: getURL(search),
            method: "GET"
        }).then(function (response) {


        }).error(function(request,response,error){
            console.log(error); 

        })


    }


    function displayGiphy() {

        var giphyDiv; 
        var giphy = 
        var giphyRate; 



    }

}




























    /*//grabbing the click and input
    $('button').on('click', function () {
        var movie = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=4"; // limiting the result to four images

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function (response) {


                console.log(response)

                var results = response.data;

                //loop for the array that pulls the results
                for (var i = 0; i < results.length; i++) {

                    var movieDiv = $('<div/>');

                    var p = $('<p/>');

                    p.text(results[i].rating);

                    var movieImage = $('<img/>');
                    // adding class to image
                    movieImage.addClass('anImg')
                    // adding the source to the img                     
                    movieImage.attr('src', results[i].images.fixed_height.url);
                    // adding attribute still source 
                    movieImage.attr('data-still', results[i].images.fixed_height_still.url)
                    // adding attribute animated source
                    movieImage.attr('data-animate', results[i].images.fixed_height.url)

                        .attr('data-state', 'still');

                    movieDiv.append(p);

                    movieDiv.append(movieImage);
                    // putting the image in front of the previous results
                    movieDiv.prependTo($('#gifs'));
                }
                //when image is clicked do the following
            });
    });
});

var movies = [''];


//adds the buttons 

// handles event when clicked
$('#theButton').on('click', function () {
    var movieButton = $("#gif-input").val();

    //adds new search
    var newButton = $("<button/>").addClass("btn btn-info movie").attr('data-name', movieButton).html(movieButton).css({ 'margin': '5px' });

    //creates new button
    $("#moviesbuttons").append(newButton);
    console.log("Work");

    //query to the giphy api with the movie button and api key
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movieButton + "&api_key=dc6zaTOxFJmzC&limit=4";
    console.log(movieButton);

    //ajax to go get the giphy results
    $.ajax({
        url: queryURL,
        method: 'GET'
    })

        .done(function (response) {

            // waiting for the results
            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var movieDiv = $('<div/>');

                var p = $('<p/>');

                p.text(results[i].rating);

                var movieImage = $('<img/>');

                movieImage.addClass('anImg')

                movieImage.attr('src', results[i].images.fixed_height_still.url);

                movieImage.attr('data-still', results[i].images.fixed_height_still.url)

                movieImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                movieDiv.append(p);

                movieDiv.append(movieImage);

                movieDiv.prependTo($('#gifs'));
            }

            $('.anImg').on('click', function () {

                // setting the result ti still or animate
                var state = $(this).attr('data-state');
                console.log(this);

                if (state == 'still') {

                    $(this).attr('src', $(this).data('animate'));

                    $(this).attr('data-state', 'animate');

                } else {

                    $(this).attr('src', $(this).data('still'));

                    $(this).attr('data-state', 'still');
                }
            });
        });

    $("#gif-input").val("");
    return false;
});