<?php

// フォームからのデータを受け取る
$yourName = $_POST['your-name'];
$yourRuby = $_POST['your-ruby'];
$yourBirthday = $_POST['your-birthday'];
$yourTel = $_POST['your-tel'];
$yourEmail = $_POST['your-email'];
$zip = $_POST['zip'];
$addr = $_POST['addr'];
$radioBusiness = $_POST['radio-business'];
$menuEducation = $_POST['menu-education'];
$yourCompany = $_POST['your-company'];
$yourJob = $_POST['your-job'];
$yourMessage = $_POST['your-message'];

// メールの宛先
$to = "liujifeng545@gmail.com"; // ここに送信先のメールアドレスを入力

// メールの件名
$subject = "新卒採用フォームの送信内容";

// メールの本文
$message = "
以下の内容が送信されました：

お名前: $yourName
ふりがな: $yourRuby
生年月日: $yourBirthday
電話番号: $yourTel
メールアドレス: $yourEmail
郵便番号: $zip
住所: $addr
新卒・既卒: $radioBusiness
最終学歴: $menuEducation
社名: $yourCompany
職務内容: $yourJob
お問合せ内容:
$yourMessage
";

// メールのヘッダー
$headers = "From: no-reply@yourdomain.com\r\n";
$headers .= "Reply-To: $yourEmail\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

// メール送信
if (mail($to, $subject, $message, $headers)) {
    echo "送信が完了しました。後日担当者よりご連絡差し上げます。";
} else {
    echo "送信に失敗しました。再度お試しください。";
}
