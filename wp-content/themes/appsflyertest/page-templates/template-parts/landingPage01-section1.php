<?php
/**
 * Section 1 For Template 01
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

?>

	<section id="section1" class="flex-center pb-3 py-4 py-md-4 pb-lg-0 pt-lg-5">
		<div class="container-lg">
			<div class="row">
				<div class="col d-lg-flex align-items-center">	

				<!-- col-lg-7 col-xl-6 -->
					<div id="text" class="pr-lg-3  ">

						<h1 class="mb-3 pb-1"><?php echo  get_field('section_1_title') ?></h1>
						<p class="sub-title d-none d-lg-block mb-3 pb-2"><?php echo  get_field('section_1_sub_title') ?></p>
					
							
							<?php
								if ( have_rows( 'section_1_repeater_list' ) ) :?>
									<ul class="list-none ul-v-sign whay-ul pb-md-1 pt-lg-2 pb-lg-3">
										<?php
											while ( have_rows( 'section_1_repeater_list' ) ) :
												the_row();
												?>
													<li class="mb-2 mb-md-3"><span><?php echo the_sub_field( 'section_1_list_item_text'); ?></sapn></li>
											<?php
											endwhile;
										?>
									</ul><?php
								endif;
							?>	

					
						<p class="sub-title d-none d-lg-block pb-1"><?php echo  get_field('section_1_after_list_text') ?></p>
						<?php
							if ( have_rows( 'section_1_repeater_brand' ) ) :?>
								<ul class="list-none d-none d-lg-flex row logo-list pr-5">
									<?php
										while ( have_rows( 'section_1_repeater_brand' ) ) :
											the_row();
											?>
												<!-- <li> -->
												<li class="col-3 pb-3 pl-0 pr-3 text-center">
													<img src="<?php the_sub_field( 'section_1_image_brand' ); ?>" />
												</li>
										<?php
										endwhile;
									?>
								</ul><?php
							endif;
						?>			

					</div><!-- #text -->	
				
					<div id="panel" class="form-div ml-auto py-2 py-lg-0">
						<?php  get_template_part('./page-templates/template-parts/form', 'demo-user');?>	
					</div><!-- #pannel -->


					<div class="d-lg-none text-center mb-0 mt-md-3">
						
						<p class="sub-title py-4"><?php echo  get_field('section_1_after_list_text') ?></p>
						<?php
							if ( have_rows( 'section_1_repeater_brand' ) ) :?>
								<ul class="list-none row logo-list">
									<?php
										while ( have_rows( 'section_1_repeater_brand' ) ) :
											the_row();
											?>
												<!-- <li> -->
												<li class="col-3 pb-3 pl-0 pr-3 text-center">
													<img src="<?php the_sub_field( 'section_1_image_brand' ); ?>" />
												</li>
										<?php
										endwhile;
									?>
								</ul><?php
							endif;
						?>

					</div>


				</div>
				     <!-- .col -->
			</div><!-- .row -->
		</div><!-- .container-lg -->
	</section>

	

