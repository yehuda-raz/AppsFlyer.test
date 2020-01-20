<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_appsflyertest' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'y,`GD_6=_W.E%q5PxO2(1b8^DbCoG04qB[*ivZxXRT5eJ[sr,vnuAns_Xg+xXK=]' );
define( 'SECURE_AUTH_KEY',  'pW,;P{ko&3.#PB@]d[#9`p^!4fcn5+1joh:w7Am,E|$hPkb8b%w,~S26itvN!*([' );
define( 'LOGGED_IN_KEY',    'dBba38*)Lr>{!mpvH%d%q0/J#nbxWv : b7$([s@NT2IUB&(efS}Q3RK8LfzcUt^' );
define( 'NONCE_KEY',        'isZ<3hE`otlO,&x`*8Wzc=yMZzICSU*`>:qFOx$VS*;7q<#)SrlCPwImr:zKn+Yn' );
define( 'AUTH_SALT',        'HEr-qkThS~k5tp)X]dZQ^lX@=DuZ9c7,`^;?RtQgP|I?*w#^mEYj6tj(VQRHX4;?' );
define( 'SECURE_AUTH_SALT', ')>yBo<t.bJ,Q>l;gteVy*3-lH85Zd.|JYi!6Q,5a.<0` </I^JEkTaIKhpEv1-r-' );
define( 'LOGGED_IN_SALT',   '/awv(Kng[s8{4n3`$yPzQO|1Tbzz+G]S[4YWj2IURK[hF=G4FEKV=!:6!|6;qNo9' );
define( 'NONCE_SALT',       'v[V(N=qyeG&T&C!ou;YTjRbZhMaiUh}$$.4JcDLp^0XJ``xq/,q-d6BHaeO40J*y' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'apt_';
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_DISPLAY', false );
define( 'WP_DEBUG_LOG', true );

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
