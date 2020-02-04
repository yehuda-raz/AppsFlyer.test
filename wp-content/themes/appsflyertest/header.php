<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package AppsFlyerTest
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">


	<header id="masthead" class="site-header">

			<div class="nav-container">
				<nav id="site-navigation" class="main-navigation" role="navigation">
					<div class="container-lg nav-bar">
						<div class="row align-items-center">
							<div class="mr-auto ml-0 ">
								<?php the_custom_logo(); ?>
							</div>
							<div class="ml-auto mr-0">								
									<?php 	wp_nav_menu( array(
										'theme_location' => 'menu-1',
										'menu_id'        => 'primary-menu',
										'menu_class'     => 'nav align-items-center',
										'container'      => false,
										'depth'          => 5,
										
			// 							'theme_location' => 'footer-menu-bottom',
			// 'container'      => false,
			// 'depth'          => 5,
			// 'echo'           => false,
			// 'fallback_cb'    => 'AppsFlyer_menu_fallback',
			// 'menu_class'     => 'footer-menu-bottom nav nav-pills'



										
									) ); ?>
							</div>
						</div>
					</div>
				</nav><!-- #site-navigation -->
			</div>

	</header><!-- #masthead -->

	<div id="content" class="site-content">
