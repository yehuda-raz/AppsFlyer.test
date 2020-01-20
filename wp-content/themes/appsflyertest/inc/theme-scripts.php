<?php
/**
 * Enqueue scripts and styles.
 * @package AppsFlyerTest
 */


function appsflyertest_scripts() {


	// function enqueue_montserrat_google_fonts() { 
	// 	wp_enqueue_style ( 'montserrat', APT_ROOT_URL . '/assets/css/montserrat.css', '', filemtime(APT_ROOT_PATH . '/assets/css/montserrat.css') );
	// }
	// add_action( 'wp_enqueue_scripts', 'enqueue_montserrat_google_fonts' );

	wp_enqueue_style( 'montserrat', 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,600i,700&display=swap' ); 
	wp_enqueue_style( 'appsflyertest-style', get_stylesheet_uri() );
	wp_enqueue_script( 'appsflyertest-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}



	if (get_page_template_slug() == 'page-templates/landing-page-01.php' ) {
			wp_enqueue_style ( 'lp-style-01', APT_ROOT_URL . '/page-templates/css/lp_01.css', '', filemtime(APT_ROOT_PATH . '/page-templates/css/lp_01.css') );
			wp_enqueue_script( 'lp-js-01', APT_ROOT_URL . '/page-templates/js/lp_01.js', array('jquery'), filemtime( APT_ROOT_PATH . '/page-templates/js/lp_01.js'), true );
	}

	
	
	


}
add_action( 'wp_enqueue_scripts', 'appsflyertest_scripts' );


// if (get_page_template_slug() == 'page-templates/landing-page-01.php' ) {
// 	write_log('sss');
// 	}
	
// add_filter('wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2);

// function my_wp_nav_menu_objects( $items, $args ) {
	
// 	// loop
// 	foreach( $items as &$item ) {
		
// 		// vars
// 		$icon = get_field('icon', $item);
		
		
// 		// append icon
// 		if( $icon ) {
			
// 			$item->title .= ' <i class="fa fa-'.$icon.'"></i>';
			
// 		}
		
// 	}
	
	
// 	// return
// 	return $items;
	
// }