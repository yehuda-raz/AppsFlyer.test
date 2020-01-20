<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function appsflyertest_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'appsflyertest_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function appsflyertest_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'appsflyertest_pingback_header' );




function footer_logo($wp_customize) {
    // add a setting 
        $wp_customize->add_setting('footer_logo');
    // Add a control to upload the hover logo
        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'footer_logo', array(
            'label' => 'Upload footer logo',
            'section' => 'title_tagline', //this is the section where the custom-logo from WordPress is
            'settings' => 'footer_logo',
            'priority' => 8,
            'height'     => 48,
            'width'      => 160,
            'flex-width' => true,// show it just below the custom-logo
        )));
}    
add_action('customize_register', 'footer_logo');
    
