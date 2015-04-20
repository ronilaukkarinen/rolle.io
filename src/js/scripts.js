// $( document ).ready(function() {
// });

$(window).load(function() {
	setTimeout(function() {
		$(".preloader").fadeOut(function() {
		    $(this).hide();
		});
	}, 1000);
});