  $(document).ready(function(){


  var currentPosition = 0;
  var slideHeight = 120;
  var slides = $('.time_slide_year');
  var numberOfSlides = slides.length;


  // Remove scrollbar in JS
  $('#year_slide').css('overflow', 'hidden');

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
  $('#year_slide')
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
    
    
 
   $( ".1978" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(0)
      });

   });
   
   $( ".1985" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-1)
      });

   });
   
   $( ".1986" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-2)
      });

   });
   
   $( ".1988" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-3)
      });

   });
   
   $( ".1998" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-4)
      });

   });
   
   $( ".2000" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-5)
      });

   });
   
   $( ".2001" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-6)
      });

   });
   
   $( ".2006" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-7)
      });

   });
   
   $( ".2007" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-8)
      });

   });
   
   $( ".2008" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-9)
      });

   });
   
   $( ".2009" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-10)
      });

   });
   
   $( ".2010" ).click(function() {

    $('#slideInner').animate({
        'marginTop' : slideHeight*(-11)
      });

   });

    
    
    
    
    
   
    
    });
    
    