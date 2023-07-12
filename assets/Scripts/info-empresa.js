$(document).ready(function() {	
	var $win = $(window);
	$('.company-info-header .toggler').on('click touchend',function(e){
		e.preventDefault();
		e.stopPropagation();
		if($win.width() <= 768){
			$($(this).attr('href')).slideToggle();
			$(this).toggleClass('active');
		}
		
	});
	
});