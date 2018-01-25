<?php


    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

   $mail_message = '
    <html>
        <head>
            <title>Сообщение</title>
        </head>
        <body>
            <h2>Сообщение с сайта-портфолио</h2>
            <ul>
                <li> Имя контакта: ' . $name . '</li>
                <li> e-mail: ' . $email . '</li>
                <li> Сообщение: ' . $message . '</li>
            </ul>
        </body>
    </html>
    ';

    $headers = "From: Администратор сайта <usp-evgeniya@yandex.ru>\r\n".
    "MIME-Version: 1.0\r\n" .
    "Content-type: text/html; charset=UTF-8\r\n";

    $mail = mail("usp-evgeniya@yandex.ru", "Сообщение с сайта-портфолио", $mail_message, $headers);

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "ERROR";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>