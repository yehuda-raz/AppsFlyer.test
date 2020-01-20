<?php
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
if ( ! function_exists( 'appsflyertest_widgets_init' ) ) :
function appsflyertest_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'appsflyertest' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'appsflyertest' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
endif;
add_action( 'widgets_init', 'appsflyertest_widgets_init' );