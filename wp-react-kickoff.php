<?php
/**
 * Plugin Name: Scale API Plugin
 * Author: Ali Ahmar
 * Author URI: https://github.com/aliahmarawan8
 * Version: 1.0.0
 * Description: WordPress React Plugin.
 * Text-Domain: wp-react-kickoff
 */

 if(! defined('ABSPATH') ) : exit(); endif; //No direct Access Allowed

 /**
  * Define Plugin Constants
  */

  define ('WPRK_PATH', trailingslashit(plugin_dir_path(__FILE__)));
  define ('WPRK_URL', trailingslashit(plugins_url('/',__FILE__)));

  /**
   * Loading Neccessory Scripts
   */
  add_action('admin_enqueue_scripts', 'load_scripts');
  function load_scripts(){
    wp_enqueue_script('wp-react-kickoff',WPRK_URL . 'dist/main.js', ['jquery', 'wp-element'], wp_rand(), true);
    wp_localize_script('wp_react_kickoff', 'applocalizer', [
        'apiUrl' => home_url('/wp-json'),
        'nonce' => wp_create_nonce('wp_rest'),
    ]);
  }

  require_once WPRK_PATH . 'classes/class-create-admin-menu.php';