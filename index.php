<?php

/*
    Plugin Name: Living_Lab Scale 1.0
    Description: Hello Everyone Give your rating !!
    Version: 3.0
    Author: Fraol B.
*/

if( ! defined( 'ABSPATH' ) ) exit; //exit if accessed directly

class Scale {
    function __construct() {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
        add_action('enqueue_block_assets', array($this, 'frontendAssets')); // Enqueue CSS for the frontend
    }

    function adminAssets() {
        wp_enqueue_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
    }

    function frontendAssets() {
        wp_enqueue_style('scale-frontend-styles', plugin_dir_url(__FILE__) . 'build/index.css');
    }
}

$scale = new Scale();
