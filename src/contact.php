<?php
  if(isset($_POST) && !empty($_POST)){
    $file_name = $_FILES['attachment']['name']
    $temp_name = $_FILES['attachment']['tmp_name']
    $file_type = $_FILES['attachment']['type']

    $base = basename($file_name);
    $extension = substr($base, strlen($base)-4, strlen($base));

    $allowedExtension = array(".doc", "docx", ".pdf", ".zip", ".png");

    $from = $_POST['email'];
    $to = "govardhan.bobbiti@gmail.com";
    $subject = 'Received Request';
    $name = $_POST['fullname'];
    $contact_num = $_POST['contact'];
    $company_name = $_POST['companyname'];
    $message = $_POST['message'];

    $file = $temp_name;
    $content = chunk_split(base64_encode(file_get_contents($file)));
    $uid = md5(uniqid(time());

    $header = "From: ".$from."\r\n";
    $header .= "Reply-To: ".$to."\r\n";
    $header .= "MIME-Version: 1.0\r\n";

    $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";

    $header .= "__".$uid."\r\n";
    $header .= "Content-type:text/plain; charset= iso-8859-1\r\n";
    $header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $header .= $name."\r\n\r\n";
    $header .= $contact_num."\r\n\r\n";
    $header .= $company_name."\r\n\r\n";
    $header .= $message."\r\n\r\n";

    $header .= "__".$uid."\r\n";
    $header .= "Content-Type: ".$file_type."; name=\"".$file_name."\"\r\n";
    $header .= "Content-Transfer-Encoding: base64\r\n";
    $header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n";
    $header .= $content."\r\n\r\n";

    if(mail($to, $subject, "", $header)){
        echo "success";
    }else{
        echo "fail"
    }
  }
?>