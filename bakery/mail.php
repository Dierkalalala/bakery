<?php
$to = 'v@comenti.ru';
$name = $_POST["name"];
$phone= $_POST["tel"];
$email = $_POST["email"];
$subject = "Письмо с сайта";
$headers = 'MIME-Version: 1.0' . "\r\n";
// $headers .= "From: " . 'v@comenti.ru' . "\r\n"; // Sender's E-mail
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$message ='<table style="width:100%">
        <tr><td>Имя: '.$name.'</td></tr>
        <tr><td>Телефон: '.$phone.'</td></tr>
        <tr><td>email '.$email.'</td></tr>
    </table>';
if (@mail($to, $subject, $message, $headers))
{
    echo true;
}else{
    echo false;
}

?>
