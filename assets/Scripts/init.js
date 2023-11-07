	// Función que se ejecutará antes de que la ventana se cierre
	window.addEventListener('beforeunload', function (event) {
		// Cancelar el cierre por defecto para mostrar una confirmación personalizada
		event.preventDefault();

		// Mostrar un mensaje de confirmación personalizado
		var mensaje = '¿Estás seguro de que quieres abandonar la transacción?';
		event.returnValue = mensaje;

		// Devolver el mensaje para mostrarlo en el cuadro de diálogo
		return mensaje;
	});

(function(w){
	var sw = document.body.clientWidth,
		sh = document.body.clientHeight;

	$(w).resize(function(){ //Update dimensions on resize
		sw = document.body.clientWidth;
		sh = document.body.clientHeight;
		
		//updateAds();
	});


	//Navigation toggle
	$('.nav-toggle-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});
	
	//Navigation toggle
	$('.nav-toggle-search').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header .search-form').toggleClass('active');
    });
})(this);


jQuery(document).ready(function(){
	console.log('Activando el colorbox');
	jQuery(".iframe").colorbox({iframe:true, width:"960px",maxWidth:"90%", height:"90%", overlayClose:false, closeButton:false, escKey:false	, onComplete: function() {
		$(window).on("resize", function() {
		  $.colorbox.resize({
			width: $(window).width() > 960 ? "960px" : "90%",
			height: $(window).height() > 720 ? "680px" : "90%"
		  });
		});
	}});
});