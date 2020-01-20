<?php





// Add to header-menu-lp1 the text before
add_filter('wp_nav_menu_items', 'my_wp_nav_menu_items', 10, 2);
function my_wp_nav_menu_items( $items, $args ) {


		if( $args->theme_location == 'header-menu-lp1'  && APT_AFC)   {
				$menu = wp_get_nav_menu_object($args->menu);
				$pre_text = ' <h4>'. get_field('preview_menu_text', $menu) .'</h4>';
				$lp_01menu = $pre_text . $items;
				return $lp_01menu ;
		}
	
	

	 return  $items ;
}



// Add to footer-menu-bottom iage like item

add_filter('wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2);
function my_wp_nav_menu_objects( $items, $args ) {

	if( $args->theme_location == 'footer-menu-bottom' &&  APT_AFC){

		foreach( $items as &$item ) {
			
			// vars
			$image = get_field('footer_bottom_image_link', $item);
			// append icon
			if( $image ) {
				
				$item->title = '<img style="width: 75px;" src='.$image.'>';
				
			}
			
		}
	}
	
	// return
	return $items;
	
}

