<?php
/**
 * Section 3 For Template 01
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

?>

	<section id="section3" class="flex-center lp1">

		<div class="container ">
			
				<div class="content">

					<div class="">
						<h3 class="ourSource sign">
							<div >
								<?php echo  get_field('our_source') ?>
							</div>
						</h3>
						<figure class="cardbox">
						
							<div class="person">
								<img src="<?php echo get_field('person_image') ?>" />
							</div>	

							<figcaption class="text_place">
								<h6><?php echo  get_field('card_box_name') ?></h6>
								<p><?php echo  get_field('card_box_role') ?></p>
								<img class="company_image" src="<?php echo get_field('card_box_company_image') ?>" />		
							</figcaption>
						</figure>
					</div>	
	
			</div><!-- .content -->

		</div><!-- .container -->
		
	</section>