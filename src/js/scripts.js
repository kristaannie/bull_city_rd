// The namespace for this application
$(function() {
	console.log( "ready!" );
	$('.outer-modal').hide();
	$('.x-button').click(function() {
  	$('.outer-modal').hide();
  });

   $('button').on('click', function(){
   $('.outer-modal').fadeIn('slow','swing');
  });


	$('.practice').click(function() {
  	$('.outer-modal').show(200);
  	$('.practice-content').show();
	  $('.learn-more-content').hide();
    $('.follow-content').hide();
  });

	$('.learn-more').click(function() {
  	$('.outer-modal').show();
  	$('.learn-more-content').show();
  	$('.practice-content').hide();
    $('.follow-content').hide();
  });

  $('.follow-us').click(function() {
    $('.outer-modal').show();
    $('.follow-content').show();
    $('.practice-content').hide();
    $('.learn-more-content').hide();
  });	
  	
});


