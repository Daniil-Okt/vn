<?php 
$site = 'c';
$titleForm = $_POST['title'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$question = $_POST['question'];

// ОТПРАВКА НА ПОЧТУ
// ==================================================================================================================
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получаем информацию о файле
$file = $_FILES['file']['name']; // Имя файла
$file_temp = $_FILES['file']['tmp_name']; // Временное имя файла

// Загрузка файла на сервер
$upload_dir = '';
$upload_file = $upload_dir . basename($file);

move_uploaded_file($file_temp, $upload_file);


// Формирование самого письма
$title = "Заявка с сайта #ВНКОНТРОЛ";
$body = "
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>E-mail:</b> $email<br>
<b>Вопрос:</b> $question<br>
<b>Файл:</b> $file<br>
";
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.mail.ru'; 
    $mail->Username   = 'web-prog-dn@mail.ru'; 
    // 
    $mail->Password   = '6W1EU4RUb7ptcmCvtHCQ';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('web-prog-dn@mail.ru', '#ВНКОНТРОЛ'); 
    // Получатель письма
    $mail->addAddress('danikoktysyk@gmail.com'); 
    // $mail->addAddress('vncontrol1@gmail.com'); 
    
    // Опционально, прикрепите файл к письму
    $mail->addAttachment($upload_file);

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $result = "success";
        unlink($upload_file);
    } else {
        $result = "error";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

if ($sendToTelegram) {$result = "success";} 
else {$result = "error";}
?>