<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */


// re-Bulide menu for header-menu-lp1
add_filter('wp_nav_menu_items', 'my_wp_nav_menu_items', 10, 2);
function my_wp_nav_menu_items( $items, $args ) {

		if( $args->theme_location == 'header-menu-lp1'  && APT_AFC)   {
				$menu = wp_get_nav_menu_object($args->menu);
				$pre_text = ' <span class="preText d-none d-sm-block">'. get_field('preview_menu_text', $menu) .'</span>';
				$lp_01menu = $pre_text . $items;
				return $lp_01menu ;
		}

	 return  $items ;
}

// re-Bulide menu for footer-menu-bottom
add_filter('wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2);
function my_wp_nav_menu_objects( $items, $args ) {

	if( $args->theme_location == 'footer-menu-bottom' &&  APT_AFC){

		foreach( $items as &$item ) {
			$image = get_field('footer_bottom_image_link', $item);
			if( $image ) {$item->title = '<img style="width: 75px;" src='.$image.'>';}			
		}

	}

	return $items;
	
}


// class for menu bootstrap
add_filter('nav_menu_css_class', 'add_classes_on_li', 1, 3);
function add_classes_on_li($classes, $item, $args)
{
    $classes[] = 'nav-item';

    return $classes;
}

add_filter('wp_nav_menu', 'add_classes_on_a');
function add_classes_on_a($ulclass)
{
    return preg_replace('/<a /', '<a class="nav-link"', $ulclass);
}


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
    




