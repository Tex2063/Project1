$(document).ready(function(){

function getUrlRotten(search)

return 



}); 


function callRotten(){
    $.ajax({
        url:getUrlRotten(search),
        method: "GET"
    }).then (function(){



    }).error(function(request, response, error){
        console.log(error);
    })

}


function displayRotten(){

    var rottenDiv; 
    var poster; 
    var rottenRate; 
    
}