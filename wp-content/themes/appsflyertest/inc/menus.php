<?php
/**
 * Register Menus
 * register menus in WordPress
 * creates menu functions for use in theme
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 * @link    http://codex.wordpress.org/Function_Reference/wp_nav_menu
 
 */
 
add_action( 'init', 'AppsFlyer_register_menus' );

function AppsFlyer_register_menus() {

	/**z
	 * Register navigation menus for a theme.
	 *
	 * @since 1.0.0
	 *
	 * @param array $locations Associative array of menu location identifiers (like a slug) and descriptive text.
	 */


	$menus = get_theme_support( 'AppsFlyer-menus' );

	if ( ! is_array( $menus[0] ) ) {
		return;
	}

	if ( in_array( 'header-menu-lp1', $menus[0] ) ) {
		register_nav_menu( 'header-menu-lp1', esc_html__( 'Header menu - For lp 1', 'AppsFlyer' ) );
	}


	if ( in_array( 'footer-menu-bottom', $menus[0] ) ) {
		register_nav_menu( 'footer-menu-bottom', esc_html__( 'Footer Left menu - for bottom section', 'AppsFlyer' ) );
	}

}

/**
 * Main menu
 *
 * @since 1.0.0
 * @see   wp_nav_menu
 *
 * @param array $locations Associative array of menu location identifiers (like a slug) and descriptive text.
 */

if ( ! function_exists( 'AppsFlyer_header_menu_lp01' ) ) {
	function AppsFlyer_header_menu_lp01() {

		$defaults = array(
			'theme_location' => 'header-menu-lp1',
			'container'      => false,
			'depth'          => 5,
			'echo'           => false,
			'fallback_cb'    => 'AppsFlyer_menu_fallback',
			'menu_class'     => 'nav align-items-center header-menu-lp1'
		);

		$menu = wp_nav_menu( $defaults );
		return $menu;

	}
}



if ( ! function_exists( 'AppsFlyer_Footer_menu_bottom' ) ) {
	function AppsFlyer_Footer_menu_bottom() {

		$defaults = array(
			'theme_location' => 'footer-menu-bottom',
			'container'      => false,
			'depth'          => 5,
			'echo'           => false,
			'fallback_cb'    => 'AppsFlyer_menu_fallback',
			'menu_class'     => 'footer-menu-bottom  align-items-center flex-column flex-md-row nav nav-pills'
		);

		$menu = wp_nav_menu( $defaults );
		return $menu;

	}
}






function init_Theme_setup() {
	add_theme_support(
		'AppsFlyer-menus',
		array( 'header-menu-lp1' ,'footer-menu-bottom')
	);
}

//theme setup
add_action( 'after_setup_theme', 'init_Theme_setup', 11 );

