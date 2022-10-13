$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".isi").slideToggle("slow");

	$('nav ul li.tidak-nyala').each(function(index, el) {
		var isiID = el.id.split('-')[1];
		$('.isi#' + isiID).hide();
	});
});

$('nav').delegate('.tidak-nyala', 'click', function(event) {
	var pilihIsi = this.id.split('-')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.isi:visible').fadeOut('slow', function() {
		$('.isi#' + pilihIsi).fadeIn('slow');
	});

	var $this = $(this);
	$this.removeClass('tidak-nyala').addClass("nyala");
    $this.siblings().addClass('tidak-nyala').removeClass('nyala');

    });
});
