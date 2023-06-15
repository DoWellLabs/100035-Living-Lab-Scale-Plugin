<?php

/*
    Plugin Name: Living_Lab Scale 1.0
    Description: Hello Everyone Give your rating, designed by Fraol !!
    Version: 3.1
    Author: Fraol B.
*/

if( ! defined( 'ABSPATH' ) ) exit; //exit if accessed directly

class Scale {
    function __construct() {
        add_action('init', array($this, 'onInit'));
      }
      function onInit() {
        wp_register_script('adminPageJs', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
        wp_register_style('adminPageCss', plugin_dir_url(__FILE__) . 'build/index.css');
        
        register_block_type('ourplugin/scale-plugin', array(
          'render_callback' => array($this, 'renderCallback'),
          'editor_script' => 'adminPageJs',
          'editor_style' => 'adminPageCss'
        ));
      }
      function renderCallback($attributes) {
        if (!is_admin()) {
          wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'), "0.0.1", true);
          wp_enqueue_style('boilerplateFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
        }
    
        ob_start(); ?>
        <div class="boilerplate-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
        <?php return ob_get_clean();
        
      }
    
      function renderCallbackBasic($attributes) {
        return '<div class="boilerplate-frontend">Hello, the sky is ' . $attributes['skyColor'] . ' and the grass is ' . $attributes['grassColor'] . '.</div>';
      }
}

$scale = new Scale();

