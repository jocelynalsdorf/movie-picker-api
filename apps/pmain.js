$(document).ready(function(){
var url = 'http://api.themoviedb.org/3/',
    mode = 'discover/movie?',
    year,
    yearNum,
    fav,
    key = '&api_key=320a3fa0fbd7cfcae7cff15a4d705363';


$('.user-info').submit(function (event) {
        event.preventDefault();
        // get the value of the tags the user submitted
        var year = $(this).find("input[name='element_1']").val();
        
        //changes string to integer 
        var yearNum = parseInt(year);
        var fav = $(this).find("input[name='element-radio']:checked").val();

if(fav == 1) {
            

       $.ajax({
            type: 'GET',
            url: url + mode + "primary_release_year=" +yearNum+ "&vote_average.gte=7.0&vote_count.gte=3&" + key,
            async: false,
            jsonpCallback: 'results',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                console.log(json);

                var resultsArray = json.results;
                var arrayLength = resultsArray.length;
                for(var i = 0; i <arrayLength; i++) {
                console.log(resultsArray[i].title, resultsArray[i].vote_average);

               }
               
            },
            error: function(e) {
                console.log(e.message);
            
            }
          

  
       });


 }
 else if(fav == 2) {
        $.ajax({
            type: 'GET',
            url: url + mode + "primary_release_year=" +yearNum+ "&vote_average.lte=4.0&vote_count.gte=3&" + key,
            async: false,
            jsonpCallback: 'results',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                console.log(json);
                var resultsArray = json.results;
                var arrayLength = resultsArray.length;
                for(var i = 0; i <arrayLength; i++) {
                console.log(resultsArray[i].title, resultsArray[i].vote_average);
                
               }

            },
            error: function(e) {
                console.log(e.message);
            }
            });
            }
    });

});