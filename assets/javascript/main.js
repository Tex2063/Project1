


// Initialize Firebase
var config = {
    apiKey: "AIzaSyArQYfJEMYMbEYyoMoi1W7kmelmLrdQjhk",
    authDomain: "rottengiphs.firebaseapp.com",
    databaseURL: "https://rottengiphs.firebaseio.com",
    projectId: "rottengiphs",
    storageBucket: "",
    messagingSenderId: "299339313130"
};

//initiate firebase
firebase.initializeApp(config);
//setup database
var database = firebase.database();

function fireDatabase() {

    $("#theButton").on("click", function () {
        console.log("buttoncliked firebase");
        //get movie name here
        var movieNamee = input; 
        console.log("firebase: " + movieNamee);

        //pass movie name to the database
        database.ref().push({
            movieName: movieNamee});
    });

};

database.ref().on("value", function(snapshot){
    dbMovieName = snapshot.val().movieName; 

});

fireDatabase();



