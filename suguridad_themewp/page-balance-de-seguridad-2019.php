<?php
//======================================================================
// A N I M A L  P O L Í T I C O
//======================================================================
/*******
***
*** Page
*** Template para Seguridad México 2020
***
*** Animal Político 2020
*** @author Irving
*** @created abril 2020
***
*********/

get_header();
?>
<section class="seg_hero_bg">
  <div class="container">
    <div class="row">
      <div class="col s12 m12 center">
        <img class="seg_hero_bg_txt" src="<?php echo get_template_directory_uri(); ?>/layouts/img/txt_crimen.png" alt="">
        <div class="seg_hero_bg_borde">
          <img class="seg_hero_bg_imgmx" src="<?php echo get_template_directory_uri(); ?>/layouts/img/mexlogo.png"  alt="">
          <img  class="seg_hero_bg_bala" src="<?php echo get_template_directory_uri(); ?>/layouts/img/bala1.png" alt="">
          <a href="#intro"><span class="icon-angle-down"></span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="intro" class="seg_introduction">
  <div class="container">
    <div class="row">
      <div class="col  s12 m12 center">
        <h3 class="seg_introduction_title">INTRODUCCIÓN</h3>
        <p>Andrés Manuel López Obrador, primero en campaña y luego como presidente de México, popularizó la frase “abrazos, no balazos” para describir su política de seguridad que, según sus palabras, haría que en el país la guerra terminara.</p>
        <p>Con un año y tres meses en el gobierno, la estrategia se mantiene: impulsar múltiples programas sociales como becas para jóvenes sin empleo y crear una nueva fuerza de seguridad: la Guardia Nacional.</p>
        <p>Sin embargo, datos de fuentes oficiales revelan que en su primer año de gobierno la estrategia de los abrazos no fue suficiente, pues la violencia no solo continuó, también aumentó: la cifra de homicidios llegó a un nuevo record y el crimen organizado siguió matando con al menos 60% de los asesinatos atribuidos a su operación.</p>
        <p>Los balazos en el país tampoco pararon, al igual que en 2018, siete de cada diez asesinatos se cometieron con arma de fuego, mientras que los mexicanos que creen que la violencia empeora en el país creció 10%.</p>
        <p>Otras cifras que muestran el fracaso de la estrategia es la caída de detenidos por delitos federales graves y vinculados al crimen organizado, o el crecimiento de los ilícitos relacionados con narcotráfico. Frente a eso se redujeron los decomisos de drogas y la destrucción de laboratorios clandestinos.</p>
        <p>Sobretodo: la impunidad prevalece. Aunque se hagan detenciones o aumenten las denuncias por esos delitos, la Fiscalía envía al juez un mínimo de casos. En lavado de dinero, por ejemplo, la Unidad de inteligencia Financiera logró cifras record en aseguramientos, pero la Fiscalía esclareció menos del 1% de casos que le presentó.</p>
        <p>La creación y despliegue de la Guardia Nacional se puso en marcha, pero hoy dista mucho del perfil que se prometió y que quedó plasmado en la ley. No es una policía civil sino una fuerza militar que se rige en opacidad, que no ha llegado a la meta de elementos prevista, y cuya capacitación y efectividad es —al menos— dudosa, según expertos consultados.</p>
        <p>Animal Político hizo una revisión de los datos disponibles sobre la política de seguridad de López Obrador y, con el apoyo de especialistas, explica en tres entregas cómo en 2019 se aplicó una política de seguridad inercial, que siguió con lo que dejó el gobierno de Enrique Peña Nieto, que reforzó el militarismo, y que no ayudó a frenar la violencia ni la impunidad.</p>
      </div>
    </div>
  </div>
</section>

<section class="seg_video">
  <a href="" target="_blank">
    <div class="seg_video_binder">
      <div class="seg_video_binder_bg">
        <video playsinline="" muted="" autoplay="" loop="">
          <source src="<?php echo get_template_directory_uri(); ?>/layouts/img/video-arma.mp4">
        </video>
      </div>
      <div class="seg_video_binder_content">
        <div class="seg_video_binder_content_play"><img src="<?php echo get_template_directory_uri(); ?>/layouts/img/play.png"></div>
        <div class="seg_video_binder_content_cta">VIDEO</div>
        <div class="seg_video_binder_content_title">CRIMEN Y VIOLENCIA EN MÉXICO</div>
      </div>
    </div>
  </a>
</section>

<?php 
 $args = array(
  'post_type' => 'post',
  'post_status' => 'publish',
  'category_name' => 'seguridad-2019',
  'posts_per_page' => 3,
);
$arr_posts = new WP_Query( $args );
?>
<section class="seg_viewp_posts">
  <div class="container">
    <div class="row">
      <div class="col s12 seg_viewp_posts_column">
        <?php
        if ( $arr_posts->have_posts() ) :
          while ( $arr_posts->have_posts() ) :
              $arr_posts->the_post();
              ?>
              <a href="<?php the_permalink(); ?>">
                <div class="col s12 m4">
                  <article id="post-<?php the_ID(); ?>">
                      <?php
                      if ( has_post_thumbnail() ) :
                          the_post_thumbnail();
                      endif;
                      ?>
                      <h3><?php the_title(); ?></h3>
                      
                      <div class="entry-content">
                          <?php //the_excerpt(); ?>
                          <?php suguridad_posted_on();?>
                      </div>
                  </article>
                  <div class="seg_viewp_posts_border"></div>
                </div>
              </a>
              <?php
          endwhile;
        endif;
        ?>
      </div>
    </div>
  </div>
</section>

<section class="seg_graphic">
  <div class="container">
    <div class="row">
      <div class="seg_graphic_square">
        <p class="seg_graphic_square_title">GRÁFICOS</p>
        <div class="seg_carrousel slider">
          <img class="" src="<?php echo get_template_directory_uri(); ?>/layouts/img/grafica-ej.png"alt="">
          <img class="" src="<?php echo get_template_directory_uri(); ?>/layouts/img/grafica-ej.png"alt="">
          <img class="" src="<?php echo get_template_directory_uri(); ?>/layouts/img/grafica-ej.png"alt=""> 
        </div>
      </div>
    </div>
  </div>   
</section>
  
<?php
get_footer();
