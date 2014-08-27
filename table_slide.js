  $(document).ready(function(){


  var currentPosition = 0;
  var slides = $('.table_contain');
  var numberOfSlides = slides.length;

if(screen.width > 768){
  var slideHeight = 360;
  

}else if(screen.width < 500){
    var slideHeight = auto;

}else{
  var slideHeight = 1060;
}



  // Remove scrollbar in JS
  $('#slidesContainer').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides
  .wrapAll('<div id="slideInner"></div>')

  .css({
    'float' : 'none',
    'height' : slideHeight
  });

  // Set #slideInner height equal to total height of all slides
  $('#slideInner').css('height', slideHeight * numberOfSlides);

  // Insert up and down arrow controls in the DOM
  $('#table_slide')
    .prepend('<span class="control" id="downControl">Move down</span>')
    .append('<span class="control" id="upControl">Move up</span>');

  // Hide up arrow control on first load
  manageControls(currentPosition);

  // Create event listeners for .controls clicks
  $('.control')
    .bind('click', function(){
    // Determine new position
      currentPosition = ($(this).attr('id')=='upControl')
    ? currentPosition+1 : currentPosition-1;

      // Hide / show controls
      manageControls(currentPosition);
      // Move slideInner using margin-top
      $('#slideInner').animate({
        'marginTop' : slideHeight*(-currentPosition)
      });
    });

  // manageControls: Hides and shows controls depending on currentPosition
  function manageControls(position){
    // Hide up arrow if position is first slide
    if(position==0){ $('#downControl').hide() }
    else{ $('#downControl').show() }
    // Hide down arrow if position is last slide
    if(position==numberOfSlides-1){ $('#upControl').hide() }
    else{ $('#upControl').show() }
    }
    
    
    $( ".prod" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(0)
      });

   });
   
   $( ".htp" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-1)
      });

   });
   
   $( ".ihs" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-2)
      });

   });
   
   $( ".proc" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-3)
      });

   });
   
   $( ".grades" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-4)
      });

   });
   
   

    });
    

   


