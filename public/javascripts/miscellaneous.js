
$(function(){

$('#sendmessage').click(function(){

console.log('button clicked');

});

});

$(function(){

	var galleries = $('.ad-gallery').adGallery();

    // $('#sendmessage').click(function(e){
    //     e.preventDefault();
    //     console.log('User Sign Up Clicked');
		//
		// var data = {};
		//
		// data.from = 'awfilipek@gmail.com';
		// data.to = 'awfilipek@gmail.com';
		// data.subject = 'Hello';
		// data.text = 'Hello World';
		//
		// $.ajax({
		// 	type: 'POST',
		// 	data: JSON.stringify(data),
	  //       contentType: 'application/json',
		// 	 url: 'http://localhost:3000/sendmessage',
    //         success: function(data) {
		// 		console.log(JSON.stringify(data));
    //         }
    //     });
		//
    // });
});
