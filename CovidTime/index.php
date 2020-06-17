<!DOCTYPE html>
<html>
	<head>
		<title>Linea del Tiempo COVID-19</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="./style.css?u12" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="./anime.min.js"></script>
		<script src="./funcs.js"></script>
		<script src="./main.js"></script>

		<!--TO ADD-->
		<meta name="keywords" content="COVID-19, méxico, linea del tiempo, animal politico, timeline covid, covid méxico, animal mx,"/>
		<meta name="description" content="Linea del tiempo covid-19 en México"/>
		<meta name="copyright"content="Animal Politico">
		<meta name="language" content="ES">
		<meta name="robots" content="index,follow" />
		<meta name="abstract" content="Linea del tiempo covid-19 en México">


		<meta property="og:type"               content="page" />
		<meta property="og:title"              content="Animal Politico" />
		<meta property="og:description"        content="Linea del tiempo covid-19 en México" />
		<meta property="og:image"              content="screenshot.png" />

		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:site" content="@Pajaropolitico">
		<meta name="twitter:title" content="Animal Politico">
		<meta name="twitter:description" content="Linea del tiempo covid-19 en México">
		<meta name="twitter:image" content="screenshot.png">

		<link rel="apple-touch-icon" sizes="180x180" href="./assets/meta/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="./assets/meta/favicon32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="./assets/meta/favicon16x16.png">
		<link rel="manifest" href="./assets/meta/site.webmanifest">
		<link rel="shortcut icon" href="./assets/meta/favicon.ico">
		<meta name="msapplication-TileColor" content="#da532c">
		<meta name="msapplication-config" content="./assets/meta/browserconfig.xml">
		<meta name="theme-color" content="#ffffff">
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-123147020-1');
		</script>
	</head>
	<body>
		<div id="wrapper">
			<div id="container">

				<nav class="nav_covid" id="menuToggle" role="navigation">
					<div class="nav_covid_menu" >
						<input type="checkbox" />
						<span></span>
						<span></span>
						<span></span>
						<ul class="nav_covid_menu_ul" id="menu">
							<a href="#intro"><li>PRIMEROS CASOS</li></a>
							<a href="#date-2"><li>SUSPENSIÓN DE CLASES</li></a>
							<a href="#date-3"><li>PRIMERA MUERTE</li></a>
							<a href="#date-4"><li>SUSANA DISTANCIA</li></a>
							<a href="#date-5"><li>INICIA FASE 2</li></a>
							<a href="#date-6"><li>MEDIDAS EXTREMAS EN ESTADOS</li></a>
							<a href="#date-7"><li>INICIA EMERGENCIA SANITARIA</li></a>
							<a href="#date-8"><li>CIERRAN PLAZAS COMERCIALES</li></a>
							<a href="#date-9"><li>CERCAN CALLES</li></a>
							<a href="#date-10"><li>FALTA DE INSUMOS MÉDICOS</li></a>
							<a href="#date-11"><li>MEXICANOS MUERTOS EN EU</li></a>
							<a href="#date-12"><li>ATAQUES CONTRA PERSONAL MÉDICO</li></a>
							<a href="#date-13"><li>INICIA FASE 3</li></a>
						</ul>
					</div>
					<div class="nav_covid_logo"></div>
				</nav>

				<!-- Inicio -->
				<section id="inicio">
					<div id="lineDrawing">
						<svg viewBox="0 0 270 170" >
							<g fill="none" fill-rule="evenodd" stroke="#ffd8cc" stroke-width=".8" class="lines">
								<path d="M268.5 0 L269 170 z" stroke-dasharray="500"/>
							</g>
						</svg> 
					</div>
					<h1 id="inicio-data">
						<div id="inicio-data-covid">COVID-19</div>
						<div  id="inicio-data-mex">MÉXICO</div>
						<div id="inicio-data-txtline">Línea del <b>tiempo</b></div>
					</h1>
					<a href="#aguila">
						<i id="arrdown" class="material-icons">keyboard_arrow_down</i>
					</a>
				</section>

				<section id="aguila">
					<div class="aguila-img"></div>
				</section>
				
				<!-- Intro -->
				<section id="intro">
					
					<div class="datacont" id="intro-data">
						<div class="datacont-title" id="intro-data-title">
							PRIMEROS CASOS
						</div>
						<div  class="datacont-day" id="intro-data-des">
						 27 de febrero
						</div>
						<div  class="datacont-txt" id="intro-data-txt">
							Se registran los dos primeros casos de <b>COVID-19</b> en el país. Ambos por importación.<br> <br>
							Uno en Ciudad de México y otro en Sinaloa.
						</div>
					</div>
					<div id="intro-img" style="background-image: url(./assets/img/img-date1.jpg)"></div>
					<!-- <div id="intro-circle"></div> -->
				</section>

				<section id="date-2">
					<div class="datacont" >
						<div class="datacont-title" id="date-2-data-title">
							SUSPENSIÓN DE CLASES
						</div>
						<div class="datacont-day"  id="date-2-data-des">
							14 DE MARZO
						</div>
						<div class=line></div>
						<div class="datacont-txt"  id="date-2-data-txt">
						Ante la llegada del virus al país, la SEP anuncia la suspensión de clases en todos los niveles, a partir del 20 de marzo hasta el 20 de abril.<br><br> Algunas escuelas decidieron adelantarse y suspendieron actividades esa misma semana.
						</div>
					</div>
					<video id="date2-video" preload="none" playsinline muted autoplay loop>
						<source src="./assets/videos/animacion-nina.mp4">
					</video>
					<!-- <div  style="background-image: url(./assets/img/img-date2.png)"></div> -->
				</section>

				<section id="date-3">
					<div class="datacont" id="date-3-data">
						<div class="datacont-title" id="date-3-data-title">
							PRIMERA MUERTE
						</div>
						<div class="datacont-day"  id="date-3-data-des">
							18 DE MARZO
						</div>
						<div class="datacont-txt"  id="date-3-data-txt">
							Se reporta la primera muerte por COVID-19, un hombre de 41 años que días antes había acudido a un concierto en Ciudad de México.
						</div>
					</div>
	
				</section>

				<section id="date-4">
					<div class="datacont" id="date-4-data">
						<div class="datacont-title" id="date-4-data-title">
							SUSANA DISTANCIA
						</div>
						<div class="datacont-day"  id="date-4-data-des">
							21 DE MARZO
						</div>
						<div class="datacont-txt"  id="date-4-data-txt">
						Autoridades de Salud federal presentan el programa Susana Distancia y anuncian medidas de  revención y distanciamiento social.
						</div>
					</div>
					<div class="date4-img" style="background-image: url(./assets/img/img-date4.jpg)"></div>
				</section>
				
				<section id="date-5">
					<div class="datacont" id="date-5-data">
						<div class="datacont-title" id="date-5-data-title">
							INICIA FASE 2
						</div>
						<div class="datacont-day"  id="date-5-data-des">
							24 DE MARZO
						</div>
						<div class="datacont-txt"  id="date-5-data-txt">
						Tras casi un mes de incremento de casos, el subsecretario de Salud Hugo López-Gatell declara el <b>inicio de la Fase 2,</b> anuncia que el país ha entrado a la etapa de transmisión comunitaria y anuncia medidas más restrictivas para salir a la calle.
						</div>
					</div>
					<div class="date5-img" style="background-image: url(./assets/img/img-date5.jpg)"></div>
				</section>

				<section id="date-6">
					<div class="datacont" id="date-6-data">
						<div class="datacont-title" id="date-6-data-title">
							MEDIDAS EXTREMAS EN ESTADOS
						</div>
						<div class="datacont-day"  id="date-6-data-des">
							26 DE MARZO
						</div>
						<div class="datacont-txt"  id="date-6-data-txt">
							Estados como Sonora, Coahuila, Baja California, Guerrero y Michoacán inician la implementación de medidas extremas en varios de sus municipios, como toques de queda, ley seca, cierre de fronteras y uso obligatorio de cubrebocas.   
						</div>
					</div>
					<video id="date6-video" preload="none" playsinline muted autoplay loop>
						<source src="./assets/videos/animacion-mano-medidas.mp4">
					</video>
				</section>

				<!-- 30 ABRIL -->
				<section id="date-7">
					<div class="datacont" id="date-7-data">

						<div class="datacont-module">
							<div class="datacont-title" id="date-7-data-title">
							INICIA EMERGENCIA SANITARIA
							</div>
							<div class="datacont-day"  id="date-7-data-des">
							30 DE MARZO
							</div>
							<div class="datacont-txt"  id="date-7-data-txt">
							El gobierno de México declara <b>emergencia sanitaria</b> tras registrarse 28 muertes y 1,094 casos positivos. <br/><br/>	Se exhorta a las empresas a iniciar con el trabajo a distancia y se suspenden las actividades no esenciales.
							</div>
						</div>

					</div>
					<div class="date7-img"></div>
				</section>

				<section id="date-8">
					<div class="datacont" id="date-8-data">
						<div class="datacont-title" id="date-8-data-title">
							CIERRAN PLAZAS COMERCIALES
						</div>
						<div class="datacont-day"  id="date-8-data-des">
							31 DE MARZO
						</div>
						<div class="grid">
							<div class="datacont-txt"  id="date-8-data-txt">
								El gobierno de la Ciudad de México ordena el cierre de 338 plazas comerciales a partir del 1 de abril.<br><br>
								Los únicos negocios que podrán permanecer abiertos son las tiendas y farmacias 
							</div>
						</div>
					</div>
					<div class="date8-img" style="background-image: url(./assets/img/img-date8.jpg)"></div>
				</section>
				
				<section id="date-9">
					<div class="datacont" id="date-9-data">
						<div class="datacont-title" id="date-9-data-title">
							CERCAN CALLES
						</div>
						<div class="datacont-day"  id="date-9-data-des">
							5 DE ABRIL
						</div>
						<div class="datacont-txt"  id="date-9-data-txt">
							Atendiendo las medidas de la emergencia sanitaria, inicia el cierre de calles en el centro de la capital y de plazas públicas como la Plancha del Zócalo y Bellas Artes
						</div>
					</div>
				</section>

				<section id="date-10">
					<div class="datacont" id="date-10-data">
						<div class="datacont-title" id="date-10-data-title">
							FALTA DE INSUMOS MÉDICOS
						</div>
						<div class="datacont-day"  id="date-10-data-des">
							6 DE ABRIL
						</div>
						<div class="datacont-txt"  id="date-10-data-txt">
						Comienzan las manifestaciones por parte de personal médico de distintos puntos del país reportando falta de insumos médicos para atender a pacientes con COVID-19. <br><br>Denuncian que tienen que comprar el equipo con su propio dinero.
						</div>
					</div>
					<video id="date10-video"  playsinline muted autoplay loop>
						<source src="./assets/videos/animacion-proteccion.mp4">
					</video>
				</section>

				<!-- 8 ABRIL -->
				<section id="date-11">
					<div class="datacont" id="date-11-data">
						<div class="datacont-title" id="date-11-data-title">
							MEXICANOS MUERTOS EN EU
						</div>
						<div class="datacont-day"  id="date-11-data-des">
							8 DE ABRIL
						</div>
						<div class="datacont-txt"  id="date-11-data-txt">
							El gobierno de México reporta que suman 108 mexicanos fallecidos por <b>COVID-19</b> tan solo en Nueva York.
						</div>
					</div>
				</section>

				<!-- 10 ABRIL -->
				<section id="date-12">
					<div class="datacont" id="date-12-data">
						<div class="datacont-title" id="date-12-data-title">
							ATAQUES CONTRA PERSONAL MÉDICO
						</div>
						<div class="datacont-day"  id="date-12-data-des">
							10 DE ABRIL
						</div>
						<div class="datacont-txt"  id="date-12-data-txt">
							Se duplican las denuncias por ataques físicos, verbales y de discriminación contra el personal médico, principalmente en el interior del país. <br><br>Algunas enfermeras incluso han reportado ataques con cloro o bebidas calientes.
						</div>
					</div>
					<video id="date12-video"  playsinline muted autoplay loop>
						<source src="./assets/videos/animacion-ataque-personal.mp4">
					</video>
				</section>

				<!-- 14 ABRIL -->
				<!-- <section id="date-13">
					<div class="datacont" id="date-13-data">
						<div class="datacont-title" id="date-13-data-title">
							DÍA CON MÁS MUERTES
						</div>
						<div class="datacont-day"  id="date-13-data-des">
							14 DE ABRIL
						</div>
						<div class="datacont-txt"  id="date-13-data-txt">
							México registra su día más letal por <b>COVID-19</b>, con 74 fallecimientos en un solo día y un total de 406 defunciones, así como 5 mil 399 casos positivos. <br/><br/>	Las autoridades advierten que el país está muy cerca de la fase 3.
						</div>
					</div>
				</section> -->

				<!-- 20 ABRIL -->
				<section id="date-14">
					<div class="datacont" id="date-14-data">
						<div class="datacont-title" id="date-14-data-title">
							INICIA FASE 3
						</div>
						<div class="datacont-day"  id="date-14-data-des">
							20 DE ABRIL
						</div>
						<div class="datacont-txt"  id="date-14-data-txt">
							<p>Salud informa que el número de casos aumentará más rápido.</p> <p>Amplía hasta el 30 de mayo el aislamiento en municipios en donde hay más contagios</p>
						</div>
					</div>
				</section>

				<section id="footer">
					<div class="datacont" id="footer-data">
						<div class="datacont-title" id="footer-data-title">
						CONTINUAREMOS ACTUALIZANDO ESTA
						</div>
						<div  class="datacont-txtline" id="footer-data-txtline">Línea del <b>tiempo</b></div>	
					</div>

					<div class="datacont-infobird">
						<a href="https://www.animalpolitico.com/noticias-coronavirus-covid-2019-verificacion/" target="_blank">
							<div class="datacont-cta">
							INFÓRMATE SOBRE <br> <b>COVID-19</b>
							</div>
						 </a>
						<video id="footer-video" preload="none" playsinline muted autoplay loop>
						<source src="./assets/videos/animacion-pajaro.mp4">
						</video>
					</div>

				</section>
			</div>
		</div>

		<script type="text/javascript">
    var lineDrawing = anime({
          targets: '#lineDrawing .lines path',
          strokeDashoffset: [anime.setDashoffset, 3],
          easing: 'easeInOutSine',
          duration: 4000,
          delay: function(el, i) { return i * 500 },
          
          // loop: true
		});
		
		
		</script>
		<script>
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script>
	</body>
</html>