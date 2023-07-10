<?php
/** 
 * Plugin Name: Dowell WP Scale Plugin
 * Author: Dowell research
 * Version: 1.0.0
 * Description: Dowell Research Wordpress plugin for getting valuable customers and users feedback
 * Text-Domain: dowell-wp-scale-plugin
*/


// No directory access allowed.
    if(! defined('ABSPATH')) : exit(); endif; 
   
 /**
  * plugin short code for insertions in pages 
   */   
    add_shortcode( 'dowell_scale_plugin', function( $atts ) {
        $default_atts = array();
        $args = shortcode_atts( $default_atts, $atts );

        return '<html lang="en"><head><link rel="stylesheet" href="' . WPRT_URL . 'build/static/css/style.css"><link rel="stylesheet" href="' . WPRT_URL . 'build/index.css"></head><body><div id="wprt-admin-app"></div><script src="' . WPRT_URL . 'build/static/js/bundle.js"></script></body></html>';
    });

/**
 * Define Plugins constants
 */
    define('WPRT_PATH', trailingslashit( plugin_dir_path(__FILE__)));
    define('WPRT_URL', trailingslashit( plugins_url( '/',__FILE__)));

/**
 * Loading Necessary Scripts
 */

    add_action('admin_enqueue_scripts', 'load_scripts');
    function load_scripts() {
        wp_enqueue_script( 'dowell-wp-scale-plugin', WPRT_URL . 'build/static/js/bundle.js', ['jquery', 'wp-element', 'react'], wp_rand(), true);

    }

    require_once WPRT_PATH . 'classes/class-create-admin-menu.php';

?>