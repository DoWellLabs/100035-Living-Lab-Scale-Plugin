<?php
/**
 * Plugin Name:       nps-plugin
 * Description:       dowell nps scale for WordPress.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            solomon odinaka
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       nps plugin
 */

add_action( 'admin_menu', 'nps_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function jobplace_init_menu() {
    add_menu_page( __( 'Nps Place', 'npsplugin'), __( 'Nps Plugin', 'npsplugin'), 'manage_options', 'npsplugin', 'npsplugin_admin_page', 'dashicons-admin-post', '2.1' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function npsplugin_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

add_action( 'admin_enqueue_scripts', 'npsplugin_admin_enqueue_scripts' );

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function npsplugin_admin_enqueue_scripts() {
    wp_enqueue_style( 'npsplugin-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'npsplugin-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}