<?php
/**
 * AppsFlyerTest functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package AppsFlyerTest
 */

if ( ! defined( 'APT_ROOT_PATH' ) ) {
	define( 'APT_ROOT_PATH', get_template_directory() );
}
if ( ! defined( 'APT_ROOT_URL' ) ) {
	define( 'APT_ROOT_URL', get_template_directory_uri() );
}


if ( ! function_exists('write_log')) {
	function write_log ( $log )  {
		if ( is_array( $log ) || is_object( $log ) ) {
			error_log( print_r( $log, true ) );
		} else {
			error_log( $log );
		}
	}
}


// global $APT_AFC;
$is_afc_active;
if( class_exists('acf') ){
	$is_afc_active = TRUE;
}

if ( ! defined( 'APT_AFC' ) ) {
	define( 'APT_AFC', $is_afc_active );
}

/**
 * Hide editor for specific page templates.
 *
 */
add_action( 'admin_init', 'hide_editor' );
 
// function hide_editor() {
// 	// Get the Post ID.
// 	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
// 	if( !isset( $post_id ) ) return;
 
// 	// Get the name of the Page Template file.
// 	$template_file = get_post_meta($post_id, '_wp_page_template', true);
//     if($template_file == 'page-templates/landing-page-01.php'){ // edit the template name
//     	remove_post_type_support('page', 'editor');
//     }
// }


/**
 * Theme setup
 */
require get_template_directory() . '/inc/theme-setup.php';

/**
 * Theme widgets
 */
require get_template_directory() . '/inc/theme-widgets.php';

/**
 * Enqueue menus
 */
require get_template_directory() . '/inc/menus.php';


/**
 * Enqueue scripts and styles.
 */

function appsflyertest_scripts() {
	// wp_enqueue_style( 'appsflyertest-style', get_stylesheet_uri() );
	wp_enqueue_style( '_themename-stylesheet', APT_ROOT_URL . '/dist/css/bundle.css', array(), '1.0.0', 'all' );
	wp_enqueue_script( '_themename-scripts', APT_ROOT_URL . '/dist/js/bundle.js', array('jquery'), '1.0.0', true );
	wp_localize_script( '_themename-scripts', 'wp_global', array( 'ajax_url' => admin_url('admin-ajax.php')) );
}
add_action( 'wp_enqueue_scripts', 'appsflyertest_scripts' );



/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions for thr Theme
 */
require get_template_directory() . '/inc/theme-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


// Add demo form backEnd
require get_template_directory() . '/inc/demo-form/init.php';