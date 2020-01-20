
<?php
/**
 * Template Name: Landing Page 01
 * Template Post Type: post, page
 * The template for building landing pages with afc 
 * @package AppsFlyerTest
 */
get_template_part('./template-parts/headers/header', 'lp01');
?>


	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php if (APT_AFC) {
				?>
					<?php  get_template_part('./page-templates/template-parts/landingPage01', 'section1');?>
					<?php  get_template_part('./page-templates/template-parts/landingPage01', 'section2');?>
					<?php  get_template_part('./page-templates/template-parts/landingPage01', 'section3');?>
				<?php
			}else{
				?>
					<h1>Please add AFC plugin</h1> 
				<?php
			}?>
				
			
		</main><!-- #main -->
	</div><!-- #primary -->



<?php
get_footer();



