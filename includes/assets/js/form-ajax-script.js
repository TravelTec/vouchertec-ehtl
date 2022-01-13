jQuery(document).ready(function(){ 

    list_destaques_results_ehtl();
	
	jQuery(".product-quantity").append(" diárias");

    jQuery(".select-field").attr("style", "margin-top:0");

    setTimeout( function() { 
        jQuery(".payment_method_clearsale").attr('style', 'display:none');

        jQuery("div.payment_method_misha").html('<fieldset id="wc-vouchertec-cc-form" class="wc-credit-card-form wc-payment-form" style="background:transparent;margin-top: 0;padding:0;"><div class="form-row validate-required form-row-wide" style="margin-bottom: 10px;padding: 0px;"><label>Número do cartão <span class="required">*</span></label> <input id="misha_ccNo" name="misha_ccNo" type="text" autocomplete="off" style="height: 33px;color: #424242;width: 100%;font-family: \'Poppins\';padding: 0px 7px;" placeholder="0000 0000 0000 0000"> </div> <div class="form-row validate-required form-row-first" style="margin-bottom: 10px;padding: 0px;padding-right: 5px;"> <label>Validade <span class="required">*</span></label> <input id="misha_expdate" name="misha_expdate" type="text" autocomplete="off" placeholder="MM/YY" style="height: 33px;color: #424242;width: 100%;font-family: \'Poppins\';padding: 0px 7px;"> </div> <div class="form-row validate-required form-row-last" style="margin-bottom: 10px;padding: 0px;padding-right: 5px;"> <label>CVV <span class="required">*</span></label> <input id="misha_cvv" name="misha_cvv" type="password" autocomplete="off" placeholder="***" style="height: 33px;color: #424242;width: 100%;font-family: \'Poppins\';padding: 0px 7px;"> </div> <div class="form-row validate-required form-row-first" style="margin-bottom: 10px;padding: 0px;padding-right: 5px;"> <label>Nome completo <span class="required">*</span></label> <input id="misha_fullname" name="misha_fullname" type="text" autocomplete="off" placeholder="Ex.: José da Silva" style="height: 33px;color: #424242;width: 100%;font-family: \'Poppins\';padding: 0px 7px;"> </div> <div class="form-row validate-required form-row-last" style="margin-bottom: 10px;padding: 0px;padding-right: 5px;"> <label>CPF <span class="required">*</span></label> <input id="misha_cpf" name="misha_cpf" type="text" autocomplete="off" placeholder="000.000.000-00" style="height: 33px;color: #424242;width: 100%;font-family: \'Poppins\';padding: 0px 7px;"> </div> <div class="clear"></div><div class="clear"></div></fieldset>');  
 
        
    }, 3500 );
    setTimeout( function() { 
        jQuery("#billing_phone").mask("(00) 00000-0000"); 
        jQuery("#misha_ccNo").mask("0000 0000 0000 0000"); 
        jQuery("#misha_expdate").mask("00/00"); 
        jQuery("#misha_cvv").mask("000"); 
        jQuery("#misha_cpf").mask("000.000.000-00"); 
    }, 3700 ); 

    if(url_atual.indexOf("/busca-ehtl-hoteis/") != -1){
        list_results_ehtl();
    }

    

     function waitForFlatpicker( callback ) {
 if ( typeof window.flatpickr !== 'function' ) {
 setTimeout( function() { waitForFlatpicker( callback ) }, 2 );
 }
 callback();
 }
 

 waitForFlatpicker( function(){
 flatpickr.l10ns.pt = {
 weekdays: {
 shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
 longhand: [
 "Domingo",
 "Segunda-feira",
 "Terça-feira",
 "Quarta-feira",
 "Quinta-feira",
 "Sexta-feira",
 "Sábado",
 ],
 },
 months: {
 shorthand: [
 "Jan",
 "Fev",
 "Mar",
 "Abr",
 "Mai",
 "Jun",
 "Jul",
 "Ago",
 "Set",
 "Out",
 "Nov",
 "Dez",
 ],
 longhand: [
 "Janeiro",
 "Fevereiro",
 "Março",
 "Abril",
 "Maio",
 "Junho",
 "Julho",
 "Agosto",
 "Setembro",
 "Outubro",
 "Novembro",
 "Dezembro",
 ],
 },
 rangeSeparator: " até ",
 };
 //set translations
 flatpickr.localize(flatpickr.l10ns.pt);
 flatpickr('.elementor-date-field');
 //set format
 setTimeout( function(){  
    jQuery('#field_date_checkin_ehtl').attr("maxlength", "10");
 startPickerEhtl = flatpickr("#field_date_checkin_ehtl", {
    dateFormat: 'd/m/Y',
    minDate: 'today',
  onChange: function(selectedDates, dateStr, instance) {
    endPickerEhtl.set('minDate', selectedDates[0]);
  }
});
endPickerEhtl = flatpickr("#field_date_checkout_ehtl", {
    dateFormat: 'd/m/Y'
});
 }, 1000 );
 }); 

}); 
 

    var url_atual = window.location.href;

    if (url_atual.indexOf("/hoteis") != -1) {
        localStorage.clear();
    }

    if(url_atual.indexOf("/detalhes-hotel/") != -1){  
        jQuery('#periodo_hotel_ehtl h2').html(localStorage.getItem("CHECKIN").replace("-", "/").replace("-", "/")+' a '+localStorage.getItem("CHECKOUT").replace("-", "/").replace("-", "/"));
        jQuery('#quarto_hotel_ehtl h2').html(localStorage.getItem("APTO_SEARCH"));
        jQuery('#regime_hotel_ehtl h2').html(localStorage.getItem("REGIME_SEARCH"));
        jQuery('#diaria_hotel_ehtl h2').html("R$ "+localStorage.getItem("PRICE_FORMATTED_SEARCH"));
    jQuery('#total_hotel_ehtl h2').html((parseFloat(localStorage.getItem("PRICE_SEARCH"))*parseInt(localStorage.getItem("NIGHTS_SEARCH"))).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}));
        jQuery("#nome_hotel_ehtl h2").html(localStorage.getItem("NOME_HOTEL_SEARCH"));

        listar_dados_hotel();

        jQuery('#button_apto_reserva').removeAttr('HREF'); 
            jQuery('#button_apto_reserva').attr('style', 'color:#fff;cursor:pointer;'); 
            jQuery('#button_apto_reserva').attr('onclick', 'set_reserva_padrao()'); 
    }

    if(url_atual.indexOf("/busca-ehtl-hoteis/") != -1){
        jQuery('#results_div_integ').attr("style", "text-align:center;margin:0 auto");
        jQuery('#results_div_integ').html('<div class="div_loader" style="margin-bottom:22px;"><div class="elementor-widget-container"><div class="jet-listing-grid jet-listing-grid--lazy-load jet-listing jet-listing-grid-loading" data-lazy-load="{&quot;offset&quot;:&quot;0px&quot;,&quot;post_id&quot;:1753,&quot;queried_id&quot;:&quot;1753|WP_Post&quot;}"></div>        </div></div>');
        console.log(localStorage.getItem("CHECKIN"));
        if (localStorage.getItem("CHECKIN") == null || localStorage.getItem("CHECKIN") == 'null' || localStorage.getItem("CHECKIN") == 'undefined' || localStorage.getItem("CHECKIN") == undefined) {

        }else{
            var destination = localStorage.getItem("DESTINATION");
            var data_inicio =  localStorage.getItem("CHECKIN").replace("-", "/").replace("-", "/");
            var data_final = localStorage.getItem("CHECKOUT").replace("-", "/").replace("-", "/");
            var adt = localStorage.getItem("ADT");
            var chd = localStorage.getItem("CHD");

            jQuery("#field_name_ehtl").removeAttr("selected");
            jQuery("#field_adults_ehtl").removeAttr("selected");
            jQuery("#field_childs_ehtl").removeAttr("selected");

            
            jQuery("#field_name_ehtl").val(destination);
         
            jQuery("#field_date_checkin_ehtl").val(data_inicio);
            jQuery("#field_date_checkout_ehtl").val(data_final);
            jQuery("#field_adults_ehtl option").each(function () {
                                    if (jQuery(this).val() == adt) jQuery(this).attr("selected", "selected");
                                });
            jQuery("#field_childs_ehtl option").each(function () {
                            if (jQuery(this).val() == chd) jQuery(this).attr("selected", "selected");
                        }); 
        } 
    } 
 

    jQuery('.field-type-submit').removeClass("submit_form_search_ehtl"); 
    jQuery('.jet-form-col-3').append('<div class="dados" style="background-color:#fff;min-height: 25px;width: 100%;display:none"><ul style="padding:0"></ul></div>');  
    jQuery('.submit_form_search_ehtl').attr("onclick", "gravar_hoteis_ehtl()"); 
    jQuery('form').removeAttr("method"); 
    jQuery('form').removeAttr("action"); 
    jQuery('form').removeClass("submit-type-ajax"); 
    jQuery('#field_name_ehtl').attr("autocomplete", "off");
    jQuery('#field_name_ehtl').attr("onclick", "clear_value()");
    jQuery('#field_name_ehtl').attr("oninput", "typingAction()");
    jQuery('#field_date_checkin_ehtl').attr("autocomplete", "off");
    jQuery('#field_date_checkin_ehtl').removeAttr("maxlength");
    jQuery('#field_date_checkout_ehtl').attr("autocomplete", "off");
    jQuery(".elementor-labels-above").append('<input type="hidden" id="resposta" value="">');
    jQuery(".elementor-labels-above").append('<input type="hidden" id="date_checkin_value" value="">');

    jQuery("#field_date_checkin_ehtl").mask("00/00/0000");
    jQuery("#field_date_checkout_ehtl").mask("00/00/0000"); 
 
 function formatReal(numero) {
    var tmp = numero + '';
    var neg = false;

    if (tmp - (Math.round(numero)) == 0) {
        tmp = tmp + '00';        
    }

    if (tmp.indexOf(".")) {
        tmp = tmp.replace(".", "");
    }

    if (tmp.indexOf("-") == 0) {
        neg = true;
        tmp = tmp.replace("-", "");
    }

    if (tmp.length == 1) tmp = "0" + tmp

    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");

    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    if (tmp.length > 9)
        tmp = tmp.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");

    if (tmp.length = 12)
        tmp = tmp.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4");

    if (tmp.length > 12)
        tmp = tmp.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3.$4,$5");

    if (tmp.indexOf(".") == 0) tmp = tmp.replace(".", "");
    if (tmp.indexOf(",") == 0) tmp = tmp.replace(",", "0,");

    return (neg ? '-' + tmp : tmp);
}

