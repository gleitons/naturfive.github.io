<?php	
	
	
	$tentando_engravidar = $_POST['tentando_engravidar'];
	$ = $_POST[''];
	$ = $_POST[''];
	$optin = $_POST['optin'];
	
	$to = 'naturfiveoficial@gmail.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Mam Caps Propaganda";
	$email_body = "Mensagem recebida Mam Caps \n\n".
				  "Tentando_Engravidar: $tentando_engravidar \n: $ \n: $ \nOptin: $optin \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: send@naturfive.com\n";
	$headers .= "Reply-To: DoNotReply@yoursite.com";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>