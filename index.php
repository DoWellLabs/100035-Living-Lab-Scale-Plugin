<?php

/*
  Plugin Name: Scale Plugin
  Version: 1.0
  Author: Ali Ahmar
  Author URI: https://github.com/aliahmarawan8
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class ScalePlugin {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('scalePluginAdminSideScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('scalePluginAdminSideStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('scaleplugin/scale-plugin', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'scalePluginAdminSideScript',
      'editor_style' => 'scalePluginAdminSideStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('scalePluginFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('scalePluginFrontendStyles', plugin_dir_url(__FILE__) . 'build/index.css');
    }

    ob_start(); ?>
    <div class="scale-plugin-wrapper"></div>
    <?php return ob_get_clean();
    
  }

}

$scalePlugin = new ScalePlugin();