function set_reserva_padrao(){
    jQuery("#button_apto_reserva").html('<div class="elementor-widget-container"><div class="elementor-button-wrapper"><a class="elementor-button elementor-size-sm elementor-animation-bob" role="button"><span class="elementor-button-content-wrapper"><img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="width: 8%;"></span></a></div></div>');

    var NOME_HOTEL_SEARCH = localStorage.getItem("NOME_HOTEL_SEARCH");
    var NOME_APTO_SEARCH = localStorage.getItem("APTO_SEARCH");
    var NOME_REGIME_SEARCH = localStorage.getItem("REGIME_SEARCH");
    var IMG_SEARCH = localStorage.getItem("IMG_SEARCH");
    var PRICE_SEARCH = localStorage.getItem("PRICE_SEARCH");
    var NIGHTS_SEARCH = localStorage.getItem("NIGHTS_SEARCH");
    var CHECKIN = localStorage.getItem("CHECKIN").replace("-", "/").replace("-", "/");
    var CHECKOUT = localStorage.getItem("CHECKOUT").replace("-", "/").replace("-", "/");
    var ADULTOS = localStorage.getItem("ADULTS_SEARCH");
    var CRIANCAS = localStorage.getItem("CHILDS_SEARCH");
    var PRICE_FORMATTED_SEARCH = localStorage.getItem("PRICE_FORMATTED_SEARCH");

    var data = {
        'action': 'send_data_ehtl',
        'nome_hotel_search': NOME_HOTEL_SEARCH,
        'img_search': IMG_SEARCH,
        'price_search': PRICE_SEARCH
    };

    jQuery.ajax({
        type: "POST",
        url: wp_ajax_ehtl.ajaxurl,
        data: { action: "send_data_ehtl", nome_hotel_search: NOME_HOTEL_SEARCH, img_search: IMG_SEARCH, price_search: PRICE_SEARCH },
        success: function( data ) {
            var id = data.slice(0,-1); 

            jQuery.ajax({
                type: "POST",
                url: "/wp-content/plugins/ehtl-hoteis-integracao/includes/ajax-periodo.php",
                data: {CHECKIN:CHECKIN, CHECKOUT:CHECKOUT, NOME_APTO_SEARCH:NOME_APTO_SEARCH, NOME_REGIME_SEARCH:NOME_REGIME_SEARCH, PRICE_FORMATTED_SEARCH:PRICE_FORMATTED_SEARCH, ADULTOS:ADULTOS, CRIANCAS:CRIANCAS, TOKEN_SEARCH:localStorage.getItem("TOKEN_SEARCH"), CODE_HOTEL_SEARCH:localStorage.getItem("CODE_HOTEL_SEARCH"), CODE_ROOM_SEARCH:localStorage.getItem("CODE_ROOM_SEARCH"), CHECKIN_SEARCH:localStorage.getItem("CHECKIN_SEARCH"), NIGHTS_SEARCH:localStorage.getItem("NIGHTS_SEARCH"), ADULTS_SEARCH:localStorage.getItem("ADULTS_SEARCH"), CHILDS_SEARCH:localStorage.getItem("CHILDS_SEARCH"), CHILDREN_SEARCH:localStorage.getItem("CHILDREN_SEARCH"), POLITICA:localStorage.getItem("POLITICA"), PARCELAS:localStorage.getItem("MAX_PARCELAS")}, 
                success: function(result){ 
                    jQuery.get('/?post_type=product&add-to-cart=' + id +'&quantity=' + NIGHTS_SEARCH, function(response) { 
                        window.location.href = '/checkout-page';
                    });
                }

            });

        }
    });
}

    function set_dados_hotel_integ(id){ 
        jQuery("#button_details_ehtl_"+id).html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="width: 5%;margin: 0 auto;">');

        localStorage.setItem("VERIFICA_ORIGEM", 1);
        localStorage.setItem("TOKEN_SEARCH", jQuery(".TOKEN_SEARCH").val()); 
        localStorage.setItem("CODE_HOTEL_SEARCH", jQuery("#CODE_HOTEL_SEARCH"+id).val());
        localStorage.setItem("CODE_ROOM_SEARCH", jQuery("#CODE_ROOM_SEARCH"+id).val());
        localStorage.setItem("CHECKIN_SEARCH", jQuery("#CHECKIN_SEARCH"+id).val());
        localStorage.setItem("NIGHTS_SEARCH", jQuery("#NIGHTS_SEARCH"+id).val());
        localStorage.setItem("ROOMS_SEARCH", jQuery("#ROOMS_SEARCH"+id).val());
        localStorage.setItem("ADULTS_SEARCH", jQuery("#ADULTS_SEARCH"+id).val());
        localStorage.setItem("CHILDS_SEARCH", jQuery("#CHILDS_SEARCH"+id).val());
        localStorage.setItem("CHILDREN_SEARCH", jQuery("#CHILDREN_SEARCH"+id).val());
        localStorage.setItem("APTO_SEARCH", jQuery("#APTO_SEARCH"+id).val());
        localStorage.setItem("CATEGORY_SEARCH", jQuery("#CATEGORY_SEARCH"+id).val());
        localStorage.setItem("REGIME_SEARCH", jQuery("#REGIME_SEARCH"+id).val());
        localStorage.setItem("PRICE_SEARCH", jQuery("#PRICE_SEARCH"+id).val()); 
        localStorage.setItem("PRICE_FORMATTED_SEARCH", jQuery("#PRICE_FORMATTED_SEARCH"+id).val()); 
        localStorage.setItem("IMG_SEARCH", jQuery("#IMG_SEARCH"+id).val()); 
        localStorage.setItem("NOME_HOTEL_SEARCH", jQuery("#NOME_HOTEL_SEARCH"+id).val()); 

        window.location.href = '/detalhes-hotel';

        
    }
function replaceSpecialChars(str) {
    str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
    str = str.replace(/[àáâãäå]/, "a");
    str = str.replace(/[ÈÉÊË]/, "E");
    str = str.replace(/[ÍÌ]/, "I");
    str = str.replace(/[íì]/, "i");
    str = str.replace(/[ÒÓÔÕ]/, "O");
    str = str.replace(/[òóôõ]/, "o");
    str = str.replace(/[Ú]/, "U");
    str = str.replace(/[ú]/, "u");
    str = str.replace(/[Ç]/, "C");
    str = str.replace(/[ç]/, "c");

    // o resto

    return str;
} 

var temporiza;
jQuery("#field_name_ehtl").on("input", function(){
   clearTimeout(temporiza);
   temporiza = setTimeout(function(){
      pesquisar_destinos_ehtl();
   }, 100);
});

function clear_value(){
    jQuery("#field_name_ehtl").val('');
    jQuery('.dados').attr('style', 'display:none;');  
}

function pesquisar_destinos_ehtl(){ 

    var destino = jQuery("#field_name_ehtl").val();

    var contador = 0;
    if (destino.length >= 3) {  
        jQuery('.dados').attr('style', 'background-color:#fff;min-height: 25px;width: 24%;position: absolute;margin-top: 9%;z-index: 9;');  
        jQuery('.dados ul').html('<li style="border-bottom: 1px solid #ddd;padding: 5px 12px 5px 12px;font-size: 13px;font-family: &quot;Trebuchet MS&quot;, sans-serif;cursor:pointer;list-style:none;"><img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height: 10px;margin-right: 3px;"> Aguarde, buscando resultados...</li>');

        console.log(destino);
        var data = {
            'action': 'get_destinos_ehtl',
            'local': jQuery("#field_name_ehtl").val()
        };

        jQuery.ajax({
            url : wp_ajax_ehtl.ajaxurl,
            type : 'post',
            data : data,
            success : function( resposta ) {
                var escrever = jQuery.parseJSON(resposta.slice(0,-1));
                
                // RECEBE EM JSON A RESPOSTA DO ARQUIVO PHP
                // ESCREVE CADA ITEM SEPARADAMENTE, ATRAVÉS DO EACH, RECEBENDO OS DADOS SIGLA, DESTINO E ENDEREÇO
                var contador = 1;
                var retorno = '';
                jQuery(escrever).each(function(i, item) {

                    var destino_pesquisar = item.sigla;
                    var codigo_pesquisar = replaceSpecialChars(destino_pesquisar.toUpperCase());

                    var valor_pesquisado = replaceSpecialChars(destino.toUpperCase());

                    console.log(codigo_pesquisar+' ++++ '+valor_pesquisado);
                    if (codigo_pesquisar.indexOf(valor_pesquisado) != -1) {
						if(i < 3){
							contador = contador+1;
                        	retorno += "<li style='border-bottom: 1px solid #ddd;padding: 5px 12px 5px 12px;font-size: 13px;font-family: \"Trebuchet MS\", sans-serif;cursor:pointer;list-style:none;' onclick=\"selecionar_destino_ehtl('"+item.sigla+"\',\'"+item.destino+"\',\'"+item.end+"')\"  style='line-height: 20px;font-size: 14px;' id='sigla' value='"+item.destino+"'>"+item.sigla+""+item.end+"</li>";
						}
                    } 
                });
				
				if(contador < 2){
                	jQuery('.dados').attr('style', 'background-color:#fff;min-height: 25px;width: 24%;position: absolute;margin-top: 9%;z-index: 9;');
				}else{
					jQuery('.dados').attr('style', 'background-color:#fff;min-height: 25px;width: 24%;position: absolute;margin-top: 15%;z-index: 9;');
				}
                jQuery(".dados ul").html(retorno);
            }
        }); 
    }else{
		
        jQuery('.dados').attr('style', 'background-color:#fff;min-height: 25px;width: 24%;position: absolute;margin-top: 9%;z-index: 9;');  
        jQuery('.dados ul').html('<li style="border-bottom: 1px solid #ddd;padding: 5px 12px 5px 12px;font-size: 13px;font-family: &quot;Trebuchet MS&quot;, sans-serif;cursor:pointer;list-style:none;">Digite pelo menos 3 letras.</li>');
    }
}

function selecionar_destino_ehtl(destino, id, end){
    jQuery("#field_name_ehtl").val(destino);

    localStorage.setItem("DESTINO_EHTL", destino);
    localStorage.setItem("ID_DESTINO_EHTL", id);

    jQuery('.dados').attr('style', 'display:none;');  
}

function search_hoteis_post(){

    var destino = jQuery("#destino").val();
    jQuery.ajax({
        type: "POST",
        url: "/wp-content/plugins/ehtl-hoteis-integracao/includes/ajax-select-destino.php", 
        data: {destino:destino},
        success: function(response){   

            var destination = response;

            var data_inicio =  jQuery("#checkin").val();
            var data_final = jQuery("#checkout").val();
            var adt = jQuery("#adt").val();
            var chd = jQuery("#chd").val();  

            if (destination == '') { 
                jQuery(".elementor-alert").attr("style", "width: 100%;padding: 8px;color: #b70606;");
                jQuery(".elementor-alert").html('<i class="far fa-times"></i> É preciso selecionar um destino.');
            }else if (data_inicio == '') {
                jQuery(".elementor-alert").attr("style", "width: 100%;padding: 8px;color: #b70606;");
                jQuery(".elementor-alert").html('<i class="far fa-times"></i> É preciso selecionar uma data de check-in.');
            }else if (data_final == '') {
                jQuery(".elementor-alert").attr("style", "width: 100%;padding: 8px;color: #b70606;");
                jQuery(".elementor-alert").html('<i class="far fa-times"></i> É preciso selecionar uma data de check-out.');
            }else{  
                jQuery(".elementor-alert").attr("style", "display:none"); 

                jQuery('.submit_form_search_ehtl_destaques').html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height:10px;margin-right:3px;"> Buscando');   

                var data = { 
                    destination: destination,
                    data_inicio:data_inicio, 
                    data_final:data_final, 
                    adt:adt, 
                    chd:chd 
                }; 
         
                localStorage.setItem("ID_DESTINO_EHTL", destination);
                localStorage.setItem("CHECKIN", data_inicio.replace("/", "-").replace("/", "-"));
                localStorage.setItem("CHECKOUT", data_final.replace("/", "-").replace("/", "-"));
                localStorage.setItem("ADT", adt);
                localStorage.setItem("CHD", chd);
                window.location.href = '/busca-ehtl-hoteis';
            } 
        }
    });
}

