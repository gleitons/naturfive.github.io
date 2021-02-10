<?php	
	if (empty($_POST['email']) && strlen($_POST['email']) == 0 || empty($_POST['message']) && strlen($_POST['message']) == 0)
	{
		return false;
	}
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$optin3 = $_POST['optin3'];
	
	$to = 'naturfiveoficial@gmail.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Contato Naturfive";
	$email_body = "Mensagem do Site \n\n".
				  "Name: $name \nEmail: $email \nMessage: $message \nOptin3: $optin3 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: send@naturfive.com\n";
	$headers .= "Reply-To: $email";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>