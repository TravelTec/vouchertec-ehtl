<?php    
  
  ini_set("display_errors", 0);

	//$id_hotel = $_POST['id'];

	if ($_POST['chd'] > 0) { 
    $contador = intval($_POST['chd'])-1;
    for ($i=0; $i < $_POST['chd']; $i++) { 
      if ($i == $contador) {
        $idades .= '10';
      }else{
        $idades .= '10,';
      }
      
    }
    $idades_chd = $idades;
    $pax = array(array('adt' => $_POST['adt'], 'idadeschd' => array($idades_chd)));
  }else{
    $pax = array(array('adt' => $_POST['adt']));
              
  }
  if ($_POST['chd'] == 0) {
       $crianca = ''; 
       $idades = 0;
   }else{
    if ($_POST['chd'] == 1) {
        $crianca = ' e '.$_POST['chd'].' criança';
    }else{
        $crianca = ' e '.$_POST['chd'].' crianças';
        $contador = intval($_POST['chd'])-1;
        for ($i=0; $i < $_POST['chd']; $i++) { 
          if ($i == $contador) {
            $idade .= '10';
          }else{
            $idade .= '10,';
          }
          
        }
        $idades = $idade;
    } 
   } 
   $desc_pax = $_POST['adt'].' '.($_POST['adt'] > 1 ? 'adultos' : 'adulto').' '.$crianca; 

   $data_inicio = new DateTime(implode("-", array_reverse(explode("/", $_POST['data_inicio']))));
    $data_fim = new DateTime(implode("-", array_reverse(explode("/", $_POST['data_final']))));

    // Resgata diferença entre as datas
    $diferenca_data = $data_inicio->diff($data_fim);
    $qtd_diarias = $diferenca_data->days; 
    if ($diferenca_data->days == 1) {
        $diaria = '1 diária';
    }else{
        $diaria = (intval($diferenca_data->days)+1).' diárias';
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
      CURLOPT_POSTFIELDS => "username=91355&password=agenciaws@1055076466826202019",
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
    }

    function tirarAcentos($string){
return preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/","/'/","/\"/"),explode(" ","a A e E i I o O u U n N  "),$string); 
}

if ($_POST['destination'] == "Norte") {
  $destinos = array("Manaus", "Belem", "Macapá", "Rio Branco", "Porto Velho", "Palmas");
}else if ($_POST['destination'] == "Nordeste") {
  $destinos = array("São Luis", "Teresina", "Fortaleza", "Natal", "Recife", "Joao Pessoa", "Maceio", "Aracaju", "Salvador");
}else if ($_POST['destination'] == "Sul") {
  $destinos = array("Porto Alegre", "Florianópolis", "Curitiba");
}else if ($_POST['destination'] == "Sudeste") {
  $destinos = array("São Paulo", "Rio de Janeiro", "Belo Horizonte", "Vitória");
}else if ($_POST['destination'] == "Centro Oeste") {
  $destinos = array("Campo Grande", "Cuiabá", "Goiânia");
}

$regiao = str_replace(" ", "-", strtolower($_POST['destination']));


for ($i=0; $i < count($destinos); $i++) {  

  $local = tirarAcentos(str_replace(" ", "%20", $destinos[$i]));

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
        $locations[] = $itens["data"][0]["id"];
    }

}

function stripslashes_deep($value)
{
    $value = is_array($value) ?
                array_map('stripslashes_deep', $value) :
                stripslashes($value);

    return $value;
}

