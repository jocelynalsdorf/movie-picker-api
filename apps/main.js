$(document).ready(function(){

$('.user-info').submit(function (event) {
        event.preventDefault();
        // get the value of the tags the user submitted
        var year = $(this).find("input[name='element_1']").val();
       	
        //changes string to integer 
       	var yearNum = parseInt(year);
       	

        var fav = $(this).find("input[name='element-radio']:checked").val();
      
		var whichList = function() {

            if(fav === 1) {
                getMovieListCat();
            }
            else if(fav === 2) {
                getMovieListDog();
            }
        };



        if(year === "" || fav === "") {
		alert("You have not answered Harold's questions yet");
		}
		else {
			whichList();

			}
		});



var showQuestion = function (question) {

    // clone our result template code
    var resulting = $('.templates .movie-list').clone();

    // Set the question properties in result
    var titleElem = resulting.find('.movie-title');
    titleElem.text(question.title);

    // set the date asked property in result
    var ratings = resulting.find('.average-rating');
    ratings.text(question.vote_average);

    return resulting;
};



var getMovieListDog = function (yearNum) {

	var results = $.ajax({
        url: "http://api.themoviedb.org/3/discover/movie?primary_release_year=" + yearNum + "&vote_average.lte=4.0&vote_count.gte=3&api_key=320a3fa0fbd7cfcae7cff15a4d705363",
        dataType: "json",
        type: "GET",
   		 });
	}

      /*  .done(function (results) {
        $.each(results.items, function (i, item) {
            var question = showQuestion(item);
            $('.hidden-holder').append(question);
        });
    });*/

var getMovieListCat = function (yearNum) {

var results = $.ajax({
        url: "http://api.themoviedb.org/3/discover/movie?primary_release_year=" + yearNum + "&vote_average.gte=7.0&vote_count.gte=3&api_key=320a3fa0fbd7cfcae7cff15a4d705363",
        dataType: "json",
        type: "GET",
    });
}


    /*    .done(function (results) {
        $.each(results.items, function (i, item) {
            var question = showQuestion(item);
            $('.hidden-holder').append(question);
        });
    });*/



});
