<?php
/**
 * Section 2 For Template 01
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

?>

	<section id="section2" class="flex-center lp1">
		<div class="container">
			<div class="content">
				<h3 class="title"><?php echo  get_field('section_2_title') ?></h3>

				<div class="whay">
					
					<?php
						if ( have_rows( 'section_2_repeater_boxs' ) ) :?>
							<ul class="list-none">
								<?php
									while ( have_rows( 'section_2_repeater_boxs' ) ) :
										the_row();
										?>
											<li>
										
												<figcaption class="text_place">
											
													<span class="big_text block"><?php echo the_sub_field( 'section_2_box_big_text'); ?></span>
													<span class="small_text block"><?php echo the_sub_field( 'section_2_box_small_text'); ?></span>
												</figcaption>
												<figure class="box_image">
													<div>
														<img src="<?php the_sub_field( 'section_2_box_image' ); ?>" />	
													</div>
												</figure>
											</li>
									<?php
									endwhile;
								?>
							</ul><?php
						endif;
					?>	
			
				</div>
			</div>
		</div>
	</section>
<!-- 
	class="flex-center" -->