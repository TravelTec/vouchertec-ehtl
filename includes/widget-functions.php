<?php  
	// Creating the widget 
class wpb_widget extends WP_Widget {
  
function __construct() {
parent::__construct(
  
// Base ID of your widget
'wpb_widget', 
  
// Widget name will appear in UI
__('Busca de hotéis', 'wpb_widget_domain'), 
  
// Widget description
array( 'description' => __( 'Formulário para pesquisa de hotéis por post', 'wpb_widget_domain' ), ) 
);
}
  
// Creating widget front-end
  
public function widget( $args, $instance ) {
$title = apply_filters( 'widget_title', $instance['title'] );
  
// before and after widget arguments are defined by themes
echo $args['before_widget'];
if ( ! empty( $title ) )
echo $args['before_title'] . $title . $args['after_title'];

$category = get_the_category();
for ($i=0; $i < count($category); $i++) { 
	if ($category[$i]->category_parent != 0) {
		$id = $category[$i]->term_id;
		$nome = $category[$i]->name;
	}
}
$id_categoria = $id;
$nome_categoria = $nome; 

$retorno = '<div style="box-shadow: -11px 10px 25px 0px rgb(9 9 24 / 46%); transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin: 0px 0px 25px 0px;padding: 23px;"><h2 class="elementor-heading-title elementor-size-default" style="font-family: \'Montserrat\', Sans-serif;margin-bottom: 10px;font-size: 27px;">As melhores ofertas</h2>
 <p>
 <div class="elementor-alert" role="alert" style="width: 100%;padding: 8px;color: #b70606;display:none"><i class="far fa-times"></i> É preciso selecionar um destino.</div>
	<label><strong style="font-family: \'Montserrat\', Sans-serif;font-size: 15px;font-weight: 600;line-height: 1.5em;">Destino:</strong></label>
	<br>
	<select class="widefat" id="destino" style="font-family: \'Montserrat\', Sans-serif;width:100%" disabled>
		<option value="'.$nome_categoria.'">'.$nome_categoria.'</option>
	</select>
</p>
<p> 
	<label><strong style="font-family: \'Montserrat\', Sans-serif;font-size: 15px;font-weight: 600;line-height: 1.5em;">Check-in:</strong></label>
	<br>
<input class="widefat" id="checkin" name="checkin" type="text" value="'.date('d/m/Y', strtotime('+'.intval(1).' days')).'"  placeholder="'.date('d/m/Y', strtotime('+'.intval(1).' days')).'" style="font-family: \'Montserrat\', Sans-serif;width:100%" />
</p>
<p> 
	<label><strong style="font-family: \'Montserrat\', Sans-serif;font-size: 15px;font-weight: 600;line-height: 1.5em;">Check-out:</strong></label>
	<br>
<input class="widefat" id="checkout" name="checkout" type="text" value="'.date('d/m/Y', strtotime('+'.intval(6).' days')).'" placeholder="'.date('d/m/Y', strtotime('+'.intval(6).' days')).'" style="font-family: \'Montserrat\', Sans-serif;width:100%" />
</p>
<p>
	<label><strong style="font-family: \'Montserrat\', Sans-serif;font-size: 15px;font-weight: 600;line-height: 1.5em;">Adultos:</strong></label>
	<br>
	<select class="widefat" id="adt" style="font-family: \'Montserrat\', Sans-serif;width:100%">
		<option value="">Selecione...</option>
		<option value="1">1 adulto</option>
		<option value="2" selected>2 adultos</option>
		<option value="3">3 adultos</option>
		<option value="4">4 adultos</option>
		<option value="5">5 adultos</option>
	</select>
</p>
<p>
	<label><strong style="font-family: \'Montserrat\', Sans-serif;font-size: 15px;font-weight: 600;line-height: 1.5em;">Crianças:</strong></label>
	<br>
	<select class="widefat" id="chd" style="font-family: \'Montserrat\', Sans-serif;width:100%">
		<option value="">Selecione...</option>
		<option value="0" selected>0 criança</option>
		<option value="1">1 criança</option>
		<option value="2">2 crianças</option>
		<option value="3">3 crianças</option>
		<option value="4">4 crianças</option>
		<option value="5">5 crianças</option>
	</select>
</p> 
<div class="" style="width:100%"><button type="button" class="submit_form_search_ehtl_destaques elementor-button elementor-size-sm e-form__buttons__wrapper__button e-form__buttons__wrapper__button-next" style="width:100%;background-color: var( --e-global-color-673cae9 );
    color: #ffffff;font-family: \'Montserrat\', Sans-serif;font-weight:600" onclick="search_hoteis_post()"><i class="fa fa-search"></i> Pesquisar</button></div>

    <br>
    <div id="search_results_hotel" style="text-align:center;"><img src="https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif" style="width: 18%;margin:0 auto;"></div> </div>';
  
// This is where you run the code and display the output
echo $retorno;
echo $args['after_widget'];
}
          
// Widget Backend 
public function form( $instance ) {
// Widget admin form
?>

<?php 
}
      
// Updating widget replacing old instances with new
public function update( $new_instance, $old_instance ) {
$instance = array();
$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
return $instance;
}
 
// Class wpb_widget ends here
} 
 
 
// Register and load the widget
function wpb_load_widget() {
    register_widget( 'wpb_widget' );
}
add_action( 'widgets_init', 'wpb_load_widget' );
?>