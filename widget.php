<?php 
use Elementor\Repeater;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Dropdown_Widget extends Widget_Base {

	public static $slug = 'elementor-dropdown';

	public function get_name() { return self::$slug; }

	public function get_title() { return __('Formulário de reserva', self::$slug); }

	public function get_icon() { return 'fa fa-building'; }

	public function get_categories() { return [ 'general' ]; }

	protected function _register_controls() {

		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Configuração', self::$slug ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Use the repeater to define one one set of the items we want to repeat look like
		$repeater = new Repeater();

		$this->add_control(
			'option_value',
			[
				'label' => __( 'Chave de API', self::$slug ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => __( "E56GFH783JCKOEMD0EKM", self::$slug ),
				'placeholder' => __( 'Chave informada pelo fornecedor do plugin', self::$slug ),
			]
		);  

		$this->end_controls_section();
	}

	protected function render() {
		$options_list = $this->get_settings_for_display('options_list'); 
		$settings = $this->get_settings_for_display('option_value');

			echo '<input type="hidden" id="api_key" value="'.$settings.'">

			<div class="elementor-widget-container">
					<div class="elementor-form" id="formresorts" name="New Form" style="color: #616161">
			<input type="hidden" name="post_id" value="41">
			<input type="hidden" name="form_id" value="0be5471">
			<input type="hidden" name="referer_title" value="Início">

							<input type="hidden" name="queried_id" value="41">
			
			<div class="elementor-form-fields-wrapper elementor-labels-above">
								<div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-destin elementor-col-20 elementor-field-required" style="padding-right: 8px">
					<label for="form-field-destin" class="elementor-field-label" style="font-weight:600">Destino</label>		<div class="elementor-field elementor-select-wrapper " style="padding-top:10px">
			<select name="form_fields[destin]" id="form-field-destin" class="elementor-field-textual elementor-size-lg" required="required" aria-required="true">
				<option value=""></option>			</select>
		</div>
						</div>
								<div class="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-date_checkin elementor-col-20 elementor-field-required" style="padding-right: 8px">
					<label for="form-field-date_checkin" class="elementor-field-label" style="font-weight:600">Checkin</label><input type="text" name="form_fields[date_checkin]" id="form-field-date_checkin" class="elementor-field elementor-size-lg elementor-field-textual elementor-date-field flatpickr-input" placeholder="Data de entrada" required="required" aria-required="true" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" style="margin-top:10px">				</div>
								<div class="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-date_checkout elementor-col-20 elementor-field-required" style="padding-right: 8px">
					<label for="form-field-date_checkout" class="elementor-field-label" style="font-weight:600">Checkout</label><input type="text" name="form_fields[date_checkout]" id="form-field-date_checkout" class="elementor-field elementor-size-lg elementor-field-textual elementor-date-field flatpickr-input" placeholder="Data de saída" required="required" aria-required="true" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" style="margin-top:10px">				</div>
								<div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-adults elementor-col-20" style="padding-right: 8px">
					<label for="form-field-adults" class="elementor-field-label" style="font-weight:600">Adultos</label>		<div class="elementor-field elementor-select-wrapper " style="padding-top:10px">
			<select name="form_fields[adults]" id="form-field-adults" class="elementor-field-textual elementor-size-lg">
				<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option>			</select>
		</div>
						</div>
								<div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-childs elementor-col-20">
					<label for="form-field-childs" class="elementor-field-label" style="font-weight:600">Crianças</label>		<div class="elementor-field elementor-select-wrapper " style="padding-top:10px">
			<select name="form_fields[childs]" id="form-field-childs" class="elementor-field-textual elementor-size-lg">
				<option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>			</select>
		</div>
						</div>
								<div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons" style="margin-top:8px">
					<button type="submit" class="elementor-button elementor-size-sm" id="search-resorts" style="width:100%">
						<span>
															<span class=" elementor-button-icon">
																										</span>
																						<span class="elementor-button-text">Buscar resorts</span>
													</span>
					</button>
				</div>
			</div>
		</div>
				</div>';
	}
}