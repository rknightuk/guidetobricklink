$(function(){

	$('.guide-search-input').keyup(function(e){
		if ($('.no-results').is(':visible')) {
			$('.no-results').hide();
		}
		
		var term = $(e.currentTarget).val();
		var $guides = $('.guide-item');

		$guides.show().filter(function() {
			var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
			return !~text.indexOf(term);
		}).hide();

		if ( ! $('.guide-item').is(':visible')) {
			$('.no-results').show();
		}
    });

});