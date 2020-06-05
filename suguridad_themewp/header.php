<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package seguri19
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class=" site seg">

	<header id="masthead" class="site-header seg_header">
			<div class="container">
				<div class="row">
					
					<div class="col s3 m4">
						<div class="seg_header_logo" style="background-image: url('<?php echo get_template_directory_uri(); ?>/layouts/img/logo_rojoap.png');"></div>
					</div>
					
					<div class="col s9 m8">
						<h1>CRIMEN Y VIOLENCIA EN MÉXICO</h1>
						<h2>LA GUERRA QUE NO ACABA</h2>
					</div>
					
				</div>
			</div>
	</header><!-- #masthead -->

