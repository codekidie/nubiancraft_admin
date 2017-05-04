$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(".login-form").on('submit',(function(e){
	e.preventDefault();
	

	$.ajax({
			url: "http://localhost/jewelry_api/owner/login",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
		success: function(data){
			if (data == 1) {
				// User Success Logged In
				$('#warning_login').html('<h3 style="color:green">Success!</h3>')
				window.location.href = "./inside/joborder.html";
				
			}else{
				// User Failed Logged In
				$('#warning_login').html('<h3 style="color:orange">Usrname and Password Mismatch!</h3>')
			}
		},
		error: function(){} 	        
	
		});

}));
