<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);

require_once('class.phpmailer.php');
require_once('class.smtp.php');
require_once('pwd.php');


    


    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.



        $name = strip_tags(trim($_POST['name']));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST['message']);

        $spamcheck = trim($_POST['title']);


        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            //http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        };

        if (!$spamcheck=='') {
            echo 'You are a spam-bot. Message not sent!';
            exit;
        };

    

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "mark@gibbo.co";

        // Set the email subject.
        $subject = "New contact from $name";

        // Build the email content.
        $email_content = "Name: $name <br/>";
        $email_content .= "Email: $email <br/>";
        $email_content .= "Message: <br/> $message <br/>";

        // Build the email headers.
        $email_headers = "From: $name <$email>";
        // Send the email.
        /*
        $mail = mail($recipient, $subject, $email_content, $email_headers);
        */
        $mail = new PHPMailer();

        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.sendgrid.com';        // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = $username;                 // SMTP username
        $mail->Password = $pwd;                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;  

        $mail->From = $email;
        $mail->FromName = $name;

        $mail->AddAddress('mark@gibbo.co', 'Mark Gibbons');

        $mail->isHTML(true);

        $mail->Subject = $subject;
        $mail->Body = $email_content;

        if(!$mail->Send()) 
        {
            echo "Oops! Something went wrong and we couldn't send your message.";
            echo 'Mailer error: ' . $mail->ErrorInfo;
        }
        else {
            echo "Thank You! Your message has been sent.";
        };



    };


/*
        if ($mail) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } 
        else {
            // Set a 500 (internal server error) response code.
            echo "Oops! Something went wrong and we couldn't send your message.";
        };
 

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission (Not a POST), please try again.";
    }

};



?>
