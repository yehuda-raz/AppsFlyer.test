<?php
/**
 * Jetpack Compatibility File
 *
 * @link https://jetpack.com/
 *
 * @author  Yehuda raz
 * @package AppsFlyerTest
 * @since   1.0.0
 */

/**
 * Jetpack setup function.
 *
 * See: https://jetpack.com/support/infinite-scroll/
 * See: https://jetpack.com/support/responsive-videos/
 * See: https://jetpack.com/support/content-options/
 */

 
function add_demo_tabel() {
    // if (!is_admin()){

        global $wpdb; 
        
        // create the name of the table including the wordpress prefix (wp_ etc)
		$search_table = $wpdb->prefix . "demoform";
		$wpdb->show_errors(); 
		 
		//check if there are any tables of that name already
		if($wpdb->get_var("show tables like '$search_table'") !== $search_table) 
	        {
			//create your sql
			$sql =  "CREATE TABLE ". $search_table . " (
                    id INT(12) NOT NULL AUTO_INCREMENT,
                    first_name CHAR(20) NOT NULL,
                    last_name CHAR(20) NOT NULL,
                    business_email VARCHAR(255) NOT NULL,
                    company_name CHAR(30) NOT NULL,
                    company_website VARCHAR(255) NOT NULL,
                    company_profile VARCHAR(255) NOT NULL,
                    country CHAR(20) NOT NULL,
                    phone_number VARCHAR(255),
					 UNIQUE KEY id (id));";
			}
		 
			//include the wordpress db functions
			require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
			if(isset($sql)){
				dbDelta($sql);
			}
    // }
}
add_action( 'init', 'add_demo_tabel' );



add_action( 'wp_ajax_demo_hook', 'api_demo_user' );
add_action( 'wp_ajax_nopriv_demo_hook', 'api_demo_user' );


function api_demo_user ()
{   
    if (!isset ($_REQUEST['form_data'])) {
        // set the return value you want on error
        // return value can be ANY data type (e.g., array())
        $return_value = 'ERROR- REQUEST DATA' ;
         wp_send_json_error ($return_value) ;
    }

    
    parse_str($_REQUEST['form_data'] , $output);
    $firstName = $output['first_name'];
    $last_name= $output['last_name'];
    $business_email = $output['email'];

    $company_name = $output['company_name'];
    $company_website = $output['company_website'];
    $company_profile = $output['company_profile'];
    $country = $output['country'];
    $phone_number = $output['phone'];
  
    global $wpdb; 
    $table_name = $wpdb->prefix . 'demoform';

    $insert_query = "INSERT INTO 
    $table_name (first_name, last_name, business_email, company_name, company_website, company_profile, country, phone_number) 
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s);"; 

    $query = $wpdb->prepare( $insert_query,  [$firstName , $last_name , $business_email , $company_name , $company_website , $company_profile , $country , $phone_number ] );
        if ( $wpdb->query( $query ) == 1 ) {
            $return_value = 'success' ;
            wp_send_json_success ($return_value) ;
        } else {
            $result= 'Error-DB';
            wp_send_json_error ($return_value) ;
        }


   
    
}

