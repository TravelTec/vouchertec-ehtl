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
          CURLOPT_URL => "https://quasar.e-htl.com.br/oauth/access_token",
          CURLOPT_RETURNTRANSFER => TRUE,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 50000,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS => "username=113035&password=agenciaws@0506192935398822021",
          CURLOPT_HTTPHEADER => array(
            "cache-control: no-cache", 
            "x-detailed-error: "
          ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            $itens = json_decode($response, true);
            $token = $itens["access_token"]; 
            $access = $itens["access_token"]; 
        }

        function tirarAcentos($string){
        return preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/","/'/","/\"/"),explode(" ","a A e E i I o O u U n N  "),$string); 
      } 

       

        $local = tirarAcentos(str_replace(" ", "%20", $_POST['destino']));

        $curl = curl_init(); 

          curl_setopt_array($curl,
          array(

          CURLOPT_URL => "https://quasar.e-htl.com.br/destinations/search?query=".$local."&limit=1",

          CURLOPT_RETURNTRANSFER => true,

          CURLOPT_ENCODING => "",

          CURLOPT_MAXREDIRS => 10,

          CURLOPT_TIMEOUT => 30,

          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

          CURLOPT_CUSTOMREQUEST => "GET", 
          CURLOPT_HTTPHEADER => array(

          "authorization: Bearer $token",

          "cache-control: no-cache",

          "content-type: application/json"

          ),

          ));



          $response = curl_exec($curl);

          $err = curl_error($curl);



          curl_close($curl);



          if ($err) {

          echo "cURL Error #:" .
          $err;

          } else {

              $itens = json_decode($response, true);
              $locations = $itens["data"][0]["id"];
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
  CURLOPT_POSTFIELDS => "{\r\n\t\"destino\": \"".$locations."\",\r\n\t\"checkin\": \"".date('d/m/Y', strtotime('+'.intval(1).' days'))."\",\r\n\t\"checkout\": \"".date('d/m/Y', strtotime('+'.intval(6).' days'))."\",\r\n\t\"adt\": \"".$_POST['adt']."\",\r\n\t\"chd\": \"".$_POST['chd']."\"\r\n}\r\n ",
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

    $server = '162.241.62.172';
          $user = 'befree64_wp673';
          $database = 'befree64_wp673';
          $pass = '3(SS)7p0Cn';   

        $conn = conectar_mysql_wp($server, $user, $pass, $database); 

         $sql_insert_rota = $conn->prepare("SELECT json FROM wpm0_dados_pesquisados WHERE id = '$id' ORDER BY id DESC");
            if ($sql_insert_rota->execute()) { 
              $resposta = $sql_insert_rota->fetch(\PDO::FETCH_OBJ);
              print_r(str_replace("<!-- wp:paragraph -->", "", str_replace("<!-- /wp:paragraph -->", "", str_replace("<p>", "", str_replace("</p>", "", str_replace("\n", "<br>", str_replace("\r", "<br>", str_replace("\t", "", $resposta->json))))))).'+++++++'.$id.'+++++++'.$totalPages.'+++++++'.$total.'+++++++'.$token);
            }else{
              echo 0;
            } 
  }
}