// Account Code
 let baseUrl = "http://localhost/jewelry_api/";
	$("#submitform").on('submit',(function(e){
	e.preventDefault();
	$.ajax({
			url: baseUrl+"owner/create",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
		success: function(data){
			getUsers();
		},
		error: function(){} 	        
		});
	}));


	// $("#editAccountForm").on('submit',(function(e){
	// e.preventDefault();
	// $.ajax({
	// 		url: baseUrl+"owner/edit",
	// 		type: "POST",
	// 		data:  new FormData(this),
	// 		contentType: false,
	// 		cache: false,
	// 		processData:false,
	// 	success: function(data){
	// 		alert('Editting Account Success!');
	// 		getUsers();
	// 	},
	// 	error: function(){
	// 		alert("Editing Account Failed!");
	// 		getUsers();
	// 	} 	        
	// 	});
	// }));

	function getUsers()
	{
		$.ajax({
				url: baseUrl+"owner/",
				type: "GET",
				success: function(data){
						$("#user_data").html(data);
                        $('#table1').DataTable();
						
				},
				error: function(){} 	        
		});
	}


	function updateOwner()
	{
		var id = $('#id').val();
		var username = $('#username').val();
		var password = $('#newpassword').val();

		$.ajax({
                url: baseUrl+"rester/ChangePassword/"+id+"/"+username+"/"+password,
                type: "GET",
                success: function(data){
                  	if (data == 1) {
                  		// handle success
                  		console.log('saved success');
						getUsers();
                  	}else if (data == 0) {
                  		// handle error
                  		console.log('saved error');
						getUsers();
                  	}
                },
                error: function(){
                    alert("update error please fill up all the fields");
                }             
        });
	}

	function getOwner(id)
	{
		$.ajax({
                url: baseUrl+"owner/edit/"+id,
                type: "GET",
                success: function(data){
						$("#user_data").html(data);
                },
                error: function(){
					alert("account not found!");
                }             
        });
	}
	function deleteOwner(id)
	{
		$.confirm({
				    title: 'Are You Sure You Want To Delete?',
				    content: '',
				    buttons: {
				        confirm: function () {
				           $.ajax({
									url: baseUrl+"owner/delete/"+id,
									type: "GET",
									success: function(data){
										getUsers();
									},
									error: function(){} 	        
							});
				        },
				        cancel: function () {
				            $.alert('Canceled!');
				        },
				    }
				});
	}
	getUsers();
// End Account Code