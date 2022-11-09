<?php
if(empty($_POST['fullName'])  || empty($_POST['volunteer-reason']) || !filter_var($_POST['volunteer-Email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['fullName']));
$email = strip_tags(htmlspecialchars($_POST['volunteer-Email']));
// $m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['volunteer-reason']));

$to = "ujvalpatel31@gmail.com"; // Change this email to your //
$subject = "$m_subject:  $name";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\n\nEmail: $email\n\nMessage: $message";
$header = "From: $email";
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
