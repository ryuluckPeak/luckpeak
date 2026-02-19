<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームからデータを取得
    $company = $_POST['company'];
    $department = $_POST['department'];
    $last_name = $_POST['last-name'];
    $first_name = $_POST['first-name'];
    $last_name_furigana = $_POST['last-name-furigana'];
    $first_name_furigana = $_POST['first-name-furigana'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $inquiry = implode(", ", $_POST['inquiry']);  // チェックボックスの値をカンマ区切りで結合
    $inquiry_text = $_POST['inquiry-text'];

    // メール送信
    $to = "liujifeng545@gmail.com";  // 受信するメールアドレスに変更
    $subject = "お問い合わせフォーム";
    $message = "会社名: $company\n部署名/役職名: $department\n名前: $last_name $first_name\nフリガナ: $last_name_furigana $first_name_furigana\n電話番号: $phone\nEmail: $email\nお問い合わせ項目: $inquiry\nお問い合わせ内容:\n$inquiry_text";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "メールが送信されました";
    } else {
        echo "メール送信に失敗しました";
    }
}
