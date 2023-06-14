<?php

/**
 * This file will create admin menu page
 */

 class ScalePlugin {
    public function __construct() {
        add_action ('admin_menu', [$this, 'create_admin_menu']);
    }

    public function create_admin_menu(){
        $capability = 'manage_options';
        $slug = 'scale-plugin-settings';

        add_menu_page(
            __('Scale Plugin', 'scale-plugin'),
            __('Scale Plugin', 'scale-plugin'),
            $capability,
            $slug,
            [$this, 'menu_page_template'],
            'dashicons-buddicons-replies'
        );
    }

    public function menu_page_template(){
        echo '<div id="root"></div>';
    }
 }

 new ScalePlugin();