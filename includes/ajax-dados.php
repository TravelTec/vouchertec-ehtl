<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.traveltec.com.br/laravel/public/serv/dados",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n\t\"hotelCode\": \"".$_POST['hotel']."\",\n      \"roomCode\": \"".$_POST['code_room']."\",\n\t\"token\": \"".$_POST['token']."\"\n}",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer ".$_POST['code_room'],
    "cache-control: no-cache",
    "content-type: application/json" 
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}