<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package seguri19
 */

?>

	</div><!-- #content -->
	<footer id="colophon" class="seg_footer">
		<div class="container center">
			<div class="row">
				<div class="col s12">
					<img class="seg_footer_imgtipo" src="<?php echo get_template_directory_uri(); ?>/layouts/img/imagotipoAP.png" alt="">
					<p>PUBLICADO EL 14 DE ABRIL DE 2020</p>
				</div>
				<div class="col s12">
					<div class="seg_footer_shares">
						<div class="col s4 m2">
							<p>COMPARTE</p>
						</div>
						<div class="col s2 m2">
							<a href="https://twitter.com/intent/tweet?url=https://animalpolitico.com/balance-de-seguridad-2019&via=animalpolitico&text=Crimen+y+violencia+en+México:+La+guerra+que+no+acaba" target="_blank">
								<span class="icon-twitter"></span>
								
							</a>
						</div>
						<div class="col s2 m2">
							<a href="https://www.facebook.com/sharer/sharer.php?u=https://www.animalpolitico.com/balance-de-seguridad-2019/" target="_blank">
								<span class="icon-facebook"></span>
							</a>
						</div>
						<div class="col s2 m2">
							<a href="https://www.animalpolitico.com/" target="_blank">
								<span class="icon-whatsapp"></span>
							</a>
						</div>
						<div class="col s2 m2">
							<a href="https://telegram.me/share/url?url=https://animalpolitico.com/balance-de-seguridad-2019&text=Crimen+y+violencia+en+México:+La+guerra+que+no+acaba" target="_blank">
								<img src="<?php echo get_template_directory_uri(); ?>/layouts/img/telegram.svg"" alt="">
							</a>
						</div>

					</div>
				</div>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
