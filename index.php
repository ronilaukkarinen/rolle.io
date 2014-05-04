<?php
require 'includes/config.php';
require 'includes/aboutPage.class.php';
require 'includes/vcard.class.php';

$profile = new AboutPage($info);

if(array_key_exists('json',$_GET)){
	$profile->generateJSON();
	exit;
} 
else if(array_key_exists('vcard',$_GET)){
	$profile->downloadVcard();
	exit;
}
?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">          

        <title>Kotisivut, sosiaalinen media &mdash; Roni Laukkarinen, Jyväskylä</title>

        <link rel="stylesheet" href="webfonts/proximanova/stylesheet.css" />
        <link rel="stylesheet" href="webfonts/minionpro/stylesheet.css" />
        <link rel="stylesheet" href="webfonts/gotham/stylesheet.css" />
        <link rel="stylesheet" href="style.css" />

        <link rel="shortcut icon" href="favicon.ico" />
		<link rel="icon" href="favicon.png" type="image/png" /> 
		<link rel="apple-touch-icon" href="iphone-touch-icon.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="iphone-touch-icon.png" />

		<script src="js/jquery-1.9.0.min.js"></script>

		<link rel="stylesheet" href="/js/fancybox/jquery.fancybox.css?v=2.1.4" type="text/css" media="screen" />
		<script src="/js/fancybox/jquery.fancybox.pack.js?v=2.1.4"></script>

		<link rel="stylesheet" href="/js/fancybox/helpers/jquery.fancybox-buttons.css?v=1.0.5" type="text/css" media="screen" />
		<script src="/js/fancybox/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
		<script src="/js/fancybox/helpers/jquery.fancybox-media.js?v=1.0.5"></script>

		<link rel="stylesheet" href="/js/fancybox/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
		<script src="/js/fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>
		
        <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]--> 
    </head>

    <body>
	
		<div id="wrapper">

		<div class="hover flipcard">

				<div class="front">
					<img src="images/me-300x300.png" alt="Picture of me! Roni Laukkarinen, nice to meet you!" />
				</div>

				<div class="back">
					<p><strong><a href="https://plus.google.com/116255313263451216782?rel=author">Roni Laukkarinen</a></strong><br />
						Jyväskylä, Finland<br />
						<a href="?vcard">vcard</a> / <a href="?json">json</a></p>
				</div>

		</div>
		
		<header id="header">
			<h1><?php $greets = array(
			
			'Ya at eeh! <span>(Tervehdys navajoksi)</span>',
			'Aloha! <span>(Tervehdys hawaiiksi)</span>',
			"Ba'ax ka wa'alik! <span>(Tervehdys mayaksi)</span>",
			"Ia! Ia shugg! <span>(Tervehdys H.P. Lovecraftin R'lyehian-kielellä)",
			"Suilad! <span>(Tervehdys Sindarin-haltiakielellä Taru Sormusten Herrasta)</span>",
			"Aiya! <span>(Tervehdys Quenya-haltiakielellä Taru Sormusten Herrasta)</span>",
			"NuqneH! <span>(Tervehdys klingoniksi Star Trekistä)</span>",
			"Onak sha sree! <span>(Tervehdys goa'uldiksi Tähtiportista)</span>",
			"Kel shak! <span>(Tervehdys goa'uldiksi Tähtiportista)</span>",
			"M'athchomaroon! <span>(Tervehdys dothrakiksi Game of Thronesista)</span>"
			
			); 
			$randomgreet = array_rand($greets); echo $greets[$randomgreet]; ?></h1>
        </header>

		<div id="whois" class="area">

			<p><strong>Moro! Kiva kun kiinnostuit.</strong> Nimeni on Roni, mutta netissä ja muuallakin minua sanotaan Rolleksi. Tämä sivu on yksinkertainen käyntikorttini ja infosivuni. Tervetuloa!</p>

			<p class="email"><span class="icon"></span><span class="email">roni@laukkarinen.info</span></p>

			<p class="onlineblock">Olen juuri nyt <?php
$awayinfo=file('http://peikko.us/status.log');
foreach ($awayinfo as $awayinfot);
$awayinfot = utf8_encode($awayinfot); // ääkköset näkyviin
$tila_raw = explode('|', $awayinfot);
$status = $tila_raw[0];
$syy = $tila_raw[1];

