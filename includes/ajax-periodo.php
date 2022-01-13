<?php  
	session_start();
	unset($_SESSION['teste']);
	$_SESSION['teste'] .= '<span><strong style="font-weight: 500"> Apto.: </strong> '.$_POST['NOME_APTO_SEARCH'].' - '.$_POST['NOME_REGIME_SEARCH'].'</span><br>'; 
	$_SESSION['teste'] .= '<span><strong style="font-weight: 500"> Período: </strong> '.$_POST['CHECKIN'].' a '.$_POST['CHECKOUT'].'</span><br>'; 
	$_SESSION['teste'] .= '<span><strong style="font-weight: 500"> Valor da diária: </strong>R$ '.$_POST['PRICE_FORMATTED_SEARCH'].'</span><br>'; 
	$_SESSION['teste'] .= '<span><strong style="font-weight: 500"> Pax: </strong> '.$_POST['ADULTOS'].' '.($_POST['ADULTOS'] > 1 ? 'adultos' : 'adulto').' e '.$_POST['CRIANCAS'].' '.($_POST['CRIANÇAS'] > 1 ? 'crianças' : 'criança').'</span>'; 

	$_SESSION['TOKEN_SEARCH'] = $_POST['TOKEN_SEARCH'];
	$_SESSION['CODE_HOTEL_SEARCH'] = $_POST['CODE_HOTEL_SEARCH'];
	$_SESSION['CODE_ROOM_SEARCH'] = $_POST['CODE_ROOM_SEARCH'];
	$_SESSION['CHECKIN_SEARCH'] = $_POST['CHECKIN_SEARCH'];
	$_SESSION['NIGHTS_SEARCH'] = $_POST['NIGHTS_SEARCH'];
	$_SESSION['ADULTS_SEARCH'] = $_POST['ADULTS_SEARCH'];
	$_SESSION['CHILDS_SEARCH'] = $_POST['CHILDS_SEARCH'];
	$_SESSION['CHILDREN_SEARCH'] = $_POST['CHILDREN_SEARCH']; 
	$_SESSION['POLITICA'] = $_POST['POLITICA']; 
	$_SESSION['MAX_PARCELAS'] = $_POST['MAX_PARCELAS']; 

	$_SESSION['tipo_plugin'] = 'resorts';

	echo $_SESSION['CODE_HOTEL_SEARCH'];
	session_write_close();
?>