function gravar_hoteis_ehtl(){ 

    var destination = jQuery("#field_name_ehtl").val();
    var data_inicio =  jQuery("#field_date_checkin_ehtl").val();
    var data_final = jQuery("#field_date_checkout_ehtl").val();
    var adt = jQuery("#field_adults_ehtl").val();
    var chd = jQuery("#field_childs_ehtl").val(); 
    var api_key = jQuery("#api_key").val(); 

    if (destination == '') {
        jQuery(".elementor-labels-above").append('<div class="elementor-alert" role="alert" style="width: 100%;padding: 8px;color: #b70606;"><i class="far fa-times"></i> É preciso selecionar um destino.</div>');
        jQuery(".elementor-alert2").attr("style", "display:none");
        jQuery(".elementor-alert3").attr("style", "display:none");
    }else if (data_inicio == '') {
        jQuery(".elementor-alert").attr("style", "display:none");
        jQuery(".elementor-labels-above").append('<div class="elementor-alert2" role="alert" style="width: 100%;padding: 8px;color: #b70606;"><i class="far fa-times"></i> É preciso selecionar uma data de checkin.</div>');
        jQuery(".elementor-alert3").attr("style", "display:none");
    }else if (data_final == '') {
        jQuery(".elementor-alert").attr("style", "display:none");
        jQuery(".elementor-labels-above").append('<div class="elementor-alert3" role="alert" style="width: 100%;padding: 8px;color: #b70606;"><i class="far fa-times"></i> É preciso selecionar uma data de checkout.</div>');
        jQuery(".elementor-alert2").attr("style", "display:none");
    }else if (adt == '') {
        jQuery(".elementor-alert").attr("style", "display:none");
        jQuery(".elementor-labels-above").append('<div class="elementor-alert3" role="alert" style="width: 100%;padding: 8px;color: #b70606;"><i class="far fa-times"></i> É preciso selecionar uma quantidade de adultos.</div>');
        jQuery(".elementor-alert2").attr("style", "display:none");
    }else if (chd == '') {
        jQuery(".elementor-alert").attr("style", "display:none");
        jQuery(".elementor-labels-above").append('<div class="elementor-alert3" role="alert" style="width: 100%;padding: 8px;color: #b70606;"><i class="far fa-times"></i> É preciso selecionar uma quantidade de crianças.</div>');
        jQuery(".elementor-alert2").attr("style", "display:none");
    }else{ 
        jQuery(".elementor-message-success").attr("style", "display:none");
        jQuery(".elementor-alert").attr("style", "display:none");
        jQuery(".elementor-alert2").attr("style", "display:none");
        jQuery(".elementor-alert3").attr("style", "display:none");

        jQuery('.submit_form_search_ehtl').html('<img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="height:10px;margin-right:3px;"> '); 

        var url_ajax_hoteis = "/wp-content/plugins/form-hoteis-integracao/includes/ajax_ehtl_search.php"; 

        var data = { 
            destination: destination,
            data_inicio:data_inicio, 
            data_final:data_final, 
            adt:adt, 
            chd:chd 
        }; 

//         var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.traveltec.com.br/serv/hotels",
//   "method": "POST",
//   "headers": {
//     "content-type": "application/json",
//     "cache-control": "no-cache",
//     "postman-token": "db5777f7-50d2-9fe4-7762-4638e718fb78"
//   },
//   "processData": false,
//   "data": "{\n\t\"destino\": \""+destination+"\",\n\t\"checkin\": \""+data_inicio+"\",\n\t\"checkout\": \""+data_final+"\",\n\t\"adt\": \""+adt+"\",\n\t\"chd\": \""+chd+"\"\n}"
// }

// jQuery.ajax(settings).done(function (response) {
//     jQuery('.submit_form_search').html('Buscar');  
//     jQuery(".jet-listing-grid").html(response);
// });
localStorage.setItem("DESTINATION", destination);
localStorage.setItem("CHECKIN", data_inicio.replace("/", "-").replace("/", "-"));
localStorage.setItem("CHECKOUT", data_final.replace("/", "-").replace("/", "-"));
localStorage.setItem("ADT", adt);
localStorage.setItem("CHD", chd);
window.location.href = '/busca-ehtl-hoteis';

    }

}

function list_destaques_results_ehtl(){

    var destination = jQuery("#destino").val();;

    var adt = "2";
    var chd = "0";

    jQuery.ajax({
    type: "POST",
    url: "/wp-content/plugins/ehtl-hoteis-integracao/includes/ajax-import-destaques.php", 
    data: {destino: destination, adt: adt, chd:chd},
    success: function(response){   
        if (response == 0) {  
                jQuery('#search_results_hotel').html('Nenhum resultado encontrado.'); 

        }else{ 
             
                var html = localStorage.getItem("HTML_BLOCK");

                var dados = response.split("+++++++"); 

                response = JSON.parse(dados[0]);  

                var retorno = '';

                jQuery(response).each(function (i, item) {

                    if (i < 3) { 
                        var style;
                        if (item.imagem_hotel == "https://mod01.traveltec.com.br/wp-includes/images/media/default.png") {
                            style = "height: 200px;width: 171px;margin: 0 auto;";
                        }

                        retorno += '<div class="jet-listing-grid__item jet-listing-dynamic-post-'+item.id+'" data-post-id="'+item.id+'" id="'+item.id+'_div_listing" style="padding-bottom:15px;"><input type="hidden" id="POLITICA'+item.id+'" value="'+item.POLITICA+'"> <input type="hidden" id="PARCELAS'+item.id+'" value="'+item.PARCELAS+'"> <input type="hidden" class="TOKEN_SEARCH" value="'+item.TOKEN_SEARCH+'"> <input type="hidden" id="CODE_HOTEL_SEARCH'+item.id+'" value="'+item.CODE_HOTEL_SEARCH+'"> <input type="hidden" id="CODE_ROOM_SEARCH'+item.id+'" value="'+item.CODE_ROOM_SEARCH+'"> <input type="hidden" id="CHECKIN_SEARCH'+item.id+'" value="'+item.CHECKIN_SEARCH+'"> <input type="hidden" id="NIGHTS_SEARCH'+item.id+'" value="'+item.NIGHTS_SEARCH+'"> <input type="hidden" id="ADULTS_SEARCH'+item.id+'" value="'+item.ADULTS_SEARCH+'"> <input type="hidden" id="CHILDS_SEARCH'+item.id+'" value="'+item.CHILDS_SEARCH+'"> <input type="hidden" id="CHILDREN_SEARCH'+item.id+'" value="'+item.CHILDREN_SEARCH+'"> <input type="hidden" id="URL_SEARCH'+item.id+'" value="'+item.URL_SEARCH+'"> <input type="hidden" id="APTO_SEARCH'+item.id+'" value="'+item.APTO_SEARCH+'"> <input type="hidden" id="CATEGORY_SEARCH'+item.id+'" value="'+item.CATEGORY_SEARCH+'"> <input type="hidden" id="REGIME_SEARCH'+item.id+'" value="'+item.REGIME_SEARCH+'"> <input type="hidden" id="PRICE_SEARCH'+item.id+'" value="'+item.PRICE_SEARCH+'"> <input type="hidden" id="PRICE_FORMATTED_SEARCH'+item.id+'" value="'+item.PRICE_FORMATTED_SEARCH+'"> <input type="hidden" id="IMG_SEARCH'+item.id+'" value="'+item.IMG_SEARCH+'"> <input type="hidden" id="NOME_HOTEL_SEARCH'+item.id+'" value="'+item.NOME_HOTEL_SEARCH+'"> <input type="hidden" id="VERIFICA_ORIGEM" value="1"><style>.elementor-525 .elementor-element.elementor-element-d8ac0c1{border-style:solid;border-width:1px 1px 1px 1px;border-color:#e5c202;box-shadow:-3px 0px 10px 0px rgba(0,0,0,0.5);transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;}.elementor-525 .elementor-element.elementor-element-d8ac0c1 > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-525 .elementor-element.elementor-element-e5abed5 .jet-listing-dynamic-image{justify-content:flex-start;}.elementor-525 .elementor-element.elementor-element-e5abed5 .jet-listing-dynamic-image img{border-style:solid;border-width:3px 3px 3px 3px;border-color:#BFB9B9;}.elementor-525 .elementor-element.elementor-element-55ac40a .elementor-heading-title{color:#e5c202;font-size:30px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-e991c7e .elementor-heading-title{color:#e5c202;font-size:22px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-10d76b2:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap, .elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#F9F7F7;}.elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-element-populated{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;}.elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-element-populated > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-525 .elementor-element.elementor-element-6b4c952{text-align:center;color:#FFFFFF;font-family:"Roboto", Sans-serif;font-weight:bold;line-height:2.3em;}.elementor-525 .elementor-element.elementor-element-6b4c952 > .elementor-widget-container{background-color:#F1664A;border-style:solid;border-width:0px 0px 0px 0px;border-color:#453652;box-shadow:-2px 0px 10px 0px rgba(0,0,0,0.5);}.elementor-525 .elementor-element.elementor-element-b0f065e > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-9e25330{text-align:center;}.elementor-525 .elementor-element.elementor-element-9e25330 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-88959b3{text-align:center;}.elementor-525 .elementor-element.elementor-element-88959b3 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-32146b1{text-align:center;}.elementor-525 .elementor-element.elementor-element-32146b1 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-3388426{margin-top:0px;margin-bottom:10px;}.elementor-525 .elementor-element.elementor-element-ffb912e{column-gap:0px;text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-ffb912e > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-8b0f02f > .elementor-element-populated{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-7436fed{text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-6ade4a2{text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-6ade4a2 > .elementor-widget-container{margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-8eca408{text-align:center;}.elementor-525 .elementor-element.elementor-element-8eca408 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-133f70a{text-align:center;}.elementor-525 .elementor-element.elementor-element-133f70a .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-41cddc1{margin-top:0px;margin-bottom:0px;}.elementor-525 .elementor-element.elementor-element-859659a{text-align:center;}.elementor-525 .elementor-element.elementor-element-2320608{text-align:center;}.elementor-525 .elementor-element.elementor-element-8a3175a:not(.elementor-motion-effects-element-type-background), .elementor-525 .elementor-element.elementor-element-8a3175a > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#FFFFFF;}.elementor-525 .elementor-element.elementor-element-8a3175a{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin-top:10px;margin-bottom:10px;}.elementor-525 .elementor-element.elementor-element-8a3175a > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-bc-flex-widget .elementor-525 .elementor-element.elementor-element-38841d9.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-525 .elementor-element.elementor-element-38841d9.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-38841d9 > .elementor-element-populated{padding:6px 6px 6px 6px;}.elementor-525 .elementor-element.elementor-element-cda1fa6{text-align:right;}.elementor-525 .elementor-element.elementor-element-cda1fa6 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-bc-flex-widget .elementor-525 .elementor-element.elementor-element-f333d08.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-525 .elementor-element.elementor-element-f333d08.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field__content{color:#F1664A;font-size:26px;font-weight:600;text-align:left;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field .jet-listing-dynamic-field__inline-wrap{width:auto;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field .jet-listing-dynamic-field__content{width:auto;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field{justify-content:flex-start;}.elementor-525 .elementor-element.elementor-element-de715ac > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-6c96325{margin-top:0px;margin-bottom:0px;}.elementor-525 .elementor-element.elementor-element-95a2044 .elementor-button{font-family:"Roboto", Sans-serif;font-weight:500;fill:#FFFFFF;color:#FFFFFF;background-color:#F1664A;}@media(min-width:768px){.elementor-525 .elementor-element.elementor-element-f75e268{width:30%;}.elementor-525 .elementor-element.elementor-element-3e5984f{width:30%;}.elementor-525 .elementor-element.elementor-element-21520e2{width:39.66%;}.elementor-525 .elementor-element.elementor-element-c4fd80f{width:30%;}.elementor-525 .elementor-element.elementor-element-8b0f02f{width:29.66%;}.elementor-525 .elementor-element.elementor-element-2570dd9{width:40%;}.elementor-525 .elementor-element.elementor-element-38841d9{width:49.998%;}.elementor-525 .elementor-element.elementor-element-f333d08{width:50%;}}</style><div data-elementor-type="jet-listing-items" data-elementor-id="525" class="elementor elementor-525" data-elementor-settings="[]"><div class="elementor-section-wrap"><section class="elementor-section elementor-top-section elementor-element elementor-element-d8ac0c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default 1920_section" data-id="d8ac0c1" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-15ed5ad" data-id="15ed5ad" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-e5abed5 elementor-widget elementor-widget-jet-listing-dynamic-image" data-id="e5abed5" data-element_type="widget" id="img_post" data-widget_type="jet-listing-dynamic-image.default"><div class="elementor-widget-container"><div class="jet-listing jet-listing-dynamic-image"><img width="840" height="500" src="'+item.imagem_hotel+'" class="attachment-full size-full" alt="'+item.NOME_HOTEL_SEARCH+'" loading="lazy" style="'+style+'"></div></div></div></div></div></div> <div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-97e90eb" data-id="97e90eb" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-55ac40a elementor-widget elementor-widget-heading" data-id="55ac40a" data-element_type="widget" id="title_post" data-widget_type="heading.default"><div class="elementor-widget-container"><h2 class="elementor-heading-title elementor-size-default" style="text-align:left;font-size: 23px;">'+item.NOME_HOTEL_SEARCH+'</h2> </div></div></div></div></div> <div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-10d76b2" data-id="10d76b2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-6b4c952 1920_periodo elementor-widget elementor-widget-text-editor" data-id="6b4c952" data-element_type="widget" data-widget_type="text-editor.default"><div class="elementor-widget-container"></div></div><section class="elementor-section elementor-inner-section elementor-element elementor-element-b0f065e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b0f065e" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f75e268" data-id="f75e268" data-element_type="column" style="width:33%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-9e25330 elementor-widget elementor-widget-heading" data-id="9e25330" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><p class="elementor-heading-title elementor-size-default">Apto</p></div></div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3e5984f" data-id="3e5984f" data-element_type="column" style="width:33%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-88959b3 elementor-widget elementor-widget-heading" data-id="88959b3" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Categoria</h4></div></div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-21520e2" data-id="21520e2" data-element_type="column" style="width:33%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-32146b1 elementor-widget elementor-widget-heading" data-id="32146b1" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Regime</h4></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-3388426 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3388426" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c4fd80f" data-id="c4fd80f" data-element_type="column" style="width:33%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-ffb912e 1920_apto elementor-widget elementor-widget-text-editor" data-id="ffb912e" data-element_type="widget" data-widget_type="text-editor.default">'+item.nome_apto+'</div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8b0f02f" data-id="8b0f02f" data-element_type="column" style="width:33%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-7436fed 1920_categoria elementor-widget elementor-widget-text-editor" data-id="7436fed" data-element_type="widget" data-widget_type="text-editor.default">'+item.categoria+'</div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2570dd9" data-id="2570dd9" data-element_type="column" style="width:33%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-6ade4a2 1920_regime elementor-widget elementor-widget-text-editor" data-id="6ade4a2" data-element_type="widget" data-widget_type="text-editor.default">'+item.regime+'</div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-dafda3e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="dafda3e" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-afadb75" data-id="afadb75" data-element_type="column" style="width:50%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-8eca408 elementor-widget elementor-widget-heading" data-id="8eca408" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Adultos</h4></div></div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e9b4c36" data-id="e9b4c36" data-element_type="column" style="width:50%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-133f70a elementor-widget elementor-widget-heading" data-id="133f70a" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Crianças</h4></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-41cddc1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="41cddc1" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0656f03" data-id="0656f03" data-element_type="column" style="width:50%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-859659a 1920_adt elementor-widget elementor-widget-text-editor" data-id="859659a" data-element_type="widget" data-widget_type="text-editor.default">'+item.qtd_adt+'</div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ac6acbd" data-id="ac6acbd" data-element_type="column" style="width:50%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-2320608 1920_chd elementor-widget elementor-widget-text-editor" data-id="2320608" data-element_type="widget" data-widget_type="text-editor.default">'+item.qtd_chd+'</div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-8a3175a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8a3175a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-38841d9" data-id="38841d9" data-element_type="column" style="width:50%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-cda1fa6 elementor-widget elementor-widget-heading" data-id="cda1fa6" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h5 class="elementor-heading-title elementor-size-default">a partir de R$ </h5></div></div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f333d08" data-id="f333d08" data-element_type="column" style="width:50%"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-de715ac 1920_valor elementor-widget elementor-widget-jet-listing-dynamic-field" data-id="de715ac" data-element_type="widget" data-widget_type="jet-listing-dynamic-field.default"><div class="elementor-widget-container"><div class="jet-listing jet-listing-dynamic-field display-inline"><div class="jet-listing-dynamic-field__inline-wrap"><div class="jet-listing-dynamic-field__content" style="float:right !important;">'+item.valor+'</div></div></div></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-6c96325 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6c96325" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7720d5b" data-id="7720d5b" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-95a2044 elementor-align-center button_reserva_1920 elementor-widget elementor-widget-button" data-id="95a2044" data-element_type="widget" data-widget_type="button.default"><div class="elementor-widget-container"><div class="elementor-button-wrapper"><a onclick="set_dados_hotel_integ('+item.id+')" class="elementor-button elementor-size-sm" role="button" style="cursor:pointer;color:#fff;" id="button_details_ehtl_'+item.id+'"> <span class="elementor-button-content-wrapper"> <span class="elementor-button-text">Ver detalhes</span> </span> </a></div></div></div></div></div></div></section></div></div></div></section></div></div></div>'; 
                    }
                });  
                    jQuery("#search_results_hotel").html(retorno);   

        }
    }

    });
}

