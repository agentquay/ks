/* Simple jQuery background image rotator plug-in by Dan 'Diplo' Booth */

if (screen.width > 960) {



(function($)
{
	$.fn.extend({
		bgrotate: function(options)
		{
			var defaults = {
				delay: 1000,
				images: [],
				imagedir: "/images/"
			}

			var o = $.extend(defaults, options);
			var $obj = $(this);
			var cache = [];
			var i = 0;
			var preCache = true;

			return this.each(function()
			{
				setInterval(function() { setBack($obj, o.images, o.imagedir) }, o.delay);
			});

			function setBack(elem, backgrounds, imagedir)
			{
				elem.css("background-image", "url(" + imagedir + backgrounds[i] + ")");
				i++;
				if (i == backgrounds.length)
				{
					i = 0;
					preCache = false;
				}
				if (preCache)
				{
					var cacheImage = document.createElement('img');
					cacheImage.src = imagedir + backgrounds[i];
					cache.push(cacheImage);
				}
			}
		}
	});
})(jQuery);




$(".main_container").bgrotate({ 

    delay:4000, 
    imagedir: "img/", 
    images: ["bkg-a.jpg", "bkg-b.jpg", "bkg-c.jpg"],
    fx: 'fade' 
    
    }); 
    
    }

$('.toggle').click(function(){

    $('.menu').slideToggle('slow');

});

