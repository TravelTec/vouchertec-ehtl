<?php  

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

              echo $locations;
          }

?>