if ($status == "paikalla") { echo '<span class="online status"><a href="javascript:void(0)" class="blob"><span class="info">Bitlbee-palvelimeni yhdistää yleisimmät pikaviestimet samaan. Olen samaan aikaan paikalla kaikkialla.</span></a><span class="status-text">paikalla</span>'; } 
else { echo '<span class="away status"><a href="javascript:void(0)" class="blob"><span class="info">Bitlbee-palvelimeni yhdistää yleisimmät pikaviestimet samaan. Olen samaan aikaan paikalla kaikkialla.</span></a><span class="status-text">poissa</span>'; }
echo '</span>';
//echo "<br /><a onclick=\"window.open('http://www.plugoo.com/chat/run.php?go=G2P3BZSDWYHDG9G&amp;sk=3&amp;height=300&amp;width=140','',CONFIG='HEIGHT=300,WIDTH=140,TOOLBAR=no,MENUBAR=no,SCROLLBARS=no,RESIZABLE=no,LOCATION=no,DIRECTORIES=no,STATUS=no')\" href=\"javascript:void(0)\">";

//echo " &mdash; <a href=\"javascript:;\" onclick=\"plupper.start('rolle@plupper.com')\">";
// if ($status == "paikalla") { echo 'Avaa reaaliaikainen chat'; } 
// else { echo 'Jätä viesti ja yhteystietosi'; }
//echo '</a>';

