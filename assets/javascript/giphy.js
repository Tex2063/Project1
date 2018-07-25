$(document).ready(function () {

    console.log("giphy connected");



    // return API link with searched item
    function getURLGiphy(search) {
        return "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=z97a11B7OMWkWo2ajStc013lzJbri8w0&limit=4";
    }






    //Establish the API connection and get values.
    function callGiphy(search) {
        $.ajax({
            url: getURLGiphy(search),
            method: "GET"
        }).then(function (response) {
            handleResponse(response);

            //console.log(response);

        })

    }



    function getInput(input) {

        $("#theButton").on("click", function (event) {
            event.preventDefault();
            input = $("#movie-input").val().trim();
            console.log(input);
            if (input === "") {
                alert("please enter a movie name");
            }
            else {
                callGiphy(input);
            }

        });
    }



    function handleResponse(response) {

         var giphyDiv = $("<div/>"); 
        // var giphyRate;
        var giphyPic = response.data;
        for (var i = 0; i < giphyPic.length; i++) {
            $("#giphyPic").append("<img src=" + giphyPic[i].images.fixed_height.url+ ">" + "</img>");
            //console.log(giphyPic);

        }
    }

    getInput();

});




















