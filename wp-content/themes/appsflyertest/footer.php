<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package AppsFlyerTest
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="container-lg d-none d-sm-block">
			<div class="row align-items-center site-footer-bottom">
				<div class='col-4'>
					<?php 	echo AppsFlyer_Footer_menu_bottom() ?>
				</div>

				<div class='col-4'>
					<div class="text-center">
						<img class="flex-center" style=" height: 25px; " src='<?php echo get_theme_mod( 'footer_logo' );?> ' >	
					</div>
				</div>

				<div class='col-4'>
					<div class="text-right">
						<span>© 2019 AppsFlyer</span>
					</div>
				</div>
				
			</div>
			<!-- <div class="footer-bottom site-navigation navbar-nav">	<?php 	echo AppsFlyer_Footer_menu_bottom() ?>
				<a class="footer_logo" href='<?php echo  get_home_url() ?>'>
					<img class="flex-center" style=" height: 25px; " src='<?php echo get_theme_mod( 'footer_logo' );?> ' >
				</a>
				<div class="copyright"><span>© 2019 AppsFlyer</span></div>
			</div> -->
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
