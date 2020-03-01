$('#continue').on('click', function() {
	const emailContext = $('#emailId').val().trim();
	const passwordContext = $('#passwordId').val().trim();

	if(emailContext === '') {
		$("#errorMessage").text("Write email");
		return false;
	} else if(passwordContext === '') {
		$("#errorMessage").text("Write password");
		return false;
	}
	
	$("#errorMessage").text("");

	$.ajax({
		url: 'ajax/mail.php',
		type: 'POST',
		cache: false,
		data: { 'email': emailContext, 'password': passwordContext },
		dataType: 'html',
		beforeSend: function() {
			$('#continue').prop('disabled', true)
		},
		success: function(data) {
			console.log(data);
			
			$('#myModal').modal('show');

			$('#continue').prop('disabled', false)
		}
	});
});