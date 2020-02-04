<?php
/**
 * Section 3 For Template 01
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

?>
 <!-- pt-md-3 pb-md-4 pt-lg-4 pb-lg-5 -->
<section id="section3" class="py-3 pt-md-3 pb-md-4 pt-lg-4 pb-lg-5">
	<div class="container-lg ">
				<div class="row">
					<div class="col">
						<div class="position-relative"> 
							<h3 class="text-center my-3 mb-sm-0"><?php echo  get_field('our_source') ?></h3>
						</div>
						
						<!-- py-md-2 -->
						<div class="row">
							<div class="col-lg-10 mx-auto text-center">
										<figure class="row align-items-center justify-content-center flex-column flex-sm-row flex-nowrap py-sm-4 card-box">

											<div class="pb-1 pb-sm-0">
												<img class="avatar" src="<?php echo get_field('person_image') ?>" />
											</div>	
											<figcaption class="text-sm-left pl-sm-3">
												<h6><?php echo  get_field('card_box_name') ?></h6>
												<p><?php echo  get_field('card_box_role') ?></p>
												<img class="brand-image" src="<?php echo get_field('card_box_company_image') ?>" />		
											</figcaption>

									</figure>
							</div>
						</div>	
				</div>	
			</div><!-- .row -->
	</div><!-- .container -->		
</section>