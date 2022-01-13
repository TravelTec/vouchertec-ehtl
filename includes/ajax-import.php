<?php

header ('Content-type: text/html; charset=utf-8');

 function conectar_mysql_wp($server, $user, $pass, $database){  
     
        try{
            // create a PostgreSQL database connection
            $conn = new \PDO("mysql:host=$server;dbname=$database", $user, $pass);
            
            return $conn;
        }catch (\PDOException $e){
            // report error message
            echo $e->getMessage();
        }
    } 

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.traveltec.com.br/laravel/public/serv/hotelsinteg",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 5000,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\r\n\t\"destino\": \"".$_POST['destino']."\",\r\n\t\"checkin\": \"".$_POST['checkin']."\",\r\n\t\"checkout\": \"".$_POST['checkout']."\",\r\n\t\"adt\": \"".$_POST['adt']."\",\r\n\t\"chd\": \"".$_POST['chd']."\"\r\n}\r\n ",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: d7f13c4d-c0da-18fe-6a95-f5983dce1599"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  if ($response == "0") { 
    echo 0;
  }else{
    $dados = json_decode($response, true);
    $id = $dados["id"];
    $totalPages = $dados["totalPages"];
    $total = $dados["total"];
    $token = $dados["token"];

    print_r(json_encode(str_replace("<!-- wp:paragraph -->", "", str_replace("<!-- /wp:paragraph -->", "", str_replace("<p>", "", str_replace("</p>", "", str_replace("\n", "<br>", str_replace("\r", "<br>", str_replace("\t", "", $dados["message"])))))))).'+++++++'.$id.'+++++++'.$totalPages.'+++++++'.$total.'+++++++'.$token);
  }
}