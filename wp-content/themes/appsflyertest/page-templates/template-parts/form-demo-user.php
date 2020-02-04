<?php
/**
 * Section 1 For Template 01
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */
?>
   <div id="demo-user-form" class="col py-3 px-4">
       <h2 class="text-center mt-2 mb-4 mt-sm-3 mb-sm-4 my-lg-4 pb-xl-2"><span class="font-weight-bold"><?php echo  get_field('demo_user_form_yes') ?> </span><?php echo  get_field('demo_user_form_i_want_a_demo') ?></h2>
      
       <form method="POST" action="" class="aft-form" id="event_demo_api" >

            <div class="form-row align-items-end">
                <div class="form-group col-md-6">
                    <label class="mb-1" for="fname">* <?php echo  get_field('demo_user_form_first_name') ?></label>
                    <div class="typing">
                        <input data-validator='name' name="first_name" auto-type="Set your fires name" data-required="required" type="text" class="form-control" id="fname" >
                        <!-- <span class="form-control typing-area " >Set your fires name</span> -->
                    </div>   
                </div>
                <div class="form-group col-md-6">
                    <label class="mb-1" for="lname">* <?php echo  get_field('demo_user_form_last_name') ?></label>
                    <input data-validator='name' name="last_name" auto-type="Set your last name" data-required="required"  type="text" class="form-control" id="lname" >
                </div>
            </div>

            <div class="form-row align-items-end">
                <div class="form-group col-md-6">
                    <label class="mb-1" for="email">* <?php echo  get_field('demo_user_form_business_email') ?></label>
                    <input data-validator='email' name="email"  data-required="required" type="email" class="form-control" id="email">
                </div>
                <div class="form-group col-md-6">
                    <label class="mb-1" for="company_name">* <?php echo  get_field('demo_user_form_company_name') ?></label>
                    <input data-validator='string' name="company_name" data-required="required" type="text" class="form-control" id="company_name">
                </div>
            </div>

            <div class="form-row align-items-end">
                <div class="form-group col-md-6">
                    <label class="mb-1" for="company_website">* <?php echo  get_field('demo_user_form_company_website') ?></label>
                    <input  data-validator='url' name="company_website" data-required="required" type="text" class="form-control" id="company_website">
                </div>
                <div class="form-group col-md-6">
                    <label class="mb-1" for="company_profile">* <?php echo  get_field('demo_user_form_company_profile') ?></label>
                    <input data-validator='string' name="company_profile" data-required="required" type="text" class="form-control" id="company_profile">
                </div>
            </div>

            <div class="form-row align-items-end">
                <div class="form-group col-md-6">
                    <label class="mb-1" for="country">* <?php echo  get_field('demo_user_form_country') ?></label>
                    <input data-validator='name' name="country" data-required="required" type="text" class="form-control" id="country">
                </div>
                <div class="form-group col-md-6">
                    <label class="mb-1" for="phone"><?php echo  get_field('demo_user_form_phone_number_optional') ?></label>
                    <input data-validator='tel'  name="phone"  type="tel" class="form-control" id="phone">
                </div>
            </div>

           
                <div class="form-group pb-2">
                    <div class="form-check">

                    <label class="checkbox-design-label">
                        <input data-validator='check' class="agree" name="check"  value="" type="checkbox" id="agree">
                        <span class="checkmark"></span>
                    </label>
                    <label class="form-check-label" for="gridCheck">
                        <?php the_field('demo_user_form_i_agree_term', false, false);?>
                    </label>
                    </div>
                </div>
           

            
                <button type="submit" class="demo-btn text-center mx-auto d-block mt-4 mt-lg-3 mb-3" id="submit-demo-account"><?php echo the_field('demo_user_form_button'); ?></button>
         

           
               
                    <!-- <label class="checkbox-design-label">
                        <input class="agree" type="checkbox" name="agree">
                        <span class="checkmark"></span>
                    </label>
                 -->
               

          
        </form>
        <div class="loader-div justify-content-center align-items-center">
            <div class="loader"></div> 
        </div>



   </div>

   <div id="confirm_msg" class="col py-3 px-4 ">

     <p class="d-flex justify-content-center align-items-center">
         Thank u
     </p>

   </div>