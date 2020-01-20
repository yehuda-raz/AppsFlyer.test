<?php
/**
 * Section 1 For Template 01
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

?>

	<section id="section1" class="flex-center lp1">
		<div class="container">
			<div class="content flex">
				<div class="pannel-div">
					<h1 class="title"><?php echo  get_field('section_1_title') ?></h1>
					<p class="sub_title desktop-ver"><?php echo  get_field('section_1_sub_title') ?></p>
					<div class="whay">
						
						<?php
							if ( have_rows( 'section_1_repeater_list' ) ) :?>
								<ul class="list-none">
									<?php
										while ( have_rows( 'section_1_repeater_list' ) ) :
											the_row();
											?>
												<li><span><?php echo the_sub_field( 'section_1_list_item_text'); ?></sapn></li>
										<?php
										endwhile;
									?>
								</ul><?php
							endif;
						?>	

					</div>
					<p class="appsFlyersUniversa desktop-ver"><?php echo  get_field('section_1_after_list_text') ?></p>
					<div class="logolist desktop-ver">

						<?php
							if ( have_rows( 'section_1_repeater_brand' ) ) :?>
								<ul class="list-none">
									<?php
										while ( have_rows( 'section_1_repeater_brand' ) ) :
											the_row();
											?>
												<li>
													<img src="<?php the_sub_field( 'section_1_image_brand' ); ?>" />
												</li>
										<?php
										endwhile;
									?>
								</ul><?php
							endif;
						?>	

					</div>

				</div><!-- .left -->	
				
				<div class="form-div">
					<?php  get_template_part('./page-templates/template-parts/form', 'demo-user');?>	

					<p class="appsFlyersUniversa mobile-ver"><?php echo  get_field('section_1_after_list_text') ?></p>
					<div class="logolist mobile-ver">

						<?php
							if ( have_rows( 'section_1_repeater_brand' ) ) :?>
								<ul class="list-none">
									<?php
										while ( have_rows( 'section_1_repeater_brand' ) ) :
											the_row();
											?>
												<li>
													<img src="<?php the_sub_field( 'section_1_image_brand' ); ?>" />
												</li>
										<?php
										endwhile;
									?>
								</ul><?php
							endif;
						?>	

					</div>
					
				</div><!-- .right -->
			</div>
		</div><!-- .container -->
	</section>

	

