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
        <meta name="description" content="Online info page of <?php echo $profile->fullName()?>. Learn more about me and download a vCard." />

        <title>Web designer &mdash; Roni Laukkarinen</title>

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
		</script>
		
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
			
			'Ya at eeh! <span>(Hello in Navajo)</span>',
			'Hellurei! <span>(Hello in Finnish &mdash; funny way)</span>',
			'Aloha! <span>(Hello in Hawaiian)</span>',
			"Ba'ax ka wa'alik! <span>(Hello in Mayan)</span>",
			"Ia! Ia shugg! <span>(Hello in H.P. Lovecraft's R'lyehian)",
			"Suilad! <span>(Hello in Sindarin Elvish from The Lord of the Rings)</span>",
			"Aiya! <span>(Hello in Quenya Elvish from The Lord of the Rings)</span>",
			"NuqneH! <span>(Hello in Klingon from Star Trek)</span>",
			"Onak sha sree! <span>(Hello in Goa'uld from Star Gate)</span>",
			"Kel shak! <span>(Hello in Goa'uld from Star Gate)</span>",
			"M'athchomaroon! <span>(Hello in Dothraki from Game of Thrones)</span>"
			
			); 
			$randomgreet = array_rand($greets); echo $greets[$randomgreet]; ?></h1>
        </header>

		<div id="whois" class="area">

			<p><strong>Thank you for being interested in me.</strong> My name is Roni, but as you know me now, please call me Rolle. This one simple page is here for one reason only &mdash; to make sure I really exist. Welcome!</p>

			<p class="email"><span class="icon"></span><span class="email">roni@laukkarinen.info</span></p>

			<p class="onlineblock">Currently I'm <?php
$awayinfo=file('http://peikko.us/status.log');
foreach ($awayinfo as $awayinfot);
$awayinfot = utf8_encode($awayinfot); // ääkköset näkyviin
$tila_raw = explode('|', $awayinfot);
$status = $tila_raw[0];
$syy = $tila_raw[1];

if ($status == "paikalla") { echo '<span class="online status"><a href="javascript:void(0)" class="blob"><span class="info">My BitlBee-server combines the most common IM software in the same place. I\'m always online.</span></a><span class="status-text">online</span>'; } 
else { echo '<span class="away status"><a href="javascript:void(0)" class="blob"><span class="info">My BitlBee-server combines the most common IM software in the same place. I\'m always online.</span></a><span class="status-text">away from keyboard</span>'; }
echo '</span>';
//echo "<br /><a onclick=\"window.open('http://www.plugoo.com/chat/run.php?go=G2P3BZSDWYHDG9G&amp;sk=3&amp;height=300&amp;width=140','',CONFIG='HEIGHT=300,WIDTH=140,TOOLBAR=no,MENUBAR=no,SCROLLBARS=no,RESIZABLE=no,LOCATION=no,DIRECTORIES=no,STATUS=no')\" href=\"javascript:void(0)\">";

//echo " &mdash; <a href=\"javascript:;\" onclick=\"plupper.start('rolle@plupper.com')\">";
// if ($status == "paikalla") { echo 'Avaa reaaliaikainen chat'; } 
// else { echo 'Jätä viesti ja yhteystietosi'; }
//echo '</a>';

?></p>

		</div>

		<div id="profession" class="details">

			<h2>Profession</h2>
			<p>I am a professional web designer from Finland. Cliché or not, I'm here to make Internet a better place. In other words, I like creating web-things the most &mdash; be it web apps, coding work, graphic design or website layout. And yes, I'm available if you are in need of a website.</p>

			<ul>
				<li class="resume"><a href="http://www.linkedin.com/in/rolaukka" target="_blank" id="linkedin" title="Check out my Résumé on LinkedIN">LinkedIN</a></li>
				<li class="portfolio"><a href="http://be.net/rolle" target="_blank" id="behance" title="Check out my Portfolio on Behance">Behance</a></li>
				<li class="github last"><a href="http://github.com/ronilaukkarinen" target="_blank" id="github" title="Check out my work on Github">Github</a></li>
			</ul>

		</div>

		<div id="websites" class="details">

			<h2>Websites</h2>

			<p>I started creating websites in around 1996 just for myself. Since then I have always had more than couple website-projects of my own. Some of the selected work below.</p>

			<ul>
				<li class="problemsolvin"><a href="http://www.problemsolv.in" target="_blank" title="My IT-blog in english">Problemsolv.in</a></li>
				<li class="peikko second"><a href="http://www.peikko.us" target="_blank" title="My home server">Peikko.us</a></li>
				<li class="rollemaa last second"><a href="http://www.rollemaa.org" target="_blank" title="One of my first sites">Rollemaa.org</a></li>
			</ul>
		</div>

		<div id="socialmedia" class="details">

			<h2>Social media</h2>

			<p>IRC was invented 1988, the year I was born. When text based conversations and chats slowly transferred into 'social media' as we know it today, that side of social life had been already been a part of me since childhood. Currently I'm registered on over 60 social media sites.</p>

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

			<!--<p>Services above are the ones I'm actually using. <a class="fancy fancybox.ajax" href="other-social-media.php">Check out other 50+ here</a>. I also had an account on services that no longer exist, like <strong>Ping.fm</strong>, <strong>Wakoopa</strong>, <strong>Picplz</stong> and <strong>Jaiku</strong>.</p>-->

		</div>

		<footer id="footer">

			<p>Most of my stuff are in Finnish since I'm a proud Finn, but I do a lot of things in English as well. I'm constantly installing, coding or developing <i>something</i>, be it apps, scripts, websites, or ideas. Want to go back in time to see this page as it was in 2012? <a href="2012">Do take a peek!</a></p>

			<p>More awesome stuff coming soon. I'm not sorry for being busy &mdash; it keeps me sane.</p>
			<p class="reclamation">This page was completely hand crafted by me on 25. January, 2013. Last minor update on this page happened on 30. December 2013 (before that 1. September, 2013).</p>

		</footer>

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