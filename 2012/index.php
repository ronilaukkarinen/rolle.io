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
        <meta name="description" content="Online info page of <?php echo $profile->fullName()?>. Learn more about me and download a vCard." />
        <title>Just call me Rolle.</title>
        <link rel="stylesheet" href="style.css" />
		<link rel="shortcut icon" href="/favicon.ico" />
		<link rel="apple-touch-icon" href="/favicon.png" />
		<link rel="icon" href="/favicon.png" type="image/png" /> 
		
        <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]--> 
    </head>

    <body>
	
		<div id="wrapper">
		
		<header>
			<h1><?php echo $profile->fullName()?></h1>
            <h2>Just call me Rolle.</h2>
        </header>
		
		<div class="work">
			<div id="resume">
				<h3 class="resume">Résumé:</h3>
				<ul>
				<li><a href="http://www.linkedin.com/in/rolaukka" id="linkedin" title="Check out my Résumé in LinkedIN">LinkedIN</a></li>
				</ul>
				</div>
				
			<div id="portfolio">
				<h3 class="portfolio">Portfolio:</h3> 
				<ul>
				<li><a href="http://be.net/rolle" id="behance" title="Check out my Portfolio in Behance">Behance</a></li>
				</ul>
			</div>
		</div>
		
		<div class="imsocial">
		<h3 id="imsocial">I'm social:</h3>
		<ul>
		<li><a title="Stalk me in Facebook!" href="http://facebook.com/rollefb" id="facebook" class="firstrow">Facebook</a></li>
		<li><a title="Add me to your circles at Google+!" href="http://gplus.to/rolle" id="googleplus" class="thirdrow">Google+</a></li>
		<li><a title="Follow me in Twitter!" href="http://twitter.com/rolle" id="twitter" class="firstrow">Twitter</a></li>
		<li><a title="Subscribe to my videos in YouTube!" href="http://youtube.com/user/rollex2" id="youtube" class="firstrow">Youtube</a></li>
		<li><a title="See my taste in music in Last.fm!" href="http://www.last.fm/user/rolle-/" id="lastfm" class="firstrow">Last.fm</a></li>
		<li><a title="Check out my videos in Vimeo!" href="http://www.vimeo.com/rollex" id="vimeo" class="firstrow">Vimeo</a></li>
		<li><a title="See my photography in Flickr!" href="http://www.flickr.com/photos/rolle-/" id="flickr" class="secondrow">Flickr</a></li>
		<li><a title="Check out my profile in Myspace!" href="http://www.myspace.com/ellor" id="myspace" class="secondrow">MySpace</a></li>
		<li><a title="Look at my tumbls at Tumbrl!" href="http://rolle.tumblr.com" id="tumblr" class="secondrow">Tumblr</a></li>
		<li><a title="See where I go in Foursquare!" href="http://foursquare.com/rolle" id="foursquare" class="secondrow">Foursquare</a></li>
		<li><a title="Listen my playlists at Spotify!" href="http://open.spotify.com/user/rolle-" id="spotify">Spotify</a></li>
		<li><a title="View my pics in Instagram!" href="http://instagram.com/rolle_" id="instagram" class="thirdrow">Instagram</a></li>
		<li><a title="View my bookmarks in Delicious!" href="http://delicious.com/rollex" id="delicious" class="thirdrow">Delicious</a></li>
		<li><a title="View my movie reviews in Letterboxd!" href="http://letterboxd.com/rolle" id="letterboxd" class="thirdrow">Letterboxd</a></li>
		</ul>
		</div>
		
		<footer><p>Living in a candy world. Blogging <a href="http://rollemaa.org">in finnish</a> and <a href="http://problemsolv.in">in english</a>. Using Internet. A lot. I have lots of <a href="http://github.com/ronilaukkarinen/">projects</a> and <a href="http://peikko.us">a server</a> too.</p>
		
		<p><a href="http://about.me/rolle" class="exlink">about.me.</a></p></footer>
		</div>
		
		<div class="edge" id="left"></div>
		<div class="edge" id="right"></div>
		<div class="edge" id="top"></div>
		<div class="edge" id="bottom"></div>

    </body>
</html>