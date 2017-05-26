
$(document).ready(function(){

	if($('.sidebar-link').length > 0){

		$('#sidebar').fadeOut();
		$('.main-section').addClass('col-centered');
		$('.sidebar-link').on('click', function(e){
			e.preventDefault();
			$('.main-section').toggleClass('col-centered');
			$('#sidebar').fadeToggle('slow').toggleClass('show');

			if($(window).width() < 768){
				if($('#sidebar').hasClass('show')){
					$('.navbar-header button').trigger('click');
					$('body').animate({
						scrollTop: $('#sidebar').offset().top
					}, 800);
				}
			}
			
		});
	}

});