$(document).ready(function(){

$('.user-info').submit(function (event) {
        event.preventDefault();
        // get the value of the tags the user submitted
        var year = $(this).find("input[name='element_1']").val();
       	
        //changes string to integer 
       	var yearNum = parseInt(year);
       	//testing will remove-----
        alert(yearNum + 10);
        var fav = $(this).find("input[name='element-radio']:checked").val();
      
		if(year === "" || fav === "") {
		alert("You have not answered Harold's questions yet");
		}
		else {
			//testing will remove and put in a function to start JSON call
	 	alert(year + fav);
	 	 //  remember to add nameofmygetFunction(year, fav); so you can run it
		}

	}); 



});