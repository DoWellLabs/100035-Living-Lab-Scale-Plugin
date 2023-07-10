<?php
/**
 * This file will create admin menu page
 */

class WPRT_Create_Admin_Page {
    public function __construct(){
        add_action('admin_menu', [$this, 'create_admin_menu']);
    }

    public function create_admin_menu(){
        $capability = 'manage_options';
        $slug = 'dwpsp-settings';

        add_menu_page(
            __('Dowell WP Scale Plugin', 'dowell-wp-scale-plugin'),
            __('Dowell WP Scale Plugin', 'dowell-wp-scale-plugin'),
            $capability,
            $slug,
            [$this, 'menu_page_template'],
            'dashicons-star-half'
        );
    }

 
    // public function menu_page_template() {
    //     echo '<head><link rel="stylesheet" href="' . WPRT_URL . 'build/static/css/style.css"></head>';
        
    //     echo '<div class="wrap"><div id="wprt-admin-app"></div></div>';

    //     // Include the necessary script tags
    //     echo '<script src="' . WPRT_URL . 'build/static/js/bundle.js"></script>';

    // }

}


new WPRT_Create_Admin_Page();