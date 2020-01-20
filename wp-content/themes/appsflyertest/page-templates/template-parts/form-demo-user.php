<?php
/**
 * Section 1 For Template 01
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

?>
   <div id="demo-user-form">
       <h2><span class="bold-800"><?php echo  get_field('demo_user_form_yes') ?> </span><?php echo  get_field('demo_user_form_i_want_a_demo') ?></h2>
        <form method="POST" action="" class="aft-form" id="event_form_api" >
            
            <div class="form-field-50">
                <label for="fname">* <?php echo  get_field('demo_user_form_first_name') ?></label>
                <input type="text" name="fname" id="first_name" value="">
                <!-- <div class='erorr'>erorr massage</div> -->
            </div>
            
            <div class="form-field-50">
                <label for="lname">* <?php echo  get_field('demo_user_form_last_name') ?></label>
                <input type="text" name="lname" id="last_name" value="">
                <!-- <div class='erorr'>erorr massage</div> -->
            </div>

            <div class="form-field-50">
                <label for="email">* <?php echo  get_field('demo_user_form_business_email') ?></label>
                <input type="email" name="email" id="email" value="">
            </div>

            <div class="form-field-50">
                <label for="company_name">* <?php echo  get_field('demo_user_form_company_name') ?></label>
                <input type="text" name="company_name" id="company_name" value="">
            </div>

            <div class="form-field-50">
                <label for="company_website">* <?php echo  get_field('demo_user_form_company_website') ?></label>
                <input type="text" name="company_website" id="company_website" value="">
            </div>

            <div class="form-field-50">
                <label for="company_profile">* <?php echo  get_field('demo_user_form_company_profile') ?></label>
                <input type="text" name="company_profile" id="company_profile" value="">
            </div>
            
            <div class="form-field-50">
                <label for="country">* <?php echo  get_field('demo_user_form_country') ?></label>
                <input type="text" name="country" id="country" value="">
            </div>

            <div class="form-field-50">
                <label for="phone">* <?php echo  get_field('demo_user_form_phone_number_optional') ?></label>
                <input type="tel" name="" id="" value="">
            </div>
            

            <div class="form-field-100 clear ">
                <div class="flex agree-div">
                   
                  
                    <label class="checkbox-design-label">
                        <input class="agree" type="checkbox" name="agree">
                        <span class="checkmark"></span>
                    </label>
                    <p><?php the_field('demo_user_form_i_agree_term', false, false);?></p>
                </div>
                
                <div>
                    
                    <button type="submit" class="demo-btn" id="submit-demo-account"><?php echo the_field('demo_user_form_button'); ?></button>
                </div>
               

                


            </div>
            
            
        

            
            <!-- <p class="RegistrationAnswer"></p> -->
        </form>
   </div>