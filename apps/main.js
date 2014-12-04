$(document).ready(function(){

$('.user-info').submit(function (event) {
        event.preventDefault();
        // get the value of the tags the user submitted
        var year = $(this).find("input[name='element_1']").val();
       // nameofmygetFunction(year, fav);
     
        var fav = $(this).find("input[name='element-radio']:checked").val();
       

		if(year === "" || fav === "") {
		alert("You have not answered Harold's questions yet");
		}
		else {
	 	alert(year + fav);
		}
	}); 







});