function list_results_ehtl(){ 

    var destination = localStorage.getItem("ID_DESTINO_EHTL");
    var data_inicio =  localStorage.getItem("CHECKIN").replace("-", "/").replace("-", "/");
    var data_final = localStorage.getItem("CHECKOUT").replace("-", "/").replace("-", "/");
    var adt = localStorage.getItem("ADT");
    var chd = localStorage.getItem("CHD");

    jQuery.ajax({
    type: "POST",
    url: "/wp-content/plugins/ehtl-hoteis-integracao/includes/ajax-import.php", 
    data: {destino: destination, checkin: data_inicio, checkout:data_final, adt: adt, chd:chd},
    success: function(response){  
jQuery(".jet-listing-grid__items").html('');    
        if (response == 0) { 
            jQuery('.grid-col-desk-1>.jet-listing-grid__item').attr('style', 'display:none'); 
                jQuery('.jet-listing-grid').html('Nenhum resultado encontrado.');
                jQuery('.jet-listing-grid').attr('style', 'text-align:center;');
                jQuery('.div_loader').attr('style', 'display:none'); 

        }else{ 
             
                var html = localStorage.getItem("HTML_BLOCK");

                var dados = response.split("+++++++"); 

                response = JSON.parse(dados[0]);  

                var retorno = '';

                jQuery(response).each(function (i, item) {

                    if (i < 20) { 
                        var style;
                        if (item.imagem_hotel == "https://mod01.traveltec.com.br/wp-includes/images/media/default.png") {
                            style = "height: 200px;width: 171px;margin: 0 auto;";
                        }

                        retorno += '<div class="jet-listing-grid__item jet-listing-dynamic-post-'+item.id+'" data-post-id="'+item.id+'" id="'+item.id+'_div_listing"><input type="hidden" id="POLITICA'+item.id+'" value="'+item.POLITICA+'"> <input type="hidden" id="PARCELAS'+item.id+'" value="'+item.PARCELAS+'"> <input type="hidden" class="TOKEN_SEARCH" value="'+item.TOKEN_SEARCH+'"> <input type="hidden" id="CODE_HOTEL_SEARCH'+item.id+'" value="'+item.CODE_HOTEL_SEARCH+'"> <input type="hidden" id="CODE_ROOM_SEARCH'+item.id+'" value="'+item.CODE_ROOM_SEARCH+'"> <input type="hidden" id="CHECKIN_SEARCH'+item.id+'" value="'+item.CHECKIN_SEARCH+'"> <input type="hidden" id="NIGHTS_SEARCH'+item.id+'" value="'+item.NIGHTS_SEARCH+'"> <input type="hidden" id="ADULTS_SEARCH'+item.id+'" value="'+item.ADULTS_SEARCH+'"> <input type="hidden" id="CHILDS_SEARCH'+item.id+'" value="'+item.CHILDS_SEARCH+'"> <input type="hidden" id="CHILDREN_SEARCH'+item.id+'" value="'+item.CHILDREN_SEARCH+'"> <input type="hidden" id="URL_SEARCH'+item.id+'" value="'+item.URL_SEARCH+'"> <input type="hidden" id="APTO_SEARCH'+item.id+'" value="'+item.APTO_SEARCH+'"> <input type="hidden" id="CATEGORY_SEARCH'+item.id+'" value="'+item.CATEGORY_SEARCH+'"> <input type="hidden" id="REGIME_SEARCH'+item.id+'" value="'+item.REGIME_SEARCH+'"> <input type="hidden" id="PRICE_SEARCH'+item.id+'" value="'+item.PRICE_SEARCH+'"> <input type="hidden" id="PRICE_FORMATTED_SEARCH'+item.id+'" value="'+item.PRICE_FORMATTED_SEARCH+'"> <input type="hidden" id="IMG_SEARCH'+item.id+'" value="'+item.IMG_SEARCH+'"> <input type="hidden" id="NOME_HOTEL_SEARCH'+item.id+'" value="'+item.NOME_HOTEL_SEARCH+'"> <input type="hidden" id="VERIFICA_ORIGEM" value="1"><style>.elementor-525 .elementor-element.elementor-element-d8ac0c1{border-style:solid;border-width:1px 1px 1px 1px;border-color:#e5c202;box-shadow:-3px 0px 10px 0px rgba(0,0,0,0.5);transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;}.elementor-525 .elementor-element.elementor-element-d8ac0c1 > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-525 .elementor-element.elementor-element-e5abed5 .jet-listing-dynamic-image{justify-content:flex-start;}.elementor-525 .elementor-element.elementor-element-e5abed5 .jet-listing-dynamic-image img{border-style:solid;border-width:3px 3px 3px 3px;border-color:#BFB9B9;}.elementor-525 .elementor-element.elementor-element-55ac40a .elementor-heading-title{color:#e5c202;font-size:30px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-e991c7e .elementor-heading-title{color:#e5c202;font-size:22px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-10d76b2:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap, .elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#F9F7F7;}.elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-element-populated{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;}.elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-element-populated > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-525 .elementor-element.elementor-element-6b4c952{text-align:center;color:#FFFFFF;font-family:"Roboto", Sans-serif;font-weight:bold;line-height:2.3em;}.elementor-525 .elementor-element.elementor-element-6b4c952 > .elementor-widget-container{background-color:#F1664A;border-style:solid;border-width:0px 0px 0px 0px;border-color:#453652;box-shadow:-2px 0px 10px 0px rgba(0,0,0,0.5);}.elementor-525 .elementor-element.elementor-element-b0f065e > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-9e25330{text-align:center;}.elementor-525 .elementor-element.elementor-element-9e25330 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-88959b3{text-align:center;}.elementor-525 .elementor-element.elementor-element-88959b3 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-32146b1{text-align:center;}.elementor-525 .elementor-element.elementor-element-32146b1 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-3388426{margin-top:0px;margin-bottom:10px;}.elementor-525 .elementor-element.elementor-element-ffb912e{column-gap:0px;text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-ffb912e > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-8b0f02f > .elementor-element-populated{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-7436fed{text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-6ade4a2{text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-6ade4a2 > .elementor-widget-container{margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-8eca408{text-align:center;}.elementor-525 .elementor-element.elementor-element-8eca408 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-133f70a{text-align:center;}.elementor-525 .elementor-element.elementor-element-133f70a .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-41cddc1{margin-top:0px;margin-bottom:0px;}.elementor-525 .elementor-element.elementor-element-859659a{text-align:center;}.elementor-525 .elementor-element.elementor-element-2320608{text-align:center;}.elementor-525 .elementor-element.elementor-element-8a3175a:not(.elementor-motion-effects-element-type-background), .elementor-525 .elementor-element.elementor-element-8a3175a > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#FFFFFF;}.elementor-525 .elementor-element.elementor-element-8a3175a{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin-top:10px;margin-bottom:10px;}.elementor-525 .elementor-element.elementor-element-8a3175a > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-bc-flex-widget .elementor-525 .elementor-element.elementor-element-38841d9.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-525 .elementor-element.elementor-element-38841d9.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-38841d9 > .elementor-element-populated{padding:6px 6px 6px 6px;}.elementor-525 .elementor-element.elementor-element-cda1fa6{text-align:right;}.elementor-525 .elementor-element.elementor-element-cda1fa6 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-bc-flex-widget .elementor-525 .elementor-element.elementor-element-f333d08.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-525 .elementor-element.elementor-element-f333d08.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field__content{color:#F1664A;font-size:26px;font-weight:600;text-align:left;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field .jet-listing-dynamic-field__inline-wrap{width:auto;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field .jet-listing-dynamic-field__content{width:auto;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field{justify-content:flex-start;}.elementor-525 .elementor-element.elementor-element-de715ac > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-6c96325{margin-top:0px;margin-bottom:0px;}.elementor-525 .elementor-element.elementor-element-95a2044 .elementor-button{font-family:"Roboto", Sans-serif;font-weight:500;fill:#FFFFFF;color:#FFFFFF;background-color:#F1664A;}@media(max-width:500px){.elementor-525 .elementor-element.elementor-element-f75e268, .elementor-525 .elementor-element-3e5984f, .elementor-525 .elementor-element-21520e2, .elementor-525 .elementor-element-c4fd80f, .elementor-525 .elementor-element-8b0f02f, .elementor-525 .elementor-element-2570dd9{width:33%;} .elementor-525 .elementor-element.elementor-element-afadb75, .elementor-525 .elementor-element-133f70a, .elementor-525 .elementor-element-2320608, .elementor-525 .elementor-element-e9b4c36, .elementor-525 .elementor-element-0656f03, .elementor-525 .elementor-element-ac6acbd{width:50%} .elementor-element-38841d9{width:50% !important;} .elementor-element-f333d08{width:35% !important;}} @media(min-width:768px){.elementor-525 .elementor-element.elementor-element-f75e268{width:30%;}  .elementor-525 .elementor-element.elementor-element-3e5984f{width:30%;}.elementor-525 .elementor-element.elementor-element-21520e2{width:39.66%;}.elementor-525 .elementor-element.elementor-element-c4fd80f{width:30%;}.elementor-525 .elementor-element.elementor-element-8b0f02f{width:29.66%;}.elementor-525 .elementor-element.elementor-element-2570dd9{width:40%;}.elementor-525 .elementor-element.elementor-element-38841d9{width:49.998%;}.elementor-525 .elementor-element.elementor-element-f333d08{width:50%;}}</style><div data-elementor-type="jet-listing-items" data-elementor-id="525" class="elementor elementor-525" data-elementor-settings="[]"><div class="elementor-section-wrap"><section class="elementor-section elementor-top-section elementor-element elementor-element-d8ac0c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default 1920_section" data-id="d8ac0c1" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-15ed5ad" data-id="15ed5ad" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-e5abed5 elementor-widget elementor-widget-jet-listing-dynamic-image" data-id="e5abed5" data-element_type="widget" id="img_post" data-widget_type="jet-listing-dynamic-image.default"><div class="elementor-widget-container"><div class="jet-listing jet-listing-dynamic-image"><img width="840" height="500" src="'+item.imagem_hotel+'" class="attachment-full size-full" alt="'+item.NOME_HOTEL_SEARCH+'" loading="lazy" style="'+style+'"></div></div></div></div></div><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-97e90eb" data-id="97e90eb" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-55ac40a elementor-widget elementor-widget-heading" data-id="55ac40a" data-element_type="widget" id="title_post" data-widget_type="heading.default"><div class="elementor-widget-container"><h2 class="elementor-heading-title elementor-size-default" style="text-align:left">'+item.NOME_HOTEL_SEARCH+'</h2> </div></div><div class="elementor-element elementor-element-58203a8 elementor-widget elementor-widget-text-editor" data-id="58203a8" data-element_type="widget" id="desc_post" data-widget_type="text-editor.default"><div class="elementor-widget-container" style="text-align:justify"> '+item.descricao_hotel+'... </div> </div></div></div><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-10d76b2" data-id="10d76b2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-6b4c952 1920_periodo elementor-widget elementor-widget-text-editor" data-id="6b4c952" data-element_type="widget" data-widget_type="text-editor.default"><div class="elementor-widget-container"></div></div><section class="elementor-section elementor-inner-section elementor-element elementor-element-b0f065e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b0f065e" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f75e268" data-id="f75e268" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-9e25330 elementor-widget elementor-widget-heading" data-id="9e25330" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><p class="elementor-heading-title elementor-size-default">Apto</p></div></div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3e5984f" data-id="3e5984f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-88959b3 elementor-widget elementor-widget-heading" data-id="88959b3" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Categoria</h4></div></div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-21520e2" data-id="21520e2" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-32146b1 elementor-widget elementor-widget-heading" data-id="32146b1" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Regime</h4></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-3388426 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3388426" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c4fd80f" data-id="c4fd80f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-ffb912e 1920_apto elementor-widget elementor-widget-text-editor" data-id="ffb912e" data-element_type="widget" data-widget_type="text-editor.default">'+item.nome_apto+'</div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8b0f02f" data-id="8b0f02f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-7436fed 1920_categoria elementor-widget elementor-widget-text-editor" data-id="7436fed" data-element_type="widget" data-widget_type="text-editor.default">'+item.categoria+'</div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2570dd9" data-id="2570dd9" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-6ade4a2 1920_regime elementor-widget elementor-widget-text-editor" data-id="6ade4a2" data-element_type="widget" data-widget_type="text-editor.default">'+item.regime+'</div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-dafda3e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="dafda3e" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-afadb75" data-id="afadb75" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-8eca408 elementor-widget elementor-widget-heading" data-id="8eca408" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Adultos</h4></div></div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e9b4c36" data-id="e9b4c36" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-133f70a elementor-widget elementor-widget-heading" data-id="133f70a" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Crianças</h4></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-41cddc1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="41cddc1" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0656f03" data-id="0656f03" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-859659a 1920_adt elementor-widget elementor-widget-text-editor" data-id="859659a" data-element_type="widget" data-widget_type="text-editor.default">'+item.qtd_adt+'</div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ac6acbd" data-id="ac6acbd" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-2320608 1920_chd elementor-widget elementor-widget-text-editor" data-id="2320608" data-element_type="widget" data-widget_type="text-editor.default">'+item.qtd_chd+'</div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-8a3175a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8a3175a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-38841d9" data-id="38841d9" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-cda1fa6 elementor-widget elementor-widget-heading" data-id="cda1fa6" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h5 class="elementor-heading-title elementor-size-default">a partir de R$ </h5></div></div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f333d08" data-id="f333d08" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-de715ac 1920_valor elementor-widget elementor-widget-jet-listing-dynamic-field" data-id="de715ac" data-element_type="widget" data-widget_type="jet-listing-dynamic-field.default"><div class="elementor-widget-container"><div class="jet-listing jet-listing-dynamic-field display-inline"><div class="jet-listing-dynamic-field__inline-wrap"><div class="jet-listing-dynamic-field__content" style="float:right !important;">'+item.valor+'</div></div></div></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-6c96325 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6c96325" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7720d5b" data-id="7720d5b" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-95a2044 elementor-align-center button_reserva_1920 elementor-widget elementor-widget-button" data-id="95a2044" data-element_type="widget" data-widget_type="button.default"><div class="elementor-widget-container"><div class="elementor-button-wrapper"><a onclick="set_dados_hotel_integ('+item.id+')" class="elementor-button elementor-size-sm" role="button" style="cursor:pointer;color:#fff;" id="button_details_ehtl_'+item.id+'"> <span class="elementor-button-content-wrapper"> <span class="elementor-button-text">Ver detalhes</span> </span> </a></div></div></div></div></div></div></section></div></div></div></section></div></div></div>'; 
                    }
                });  
                    jQuery(".jet-listing-grid__items").html(retorno);  
                    jQuery(".jet-listing-grid__items").append("<input type='hidden' id='id_busca' value='"+dados[1]+"'>");  
                    jQuery(".jet-listing-grid__items").append("<input type='hidden' id='totalPages' value='"+dados[2]+"'>"); 
                    jQuery(".jet-listing-grid").append("<input type='hidden' id='contador_click' value='0'>"); 
                    jQuery("#titulo_div_results").append('<h2 class="elementor-heading-title elementor-size-default" style="font-size: 18px;font-weight: 500;margin-top: 7px;">'+dados[3]+' acomodações encontradas</h2>');  

                    var span = "";
                    var contador = dados[2];
                    for (var i = 0; i < dados[2]; i++) {
                        var page = parseInt(i)+1;
                        if (i == jQuery("#contador_click").val()) { 
                            if (i == 0) {
                                span += '<a style="float:left;cursor: no-drop;color: #8c8c8c;" onclick=""><span><i class="fa fa-arrow-left" style="    color: #8c8c8c;"></i> Anterior</span></a>';
                            }else{
                                span += '<a style="float:left;cursor:pointer;" onclick="search_pagination_ehtl_minus('+i+', '+dados[1]+', '+dados[2]+')"><span><i class="fa fa-arrow-left" style="    color: #f1664a;"></i> Anterior</span></a>';
                            }
                        }else{
                            span += "";
                        }
                        if (i == jQuery("#contador_click").val()) {
                            span += '<a onclick="search_pagination_ehtl('+i+', '+dados[1]+', '+dados[2]+')"><span style="font-weight: 400;color: #f1664a;font-size: 23px;margin-right: 8px;" class="span span_pagination'+i+'">'+page+'</span></a>';
                        }else{
                            span += ''; 
                        }
                        if (i == jQuery("#contador_click").val()) { 
                            if (page == dados[2]) {
                                span += '<a style="float:right;cursor: no-drop;color: #8c8c8c;"><span> Próxima <i class="fa fa-arrow-right" style="    color: #8c8c8c;"></i></span></a>';
                            }else{
                                span += '<a style="float:right;cursor:pointer;" onclick="search_pagination_ehtl('+page+', '+dados[1]+', '+dados[2]+')"><span> Próxima <i class="fa fa-arrow-right" style="    color: #f1664a;"></i></span></a>';
                            }
                        }else{
                            span += "";
                        }
                    } 

                    jQuery(".jet-listing-grid__items").append('<div id="span_pages" style="width: 30%;margin: 17px auto;">'+span+'</div>'); 

                    jQuery('.jet-listing-grid').attr('style', '');
                    jQuery('.div_loader').attr('style', 'display:none');  

        }
    }

    });

}

