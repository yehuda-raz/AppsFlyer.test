<?php
/**
 * Section 2 For Template 01
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

?>

<section id="section2" class="flex-center pt-5 py-4 py-md-5 primary-bg white">
	<div class="container-lg pt-lg-4">
		
		<h3 class="text-center"><?php echo  get_field('section_2_title') ?></h3>

		<?php	if ( have_rows( 'section_2_repeater_boxs' ) ) :?>	
			<div class="row">
				
					<?php
						while ( have_rows( 'section_2_repeater_boxs' ) ) :
							the_row();
							?>
								<div class="col-lg-3 col-sm-6 text-center mt-4 box">
									
										<figcaption>
											<span class="big-text d-block "><?php echo the_sub_field( 'section_2_box_big_text'); ?></span>
											<span class="small-text d-block mb-2 mb-sm-3"><?php echo the_sub_field( 'section_2_box_small_text'); ?></span>
										</figcaption>
										<figure class="box_image">
											<div>
												<img src="<?php the_sub_field( 'section_2_box_image' ); ?>" />	
											</div>
										</figure>
									
								</div>
							<?php
						endwhile;
					?>
					
			</div>
		<?php endif; ?>	

	</div><!--.container-lg-->
</section>
