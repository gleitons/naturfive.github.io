<?php	
	
	
	$input_2431 = $_POST['input_2431'];
	$input_2985 = $_POST['input_2985'];
	$input_606 = $_POST['input_606'];
	$optin = $_POST['optin'];
	
	$to = 'naturfiveoficial@gmail.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Mam Caps Propaganda";
	$email_body = "Mensagem recebida Mam Caps \n\n".
				  "Input_2431: $input_2431 \nInput_2985: $input_2985 \nInput_606: $input_606 \nOptin: $optin \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: send@naturfive.com\n";
	$headers .= "Reply-To: DoNotReply@yoursite.com";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>