function search_pagination_ehtl(page, id, totalpages){ 
    jQuery("#contador_click").val(page); 
    jQuery.ajax({
        type: "POST",
        url: "/wp-content/plugins/ehtl-hoteis-integracao/includes/ajax-pagination.php", 
        data: {page:page, id:id},
        success: function(response){  
            jQuery("#span_pages span").attr("style", "font-weight: 400;color: #f1664a;font-size: 23px;margin-right: 8px;cursor: pointer;"); 
            jQuery(".span_pagination"+page).attr("style", "font-weight: 400;color: #9d2c16;font-size: 23px;margin-right: 8px;cursor: pointer;");  

            response = JSON.parse(response); 

            console.log(response);

                var retorno = '';

                jQuery(response).each(function (i, item) { 
                        var style;
                        if (item.imagem_hotel == "https://mod01.traveltec.com.br/wp-includes/images/media/default.png") {
                            style = "height: 200px;width: 171px;margin: 0 auto;";
                        }

                        retorno += '<div class="jet-listing-grid__item jet-listing-dynamic-post-'+item.id+'" data-post-id="'+item.id+'" id="'+item.id+'_div_listing"><input type="hidden" id="POLITICA'+item.id+'" value="'+item.POLITICA+'"> <input type="hidden" class="TOKEN_SEARCH" value="'+item.TOKEN_SEARCH+'"> <input type="hidden" id="PARCELAS'+item.id+'" value="'+item.PARCELAS+'"> <input type="hidden" id="CODE_HOTEL_SEARCH'+item.id+'" value="'+item.CODE_HOTEL_SEARCH+'"> <input type="hidden" id="CODE_ROOM_SEARCH'+item.id+'" value="'+item.CODE_ROOM_SEARCH+'"> <input type="hidden" id="CHECKIN_SEARCH'+item.id+'" value="'+item.CHECKIN_SEARCH+'"> <input type="hidden" id="NIGHTS_SEARCH'+item.id+'" value="'+item.NIGHTS_SEARCH+'"> <input type="hidden" id="ADULTS_SEARCH'+item.id+'" value="'+item.ADULTS_SEARCH+'"> <input type="hidden" id="CHILDS_SEARCH'+item.id+'" value="'+item.CHILDS_SEARCH+'"> <input type="hidden" id="CHILDREN_SEARCH'+item.id+'" value="'+item.CHILDREN_SEARCH+'"> <input type="hidden" id="URL_SEARCH'+item.id+'" value="'+item.URL_SEARCH+'"> <input type="hidden" id="APTO_SEARCH'+item.id+'" value="'+item.APTO_SEARCH+'"> <input type="hidden" id="CATEGORY_SEARCH'+item.id+'" value="'+item.CATEGORY_SEARCH+'"> <input type="hidden" id="REGIME_SEARCH'+item.id+'" value="'+item.REGIME_SEARCH+'"> <input type="hidden" id="PRICE_SEARCH'+item.id+'" value="'+item.PRICE_SEARCH+'"> <input type="hidden" id="PRICE_FORMATTED_SEARCH'+item.id+'" value="'+item.PRICE_FORMATTED_SEARCH+'"> <input type="hidden" id="IMG_SEARCH'+item.id+'" value="'+item.IMG_SEARCH+'"> <input type="hidden" id="NOME_HOTEL_SEARCH'+item.id+'" value="'+item.NOME_HOTEL_SEARCH+'"> <input type="hidden" id="VERIFICA_ORIGEM" value="1"><style>.elementor-525 .elementor-element.elementor-element-d8ac0c1{border-style:solid;border-width:1px 1px 1px 1px;border-color:#e5c202;box-shadow:-3px 0px 10px 0px rgba(0,0,0,0.5);transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;}.elementor-525 .elementor-element.elementor-element-d8ac0c1 > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-525 .elementor-element.elementor-element-e5abed5 .jet-listing-dynamic-image{justify-content:flex-start;}.elementor-525 .elementor-element.elementor-element-e5abed5 .jet-listing-dynamic-image img{border-style:solid;border-width:3px 3px 3px 3px;border-color:#BFB9B9;}.elementor-525 .elementor-element.elementor-element-55ac40a .elementor-heading-title{color:#e5c202;font-size:30px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-e991c7e .elementor-heading-title{color:#e5c202;font-size:22px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-10d76b2:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap, .elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#F9F7F7;}.elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-element-populated{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;}.elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-element-populated > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-525 .elementor-element.elementor-element-6b4c952{text-align:center;color:#FFFFFF;font-family:"Roboto", Sans-serif;font-weight:bold;line-height:2.3em;}.elementor-525 .elementor-element.elementor-element-6b4c952 > .elementor-widget-container{background-color:#F1664A;border-style:solid;border-width:0px 0px 0px 0px;border-color:#453652;box-shadow:-2px 0px 10px 0px rgba(0,0,0,0.5);}.elementor-525 .elementor-element.elementor-element-b0f065e > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-9e25330{text-align:center;}.elementor-525 .elementor-element.elementor-element-9e25330 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-88959b3{text-align:center;}.elementor-525 .elementor-element.elementor-element-88959b3 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-32146b1{text-align:center;}.elementor-525 .elementor-element.elementor-element-32146b1 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-3388426{margin-top:0px;margin-bottom:10px;}.elementor-525 .elementor-element.elementor-element-ffb912e{column-gap:0px;text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-ffb912e > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-8b0f02f > .elementor-element-populated{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-7436fed{text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-6ade4a2{text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-6ade4a2 > .elementor-widget-container{margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-8eca408{text-align:center;}.elementor-525 .elementor-element.elementor-element-8eca408 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-133f70a{text-align:center;}.elementor-525 .elementor-element.elementor-element-133f70a .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-41cddc1{margin-top:0px;margin-bottom:0px;}.elementor-525 .elementor-element.elementor-element-859659a{text-align:center;}.elementor-525 .elementor-element.elementor-element-2320608{text-align:center;}.elementor-525 .elementor-element.elementor-element-8a3175a:not(.elementor-motion-effects-element-type-background), .elementor-525 .elementor-element.elementor-element-8a3175a > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#FFFFFF;}.elementor-525 .elementor-element.elementor-element-8a3175a{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin-top:10px;margin-bottom:10px;}.elementor-525 .elementor-element.elementor-element-8a3175a > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-bc-flex-widget .elementor-525 .elementor-element.elementor-element-38841d9.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-525 .elementor-element.elementor-element-38841d9.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-38841d9 > .elementor-element-populated{padding:6px 6px 6px 6px;}.elementor-525 .elementor-element.elementor-element-cda1fa6{text-align:right;}.elementor-525 .elementor-element.elementor-element-cda1fa6 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-bc-flex-widget .elementor-525 .elementor-element.elementor-element-f333d08.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-525 .elementor-element.elementor-element-f333d08.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field__content{color:#F1664A;font-size:26px;font-weight:600;text-align:left;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field .jet-listing-dynamic-field__inline-wrap{width:auto;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field .jet-listing-dynamic-field__content{width:auto;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field{justify-content:flex-start;}.elementor-525 .elementor-element.elementor-element-de715ac > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-6c96325{margin-top:0px;margin-bottom:0px;}.elementor-525 .elementor-element.elementor-element-95a2044 .elementor-button{font-family:"Roboto", Sans-serif;font-weight:500;fill:#FFFFFF;color:#FFFFFF;background-color:#F1664A;}@media(min-width:768px){.elementor-525 .elementor-element.elementor-element-f75e268{width:30%;}.elementor-525 .elementor-element.elementor-element-3e5984f{width:30%;}.elementor-525 .elementor-element.elementor-element-21520e2{width:39.66%;}.elementor-525 .elementor-element.elementor-element-c4fd80f{width:30%;}.elementor-525 .elementor-element.elementor-element-8b0f02f{width:29.66%;}.elementor-525 .elementor-element.elementor-element-2570dd9{width:40%;}.elementor-525 .elementor-element.elementor-element-38841d9{width:49.998%;}.elementor-525 .elementor-element.elementor-element-f333d08{width:50%;}}</style><div data-elementor-type="jet-listing-items" data-elementor-id="525" class="elementor elementor-525" data-elementor-settings="[]"><div class="elementor-section-wrap"><section class="elementor-section elementor-top-section elementor-element elementor-element-d8ac0c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default 1920_section" data-id="d8ac0c1" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-15ed5ad" data-id="15ed5ad" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-e5abed5 elementor-widget elementor-widget-jet-listing-dynamic-image" data-id="e5abed5" data-element_type="widget" id="img_post" data-widget_type="jet-listing-dynamic-image.default"><div class="elementor-widget-container"><div class="jet-listing jet-listing-dynamic-image"><img width="840" height="500" src="'+item.imagem_hotel+'" class="attachment-full size-full" alt="'+item.NOME_HOTEL_SEARCH+'" loading="lazy" style="'+style+'"></div></div></div></div></div><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-97e90eb" data-id="97e90eb" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-55ac40a elementor-widget elementor-widget-heading" data-id="55ac40a" data-element_type="widget" id="title_post" data-widget_type="heading.default"><div class="elementor-widget-container"><h2 class="elementor-heading-title elementor-size-default" style="text-align:left">'+item.NOME_HOTEL_SEARCH+'</h2> </div></div><div class="elementor-element elementor-element-58203a8 elementor-widget elementor-widget-text-editor" data-id="58203a8" data-element_type="widget" id="desc_post" data-widget_type="text-editor.default"><div class="elementor-widget-container" style="text-align:justify"> '+item.descricao_hotel+'... </div> </div></div></div><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-10d76b2" data-id="10d76b2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-6b4c952 1920_periodo elementor-widget elementor-widget-text-editor" data-id="6b4c952" data-element_type="widget" data-widget_type="text-editor.default"><div class="elementor-widget-container"></div></div><section class="elementor-section elementor-inner-section elementor-element elementor-element-b0f065e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b0f065e" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f75e268" data-id="f75e268" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-9e25330 elementor-widget elementor-widget-heading" data-id="9e25330" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><p class="elementor-heading-title elementor-size-default">Apto</p></div></div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3e5984f" data-id="3e5984f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-88959b3 elementor-widget elementor-widget-heading" data-id="88959b3" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Categoria</h4></div></div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-21520e2" data-id="21520e2" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-32146b1 elementor-widget elementor-widget-heading" data-id="32146b1" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Regime</h4></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-3388426 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3388426" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c4fd80f" data-id="c4fd80f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-ffb912e 1920_apto elementor-widget elementor-widget-text-editor" data-id="ffb912e" data-element_type="widget" data-widget_type="text-editor.default">'+item.nome_apto+'</div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8b0f02f" data-id="8b0f02f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-7436fed 1920_categoria elementor-widget elementor-widget-text-editor" data-id="7436fed" data-element_type="widget" data-widget_type="text-editor.default">'+item.categoria+'</div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2570dd9" data-id="2570dd9" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-6ade4a2 1920_regime elementor-widget elementor-widget-text-editor" data-id="6ade4a2" data-element_type="widget" data-widget_type="text-editor.default">'+item.regime+'</div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-dafda3e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="dafda3e" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-afadb75" data-id="afadb75" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-8eca408 elementor-widget elementor-widget-heading" data-id="8eca408" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Adultos</h4></div></div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e9b4c36" data-id="e9b4c36" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-133f70a elementor-widget elementor-widget-heading" data-id="133f70a" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Crianças</h4></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-41cddc1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="41cddc1" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0656f03" data-id="0656f03" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-859659a 1920_adt elementor-widget elementor-widget-text-editor" data-id="859659a" data-element_type="widget" data-widget_type="text-editor.default">'+item.qtd_adt+'</div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ac6acbd" data-id="ac6acbd" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-2320608 1920_chd elementor-widget elementor-widget-text-editor" data-id="2320608" data-element_type="widget" data-widget_type="text-editor.default">'+item.qtd_chd+'</div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-8a3175a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8a3175a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-38841d9" data-id="38841d9" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-cda1fa6 elementor-widget elementor-widget-heading" data-id="cda1fa6" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h5 class="elementor-heading-title elementor-size-default">a partir de R$ </h5></div></div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f333d08" data-id="f333d08" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-de715ac 1920_valor elementor-widget elementor-widget-jet-listing-dynamic-field" data-id="de715ac" data-element_type="widget" data-widget_type="jet-listing-dynamic-field.default"><div class="elementor-widget-container"><div class="jet-listing jet-listing-dynamic-field display-inline"><div class="jet-listing-dynamic-field__inline-wrap"><div class="jet-listing-dynamic-field__content" style="float:right !important;">'+item.valor+'</div></div></div></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-6c96325 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6c96325" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7720d5b" data-id="7720d5b" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-95a2044 elementor-align-center button_reserva_1920 elementor-widget elementor-widget-button" data-id="95a2044" data-element_type="widget" data-widget_type="button.default"><div class="elementor-widget-container"><div class="elementor-button-wrapper"><a onclick="set_dados_hotel_integ('+item.id+')" class="elementor-button elementor-size-sm" role="button" style="cursor:pointer;color:#fff;" id="button_details_ehtl_'+item.id+'"> <span class="elementor-button-content-wrapper"> <span class="elementor-button-text">Ver detalhes</span> </span> </a></div></div></div></div></div></div></section></div></div></div></section></div></div></div>'; 
                });  
                    jQuery(".jet-listing-grid__items").html(retorno);
                    jQuery(".jet-listing-grid__items").append("<input type='hidden' id='id_busca' value='"+id+"'>");  
                    jQuery(".jet-listing-grid__items").append("<input type='hidden' id='totalPages' value='"+totalpages+"'>"); 

                    var span = "";
                    var contador = totalpages;
                    for (var i = 0; i < totalpages; i++) {
                        var page = parseInt(jQuery("#contador_click").val())+1;
                        if (i == jQuery("#contador_click").val()) {  
                            if (i == 0) {
                                span += '<a style="float:left;cursor: no-drop;color: #8c8c8c;" onclick=""><span><i class="fa fa-arrow-left" style="    color: #8c8c8c;"></i> Anterior</span></a>';
                            }else{
                                span += '<a style="float:left;cursor:pointer;" onclick="search_pagination_ehtl_minus('+i+', '+id+', '+totalpages+')"><span><i class="fa fa-arrow-left" style="    color: #f1664a;"></i> Anterior</span></a>';
                            }
                        }else{
                            span += "";
                        }
                        if (i == jQuery("#contador_click").val()) {
                            span += '<a><span style="font-weight: 400;color: #f1664a;font-size: 23px;margin-right: 8px;" class="span span_pagination'+i+'">'+page+'</span></a>';
                        }else{
                            span += ''; 
                        }
                        if (i == jQuery("#contador_click").val()) { 
                            if (page == totalPages) {
                                span += '<a style="float:right;cursor: no-drop;color: #8c8c8c;"><span> Próxima <i class="fa fa-arrow-right" style="    color: #8c8c8c;"></i></span></a>';
                            }else{
                                span += '<a style="float:right;cursor:pointer;" onclick="search_pagination_ehtl('+page+', '+id+', '+totalpages+')"><span> Próxima <i class="fa fa-arrow-right" style="    color: #f1664a;"></i></span></a>';
                            } 
                        }else{
                            span += "";
                        }
                    } 
                    jQuery(".jet-listing-grid__items").append('<div id="span_pages" style="width: 30%;margin: 17px auto;">'+span+'</div>'); 

                    goToByScroll('scroll');
        }
    });
}  