?></p>

		</div>

		<div id="profession" class="details">

			<h2>Ammattitaito</h2>
			<p>Olen ammatiltani web-alan yrittäjä, <strong>web-suunnittelija</strong>/web-kehittäjä omassa firmassani <a href="http://www.dude.fi">Digitoimisto Dude Oy:ssa</a>. Toisin sanoen teen työkseni nettisivuja, kotisivuja, verkkototeutuksia, mainoksia, ulkoasuja, koodailuja, verkkokauppoja, mitä ikinä netti pitääkään sisällään.</p>

			<p>Ansioluetteloni ja portfolioni löytyvät sosiaalisesta mediasta (kolme kuvaketta alla). <strong>Jos tarvitset sivuja tai muuta nettiin liittyvää</strong>, pistä viestiä minkä kanavan kautta tahansa, esim. <a href="http://www.dude.fi/yhteystiedot/#poks">oman yritykseni (Digitoimisto Dude Oy) yhteystietolomakkeesta</a> tai <a href="http://twitter.com/rolle">Twitterissä</a>.</p>

			<ul>
				<li class="resume"><a href="http://www.linkedin.com/in/rolaukka" target="_blank" id="linkedin" title="LinkedIN-ansioluetteloni">LinkedIN</a></li>
				<li class="portfolio"><a href="http://be.net/rolle" target="_blank" id="behance" title="Behance-portfolioni">Behance</a></li>
				<li class="github last"><a href="http://github.com/ronilaukkarinen" target="_blank" id="github" title="Github-koodikirjastoni">Github</a></li>
			</ul>

		</div>

		<div id="websites" class="details">

			<h2>Nettisivut</h2>

			<p>Aloitin puuhailun nettisivujen parissa 90-luvulla omaksi ilokseni. Siitä lähtien olen ollut koukussa ja Internet on ollut minulle arkipäivää. Olen toteuttanut lukuisia verkkoratkaisuja, en pelkästään itselleni vaan myös yrityksille, organisaatioille ja yksityisille tahoille. Joitakin vapaa-ajan projektejani löydät alta.</p>

			<ul>
				<li class="problemsolvin"><a href="http://www.problemsolv.in" target="_blank" title="My IT-blog in english">Problemsolv.in</a></li>
				<li class="peikko second"><a href="http://www.peikko.us" target="_blank" title="Kotipalvelimeni">Peikko.us</a></li>
				<li class="rollemaa last second"><a href="http://www.rollemaa.org" target="_blank" title="Ensimmäisiä verkkosivustojani">Rollemaa.org</a></li>
			</ul>
		</div>

		<div id="socialmedia" class="details">

			<h2>Sosiaalinen media</h2>

			<p>Suomalainen keksintö, samalla Internet-historian vanhin pikaviestin IRC keksittiin syntymävuotenani 1988. Olin käyttänyt nettiä ensisijaisena kommunikaatiovälineenä jo kauan ennen kuin tekstipohjaiset IM-sovellukset, purkit, irkit ja foorumit pikkuhiljaa muuttuivat tämän päivän 'sosiaaliseksi mediaksi'.</p>

			<p>Testailen innolla uusia sosiaalisen median ratkaisuja ja nykyään olen mukana seuraamassa yli kuudenkymmenen sosiaalisen median palvelun kehitystä. Alla itselleni tällä hetkellä tärkeimpiä.</p>

			<ul>
				<li class="facebook"><a title="Stalk me on Facebook!" target="_blank" href="http://facebook.com/rollefb">Facebook</a></li>
				<li class="googleplus second"><a title="Add me to your circles at Google+!" target="_blank" href="http://gplus.to/rolle">Google+</a></li>
				<li class="twitter"><a title="Follow me in Twitter!" target="_blank" href="http://twitter.com/rolle">Twitter</a></li>
				<li class="youtube last second"><a title="Subscribe to my videos in YouTube!" target="_blank" href="http://youtube.com/user/rollex2">Youtube</a></li>
				<li class="lastfm"><a title="See my taste in music in Last.fm!" target="_blank" href="http://www.last.fm/user/rolle-/">Last.fm</a></li>
				<li class="foursquare second"><a title="See where I go in Foursquare!" target="_blank" href="http://foursquare.com/rolle">Foursquare</a></li>
				<li class="instagram"><a title="View my pics in Instagram!" target="_blank" href="http://instagram.com/rolle_">Instagram</a></li>
				<li class="delicious last second"><a title="View my bookmarks in Delicious!" target="_blank" href="http://delicious.com/rollex">Delicious</a></li>
				<li class="getglue"><a title="Check out what I watch and listen at GetGlue!" target="_blank" href="http://getglue.com/rolle_">GetGlue</a></li>
				<li class="untappd second"><a title="View my beer reviews in Untappd!" target="_blank" href="http://untappd.com/user/rolle">Untappd</a></li>
				<li class="letterboxd"><a title="View my movie reviews in Letterboxd!" target="_blank" href="http://letterboxd.com/rolle">Letterboxd</a></li>
			</ul>

		</div>

		<footer id="footer">

			<p>Säädän jatkuvasti jonkun prokkiksen parissa, oli sitten kyseessä sovellus, sivusto tai scripti. Tämäkin sivu näytti vuonna 2012 vähän erilaiselta. <a href="2012">Tsekkaa, jos kiinnostaa.</a></p>

			<p>Lisää mahtavaa settiä tulossa pian. Minua ei harmita kiireisyys &mdash; se pitää minut järjissäni.</p>
			<p class="reclamation">Tämä sivu on rakennettu täysin tyhjästä 25. tammikuuta 2013. Vimeisin pikkupäivitys 30. joulukuuta 2013 (sitä ennen 25. kesäkuuta 2013).</p>

		</footer>

		</div>
		
<div class="forenglish">

<strong>Strange language?</strong> It's finnish! But hey, I understand if you don't get a word. Check out this page in english <a href="index_en.php">here!</a>

</div>

<script>
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38578551-1']);
  _gaq.push(['_setDomainName', 'laukkarinen.info']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>

<script src="https://www.google.com/jsapi"></script>

		<script>		
		// $(function(){

		// 	$("#websites-title a").click(function(){
  		// 			$("#websites-title").hide();
  		// 			$("#websites-block").fadeIn(1000);
		// 	});

			$(".fancy").fancybox({
				maxWidth	: 800,
				maxHeight	: 600,
				fitToView	: false,
				width		: '70%',
				height		: '70%',
				autoSize	: false,
				closeClick	: false,
				openEffect	: 'none',
				closeEffect	: 'none'
			});

			$('.hover').hover(function(){
				$(this).addClass('flip');
			},function(){
				$(this).removeClass('flip');
			});

		// });
		</script>

    </body>
</html>