for ($y=0; $y < count($locations); $y++) { 
$destino = $locations[$y];

  $curl = curl_init(); 
    curl_setopt_array($curl, array( 
        CURLOPT_URL => 'https://quasar.e-htl.com.br/booking/hotels-availabilities', 
        CURLOPT_RETURNTRANSFER => true, 
        CURLOPT_ENCODING => "", 
        CURLOPT_MAXREDIRS => 10, 
        CURLOPT_TIMEOUT => 50000, 
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, 
        CURLOPT_CUSTOMREQUEST => "POST", 
        CURLOPT_POSTFIELDS => '{"data": {"attributes": { "destinationId": "'.$destino.'", "checkin": "'.implode("-", array_reverse(explode("/", $_POST['data_inicio']))).'", "nights": '.$qtd_diarias.', "roomsAmount": 1, "rooms": [{"adults": '.$_POST['adt'].', "children": '.$_POST['chd'].', "childrenages": ['.$idades.']}], "signsInvoice": 0, "onlyAvailable": true, "page": 1, "perPage": 20}}}', 
        CURLOPT_HTTPHEADER => array( 
            "authorization: Bearer ".$token, 
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
        $search_hoteis[] = $itens['data'];   

        

    } 

}

for ($r=0; $r < count($search_hoteis); $r++) { 
  $hoteis = $search_hoteis[$r];
  $contador = 0;
  for ($i=0; $i < 20; $i++) { 

    $id = $hoteis[$i]["id"];  
    $type = $hoteis[$i]["type"];

    $hotel = tirarAcentos($hoteis[$i]["attributes"]["hotel"]);
    $hotelCnpj = tirarAcentos($hoteis[$i]["attributes"]["hotelCnpj"]);
    $hotelType = tirarAcentos($hoteis[$i]["attributes"]["hotelType"]);
    $hotelDescription = str_replace('"', "", str_replace("'", "", tirarAcentos($hoteis[$i]["attributes"]["hotelDescription"])));
    $hotelTaxes = tirarAcentos($hoteis[$i]["attributes"]["hotelTaxes"]);
    $hotelAddress = tirarAcentos($hoteis[$i]["attributes"]["hotelAddress"]);
    $hotelNeighborhood = tirarAcentos($hoteis[$i]["attributes"]["hotelNeighborhood"]);
    $hotelPostalCode = tirarAcentos($hoteis[$i]["attributes"]["hotelPostalCode"]);
    $hotelCategory = tirarAcentos($hoteis[$i]["attributes"]["hotelCategory"]);
    $hotelStars = tirarAcentos($hoteis[$i]["attributes"]["hotelStars"]);
    $hotelLuxury = tirarAcentos($hoteis[$i]["attributes"]["hotelLuxury"]);
    $reviewRating = tirarAcentos($hoteis[$i]["attributes"]["reviewRating"]);
    $hotelStarsDescription = tirarAcentos($hoteis[$i]["attributes"]["hotelStarsDescription"]);
    $hotelLongitude = tirarAcentos($hoteis[$i]["attributes"]["hotelLongitude"]);
    $hotelLatitude = tirarAcentos($hoteis[$i]["attributes"]["hotelLatitude"]);
    $hotelImages = tirarAcentos($hoteis[$i]["attributes"]["hotelImages"]);
    $hotelLowerPrice = tirarAcentos($hoteis[$i]["attributes"]["hotelLowerPrice"]);
    $hotelLowerPriceOfferType = tirarAcentos($hoteis[$i]["attributes"]["hotelLowerPriceOfferType"]);
    $priceCurrency = tirarAcentos($hoteis[$i]["attributes"]["priceCurrency"]);
    $hotelUnmetNightRestriction = tirarAcentos($hoteis[$i]["attributes"]["hotelUnmetNightRestriction"]);
    $hotelRemarks = tirarAcentos($hoteis[$i]["attributes"]["hotelRemarks"]);
    $irrevocableGuarantee = tirarAcentos($hoteis[$i]["attributes"]["irrevocableGuarantee"]);
    $breakfastIncluded = tirarAcentos($hoteis[$i]["attributes"]["breakfastIncluded"]);
    $acceptsDirectPayment = tirarAcentos($hoteis[$i]["attributes"]["acceptsDirectPayment"]);
    $signsBill = tirarAcentos($hoteis[$i]["attributes"]["signsBill"]);
    $signsInvoice = tirarAcentos($hoteis[$i]["attributes"]["signsInvoice"]);
    $inclusions = tirarAcentos($hoteis[$i]["attributes"]["inclusions"]);
    $prePayment = tirarAcentos($hoteis[$i]["attributes"]["prePayment"]);
    $onlyCreditCard = tirarAcentos($hoteis[$i]["attributes"]["onlyCreditCard"]);
    $invoiceDaily = tirarAcentos($hoteis[$i]["attributes"]["invoiceDaily"]);
    $invoiceExtras = tirarAcentos($hoteis[$i]["attributes"]["invoiceExtras"]);
    $featured = tirarAcentos($hoteis[$i]["attributes"]["featured"]);
    $preferred = tirarAcentos($hoteis[$i]["attributes"]["preferred"]);
    $incentive = tirarAcentos($hoteis[$i]["attributes"]["incentive"]);
    $incentivePercentagem = tirarAcentos($hoteis[$i]["attributes"]["incentivePercentagem"]);
    $extraInformations = tirarAcentos($hoteis[$i]["attributes"]["extraInformations"]);
    $agencyIsCommissioned = tirarAcentos($hoteis[$i]["attributes"]["agencyIsCommissioned"]);

    for ($z=0; $z < 5; $z++) { 
      $rooms = $hoteis[$i]["attributes"]["hotelRooms"][$z]["roomsDetail"];

      if (!empty($rooms[0]["regime"])) { 

        $dailyPrice              = tirarAcentos($rooms[0]["dailyPrices"][0]["price"]);
   
        $roomName                = tirarAcentos($rooms[0]["roomName"]);
        $roomDescription         = tirarAcentos($rooms[0]["roomDescription"]);
        $type                    = tirarAcentos($rooms[0]["type"]);
        $regime                  = tirarAcentos($rooms[0]["regime"]);
        $regimeDescription       = tirarAcentos($rooms[0]["regimeDescription"]);
        $adults                  = tirarAcentos($rooms[0]["adults"]);
        $children                = tirarAcentos($rooms[0]["children"]);
        $currency                = tirarAcentos($rooms[0]["currency"]);
        $price                   = tirarAcentos($rooms[0]["price"]);
        $priceWithTax            = tirarAcentos($rooms[0]["priceWithTax"]);
        $offer                   = tirarAcentos($rooms[0]["offer"]);
        $status                  = tirarAcentos($rooms[0]["status"]);
        $remarks                 = tirarAcentos($rooms[0]["remarks"]);
        $irrevocableGuarantee    = tirarAcentos($rooms[0]["irrevocableGuarantee"]);
        $dailyPrices             = tirarAcentos($rooms[0]["dailyPrices"]);
        $breakfast               = tirarAcentos($rooms[0]["breakfast"]);

        $totalRoomsPrice         = tirarAcentos($rooms["totalRoomsPrice"]);
        $totalRoomsPriceWithTax  = tirarAcentos($rooms["totalRoomsPriceWithTax"]);
        $roomCode                = tirarAcentos($rooms["roomCode"]);
        $isOptional              = tirarAcentos($rooms["isOptional"]);
        $irrevocableGuarantee    = tirarAcentos($rooms["irrevocableGuarantee"]);
        $unmetNightRestrictions  = tirarAcentos($rooms["unmetNightRestrictions"]); 

        $nome_hotel = explode("-", $hotel);
        $dados_hoteis[] = array("nome_hotel" => $nome_hotel[0], "imagem_hotel" => str_replace("/", "%u;", (empty($hotelImages[1]) ? $hotelImages[0] : $hotelImages[1])), "descricao_hotel" => $hotelDescription, "data_checkin" => $_POST['data_inicio'], "data_checkout" => $_POST['data_final'], "nome_apto" => ucfirst($type), "categoria" => ucfirst($roomName), "regime" => ucfirst($regime), "qtd_adt" => $_POST['adt'], "qtd_chd" => $_POST['chd'], "valor" => $dailyPrice, "regiao" => $regiao);
      }
      
    } 


  }
}

function sortFunction( $a, $b ) {
    return $a["valor"] < $b["valor"];
}
usort($dados_hoteis, "sortFunction");

if (empty($dados_hoteis)) {
  echo '';
}else{
  echo str_replace("\"", "%s;", json_encode($dados_hoteis));
  //print_r($dados_hoteis);
}

?>