function search_pagination_ehtl_minus(page, id, totalpages){ 
    jQuery("#contador_click").val(parseInt(page)-1); 
    page = parseInt(page)-1;
    jQuery.ajax({
        type: "POST",
        url: "/wp-content/plugins/ehtl-hoteis-integracao/includes/ajax-pagination.php", 
        data: {page:page, id:id},
        success: function(response){  
            jQuery("#span_pages span").attr("style", "font-weight: 400;color: #f1664a;font-size: 23px;margin-right: 8px;cursor: pointer;"); 
            jQuery(".span_pagination"+page).attr("style", "font-weight: 400;color: #9d2c16;font-size: 23px;margin-right: 8px;cursor: pointer;");  

            response = JSON.parse(response); 

            console.log(response);

                var retorno = '';

                jQuery(response).each(function (i, item) { 
                        var style;
                        if (item.imagem_hotel == "https://mod01.traveltec.com.br/wp-includes/images/media/default.png") {
                            style = "height: 200px;width: 171px;margin: 0 auto;";
                        }

                        retorno += '<div class="jet-listing-grid__item jet-listing-dynamic-post-'+item.id+'" data-post-id="'+item.id+'" id="'+item.id+'_div_listing"><input type="hidden" id="POLITICA'+item.id+'" value="'+item.POLITICA+'"> <input type="hidden" class="TOKEN_SEARCH" value="'+item.TOKEN_SEARCH+'"> <input type="hidden" id="PARCELAS'+item.id+'" value="'+item.PARCELAS+'"> <input type="hidden" id="CODE_HOTEL_SEARCH'+item.id+'" value="'+item.CODE_HOTEL_SEARCH+'"> <input type="hidden" id="CODE_ROOM_SEARCH'+item.id+'" value="'+item.CODE_ROOM_SEARCH+'"> <input type="hidden" id="CHECKIN_SEARCH'+item.id+'" value="'+item.CHECKIN_SEARCH+'"> <input type="hidden" id="NIGHTS_SEARCH'+item.id+'" value="'+item.NIGHTS_SEARCH+'"> <input type="hidden" id="ADULTS_SEARCH'+item.id+'" value="'+item.ADULTS_SEARCH+'"> <input type="hidden" id="CHILDS_SEARCH'+item.id+'" value="'+item.CHILDS_SEARCH+'"> <input type="hidden" id="CHILDREN_SEARCH'+item.id+'" value="'+item.CHILDREN_SEARCH+'"> <input type="hidden" id="URL_SEARCH'+item.id+'" value="'+item.URL_SEARCH+'"> <input type="hidden" id="APTO_SEARCH'+item.id+'" value="'+item.APTO_SEARCH+'"> <input type="hidden" id="CATEGORY_SEARCH'+item.id+'" value="'+item.CATEGORY_SEARCH+'"> <input type="hidden" id="REGIME_SEARCH'+item.id+'" value="'+item.REGIME_SEARCH+'"> <input type="hidden" id="PRICE_SEARCH'+item.id+'" value="'+item.PRICE_SEARCH+'"> <input type="hidden" id="PRICE_FORMATTED_SEARCH'+item.id+'" value="'+item.PRICE_FORMATTED_SEARCH+'"> <input type="hidden" id="IMG_SEARCH'+item.id+'" value="'+item.IMG_SEARCH+'"> <input type="hidden" id="NOME_HOTEL_SEARCH'+item.id+'" value="'+item.NOME_HOTEL_SEARCH+'"> <input type="hidden" id="VERIFICA_ORIGEM" value="1"><style>.elementor-525 .elementor-element.elementor-element-d8ac0c1{border-style:solid;border-width:1px 1px 1px 1px;border-color:#e5c202;box-shadow:-3px 0px 10px 0px rgba(0,0,0,0.5);transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;}.elementor-525 .elementor-element.elementor-element-d8ac0c1 > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-525 .elementor-element.elementor-element-e5abed5 .jet-listing-dynamic-image{justify-content:flex-start;}.elementor-525 .elementor-element.elementor-element-e5abed5 .jet-listing-dynamic-image img{border-style:solid;border-width:3px 3px 3px 3px;border-color:#BFB9B9;}.elementor-525 .elementor-element.elementor-element-55ac40a .elementor-heading-title{color:#e5c202;font-size:30px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-e991c7e .elementor-heading-title{color:#e5c202;font-size:22px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-10d76b2:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap, .elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#F9F7F7;}.elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-element-populated{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;}.elementor-525 .elementor-element.elementor-element-10d76b2 > .elementor-element-populated > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-525 .elementor-element.elementor-element-6b4c952{text-align:center;color:#FFFFFF;font-family:"Roboto", Sans-serif;font-weight:bold;line-height:2.3em;}.elementor-525 .elementor-element.elementor-element-6b4c952 > .elementor-widget-container{background-color:#F1664A;border-style:solid;border-width:0px 0px 0px 0px;border-color:#453652;box-shadow:-2px 0px 10px 0px rgba(0,0,0,0.5);}.elementor-525 .elementor-element.elementor-element-b0f065e > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-9e25330{text-align:center;}.elementor-525 .elementor-element.elementor-element-9e25330 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-88959b3{text-align:center;}.elementor-525 .elementor-element.elementor-element-88959b3 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-32146b1{text-align:center;}.elementor-525 .elementor-element.elementor-element-32146b1 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-3388426{margin-top:0px;margin-bottom:10px;}.elementor-525 .elementor-element.elementor-element-ffb912e{column-gap:0px;text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-ffb912e > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-8b0f02f > .elementor-element-populated{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-7436fed{text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-6ade4a2{text-align:center;font-family:"Roboto", Sans-serif;font-size:15px;font-weight:400;}.elementor-525 .elementor-element.elementor-element-6ade4a2 > .elementor-widget-container{margin:0px 0px 0px 0px;padding:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-8eca408{text-align:center;}.elementor-525 .elementor-element.elementor-element-8eca408 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-133f70a{text-align:center;}.elementor-525 .elementor-element.elementor-element-133f70a .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-525 .elementor-element.elementor-element-41cddc1{margin-top:0px;margin-bottom:0px;}.elementor-525 .elementor-element.elementor-element-859659a{text-align:center;}.elementor-525 .elementor-element.elementor-element-2320608{text-align:center;}.elementor-525 .elementor-element.elementor-element-8a3175a:not(.elementor-motion-effects-element-type-background), .elementor-525 .elementor-element.elementor-element-8a3175a > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#FFFFFF;}.elementor-525 .elementor-element.elementor-element-8a3175a{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin-top:10px;margin-bottom:10px;}.elementor-525 .elementor-element.elementor-element-8a3175a > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-bc-flex-widget .elementor-525 .elementor-element.elementor-element-38841d9.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-525 .elementor-element.elementor-element-38841d9.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-38841d9 > .elementor-element-populated{padding:6px 6px 6px 6px;}.elementor-525 .elementor-element.elementor-element-cda1fa6{text-align:right;}.elementor-525 .elementor-element.elementor-element-cda1fa6 .elementor-heading-title{color:#e5c202;font-size:15px;font-weight:400;line-height:0.1em;}.elementor-bc-flex-widget .elementor-525 .elementor-element.elementor-element-f333d08.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-525 .elementor-element.elementor-element-f333d08.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field__content{color:#F1664A;font-size:26px;font-weight:600;text-align:left;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field .jet-listing-dynamic-field__inline-wrap{width:auto;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field .jet-listing-dynamic-field__content{width:auto;}.elementor-525 .elementor-element.elementor-element-de715ac .jet-listing-dynamic-field{justify-content:flex-start;}.elementor-525 .elementor-element.elementor-element-de715ac > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-525 .elementor-element.elementor-element-6c96325{margin-top:0px;margin-bottom:0px;}.elementor-525 .elementor-element.elementor-element-95a2044 .elementor-button{font-family:"Roboto", Sans-serif;font-weight:500;fill:#FFFFFF;color:#FFFFFF;background-color:#F1664A;}@media(min-width:768px){.elementor-525 .elementor-element.elementor-element-f75e268{width:30%;}.elementor-525 .elementor-element.elementor-element-3e5984f{width:30%;}.elementor-525 .elementor-element.elementor-element-21520e2{width:39.66%;}.elementor-525 .elementor-element.elementor-element-c4fd80f{width:30%;}.elementor-525 .elementor-element.elementor-element-8b0f02f{width:29.66%;}.elementor-525 .elementor-element.elementor-element-2570dd9{width:40%;}.elementor-525 .elementor-element.elementor-element-38841d9{width:49.998%;}.elementor-525 .elementor-element.elementor-element-f333d08{width:50%;}}</style><div data-elementor-type="jet-listing-items" data-elementor-id="525" class="elementor elementor-525" data-elementor-settings="[]"><div class="elementor-section-wrap"><section class="elementor-section elementor-top-section elementor-element elementor-element-d8ac0c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default 1920_section" data-id="d8ac0c1" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-15ed5ad" data-id="15ed5ad" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-e5abed5 elementor-widget elementor-widget-jet-listing-dynamic-image" data-id="e5abed5" data-element_type="widget" id="img_post" data-widget_type="jet-listing-dynamic-image.default"><div class="elementor-widget-container"><div class="jet-listing jet-listing-dynamic-image"><img width="840" height="500" src="'+item.imagem_hotel+'" class="attachment-full size-full" alt="'+item.NOME_HOTEL_SEARCH+'" loading="lazy" style="'+style+'"></div></div></div></div></div><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-97e90eb" data-id="97e90eb" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-55ac40a elementor-widget elementor-widget-heading" data-id="55ac40a" data-element_type="widget" id="title_post" data-widget_type="heading.default"><div class="elementor-widget-container"><h2 class="elementor-heading-title elementor-size-default" style="text-align:left">'+item.NOME_HOTEL_SEARCH+'</h2> </div></div><div class="elementor-element elementor-element-58203a8 elementor-widget elementor-widget-text-editor" data-id="58203a8" data-element_type="widget" id="desc_post" data-widget_type="text-editor.default"><div class="elementor-widget-container" style="text-align:justify"> '+item.descricao_hotel+'... </div> </div></div></div><div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-10d76b2" data-id="10d76b2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-6b4c952 1920_periodo elementor-widget elementor-widget-text-editor" data-id="6b4c952" data-element_type="widget" data-widget_type="text-editor.default"><div class="elementor-widget-container"></div></div><section class="elementor-section elementor-inner-section elementor-element elementor-element-b0f065e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b0f065e" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f75e268" data-id="f75e268" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-9e25330 elementor-widget elementor-widget-heading" data-id="9e25330" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><p class="elementor-heading-title elementor-size-default">Apto</p></div></div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3e5984f" data-id="3e5984f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-88959b3 elementor-widget elementor-widget-heading" data-id="88959b3" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Categoria</h4></div></div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-21520e2" data-id="21520e2" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-32146b1 elementor-widget elementor-widget-heading" data-id="32146b1" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Regime</h4></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-3388426 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3388426" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c4fd80f" data-id="c4fd80f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-ffb912e 1920_apto elementor-widget elementor-widget-text-editor" data-id="ffb912e" data-element_type="widget" data-widget_type="text-editor.default">'+item.nome_apto+'</div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8b0f02f" data-id="8b0f02f" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-7436fed 1920_categoria elementor-widget elementor-widget-text-editor" data-id="7436fed" data-element_type="widget" data-widget_type="text-editor.default">'+item.categoria+'</div></div></div><div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2570dd9" data-id="2570dd9" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-6ade4a2 1920_regime elementor-widget elementor-widget-text-editor" data-id="6ade4a2" data-element_type="widget" data-widget_type="text-editor.default">'+item.regime+'</div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-dafda3e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="dafda3e" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-afadb75" data-id="afadb75" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-8eca408 elementor-widget elementor-widget-heading" data-id="8eca408" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Adultos</h4></div></div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e9b4c36" data-id="e9b4c36" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-133f70a elementor-widget elementor-widget-heading" data-id="133f70a" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h4 class="elementor-heading-title elementor-size-medium">Crianças</h4></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-41cddc1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="41cddc1" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0656f03" data-id="0656f03" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-859659a 1920_adt elementor-widget elementor-widget-text-editor" data-id="859659a" data-element_type="widget" data-widget_type="text-editor.default">'+item.qtd_adt+'</div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ac6acbd" data-id="ac6acbd" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-2320608 1920_chd elementor-widget elementor-widget-text-editor" data-id="2320608" data-element_type="widget" data-widget_type="text-editor.default">'+item.qtd_chd+'</div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-8a3175a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8a3175a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-38841d9" data-id="38841d9" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-cda1fa6 elementor-widget elementor-widget-heading" data-id="cda1fa6" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h5 class="elementor-heading-title elementor-size-default">a partir de R$ </h5></div></div></div></div><div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f333d08" data-id="f333d08" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-de715ac 1920_valor elementor-widget elementor-widget-jet-listing-dynamic-field" data-id="de715ac" data-element_type="widget" data-widget_type="jet-listing-dynamic-field.default"><div class="elementor-widget-container"><div class="jet-listing jet-listing-dynamic-field display-inline"><div class="jet-listing-dynamic-field__inline-wrap"><div class="jet-listing-dynamic-field__content" style="float:right !important;">'+item.valor+'</div></div></div></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-6c96325 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6c96325" data-element_type="section"><div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7720d5b" data-id="7720d5b" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-95a2044 elementor-align-center button_reserva_1920 elementor-widget elementor-widget-button" data-id="95a2044" data-element_type="widget" data-widget_type="button.default"><div class="elementor-widget-container"><div class="elementor-button-wrapper"><a onclick="set_dados_hotel_integ('+item.id+')" class="elementor-button elementor-size-sm" role="button" style="cursor:pointer;color:#fff;" id="button_details_ehtl_'+item.id+'"> <span class="elementor-button-content-wrapper"> <span class="elementor-button-text">Ver detalhes</span> </span> </a></div></div></div></div></div></div></section></div></div></div></section></div></div></div>'; 
                });  
                    jQuery(".jet-listing-grid__items").html(retorno);
                    jQuery(".jet-listing-grid__items").append("<input type='hidden' id='id_busca' value='"+id+"'>");  
                    jQuery(".jet-listing-grid__items").append("<input type='hidden' id='totalPages' value='"+totalpages+"'>"); 

                    var span = "";
                    var contador = totalpages;
                    for (var i = 0; i < totalpages; i++) {
                        var page = parseInt(jQuery("#contador_click").val())+1;
                        if (i ==  jQuery("#contador_click").val()) {  
                            if (i == 0) {
                                span += '<a style="float:left;cursor: no-drop;color: #8c8c8c;" onclick=""><span><i class="fa fa-arrow-left" style="    color: #8c8c8c;"></i> Anterior</span></a>';
                            }else{
                                span += '<a style="float:left;cursor:pointer;" onclick="search_pagination_ehtl_minus('+i+', '+id+', '+totalpages+')"><span><i class="fa fa-arrow-left" style="    color: #f1664a;"></i> Anterior</span></a>';
                            }
                        }else{
                            span += "";
                        }
                        if (i == jQuery("#contador_click").val()) {
                            span += '<a><span style="font-weight: 400;color: #f1664a;font-size: 23px;margin-right: 8px;" class="span span_pagination'+i+'">'+page+'</span></a>';
                        }else{
                            span += ''; 
                        }
                        if (i == jQuery("#contador_click").val()) { 
                            if (page == totalPages) {
                                span += '<a style="float:right;cursor: no-drop;color: #8c8c8c;"><span> Próxima <i class="fa fa-arrow-right" style="    color: #8c8c8c;"></i></span></a>';
                            }else{
                                span += '<a style="float:right;cursor:pointer;" onclick="search_pagination_ehtl('+page+', '+id+', '+totalpages+')"><span> Próxima <i class="fa fa-arrow-right" style="    color: #f1664a;"></i></span></a>';
                            } 
                        }else{
                            span += "";
                        }
                    } 
                    jQuery(".jet-listing-grid__items").append('<div id="span_pages" style="width: 30%;margin: 17px auto;">'+span+'</div>'); 

                    goToByScroll('scroll');
        }
    });
} 

