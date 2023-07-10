# Dowell Wordpress Scale Plugin

## Description

This is a WordPress plugin that integrates React components with PHP to enhance the functionality of your WordPress site.
This NPS scale is useful for getting users feedback, customer satisfaction survey and many other instances.

## Installation

1. Upload the plugin files to the `/wp-content/plugins/Dowell-scale-plugin` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.

## Usage

1. After activating the plugin, navigate to the plugin settings page in the WordPress admin panel.
2. Configure the necessary settings for the plugin.
3. Place the shortcode `[dowell_scale_plugin]` in your posts or pages where you want to display the React component.

## Development

If you want to make changes to the React components or PHP files, follow the steps below:

1. Install Node.js and npm on your local machine.
2. Navigate to the plugin directory in the command line/terminal.
3. Run `npm install` to install the required dependencies.
4. Make the necessary changes to the React components in the `src` directory.
5. Run `npm run build` to compile the React components.
6. Rename file `build/static/js/main.[id].js` to `bundle.js` and `build/static/css/main.[id].css` to `style.css`
7. Provide all neccessary env variables locally.
8. Test the changes in your local WordPress environment.

## License

This plugin is released under the [License Name] License. See the `LICENSE` file for more details.