function goToByScroll() { 
    // Scroll
    jQuery('html,body').animate({
        scrollTop: jQuery("#titulo_principal").offset().top
    }, 2700);
}

function enviar_resorts(){
    var data = {
        'action': 'send_data',
        'whatever': wp_ajax.dede
    }; 

    jQuery.ajax({
        type: "POST",
        url: wp_ajax.ajaxurl,
        data: { action: "send_data", whatever: jQuery("#resposta").val() },
        success: function( data ) {
            window.location.reload();
        }
    });
} 

function listar_dados_hotel(){

    var token = localStorage.getItem("TOKEN_SEARCH"); 
    var code_room = localStorage.getItem("CODE_ROOM_SEARCH");
    var hotel = localStorage.getItem("CODE_HOTEL_SEARCH");

    jQuery.ajax({
        type: "POST",
        url: "/wp-content/plugins/ehtl-hoteis-integracao/includes/ajax-dados.php", 
        data: {token:token, code_room:code_room, hotel:hotel},
        success: function(response){  
            response = JSON.parse(response); 
            console.log(response);
            if (response.servicos == '') {
                jQuery("#section_servicos_hotel_ehtl").attr('style', 'display:none');
            }else{
                jQuery("#servicos_hotel_ehtl").html('<div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e24acda" data-id="e24acda" data-element_type="column"><div class="elementor-widget-wrap">'+response.servicos+'</div></div></div>');
            }
            jQuery("#endereco_hotel_ehtl").html('<div class="elementor-widget-container" style="font-size:14px;">'+response.endereco+'</div>');
            jQuery("#nome_hotel_ehtl h2").append(response.estrelas);
            if (response.politica == '') {
                jQuery("#section_politica_hotel_ehtl").attr('style', 'display:none');
            }else{
                jQuery("#politica_hotel_ehtl").html('<div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e24acda" data-id="e24acda" data-element_type="column"><div class="elementor-widget-wrap">'+response.politica+'</div></div></div>');
            }
            jQuery("#descricao_hotel_ehtl").html('<div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e24acda" data-id="e24acda" data-element_type="column"><div class="elementor-widget-wrap">'+response.descricao+'</div></div></div>');
            jQuery("#galeria_hotel_ehtl").html(response.imagens);

            localStorage.setItem("MAX_PARCELAS", response.parcelas);
            localStorage.setItem("POLITICA", response.politica);

            jQuery('#carousel3').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              1000: {
                items: 1
              }
            }
          });
        }
    });

}