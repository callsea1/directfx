

		var tpj=jQuery;
		tpj.noConflict();

		tpj(document).ready(function() {

		if (tpj.fn.cssOriginal!=undefined)
			tpj.fn.css = tpj.fn.cssOriginal;

		  //set above 1230 as the default value and override if smaller
		    // var $delay = 9000;
		    var $startwidth = 1920;
		    var $startheight = 768;


				enquire.register("screen and (max-width:1230px)", {
					match: function() {
					console.log("handler max-width 1230px");
				    $startwidth = 1230;
		    	    $startheight = 650;
					}
					}).register("screen and (max-width:1000px)", {
					match: function() {
					console.log("handler max-width 1000px");
					$startwidth = 1000;
		    	    $startheight = 560;
					}
					}).register("screen and (max-width:768px)", {
					match: function() {
					console.log("handler max-width 768px");
					$startwidth = 768;
		    	    $startheight = 430;
					}
					}).register("screen and (max-width:479px)", {
					match: function() {
					console.log("handler max-width 479px");
					$startwidth = 479;
		    	    $startheight = 320;
					}
					});

			tpj('.fullwidthbanner').revolution(
				{

					delay:9000,
					startwidth:$startwidth,
					startheight:$startheight,

					onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off

					thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
					thumbHeight:50,
					thumbAmount:3,

					hideThumbs:200,
					navigationType:"bullet",				// bullet, thumb, none
					navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

					navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


					navigationHAlign:"right",				// Vertical Align top,center,bottom
					navigationVAlign:"bottom",					// Horizontal Align left,center,right
					navigationHOffset:50,
					navigationVOffset:55,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:0,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:0,
					soloArrowRightVOffset:0,

					touchenabled:"on",						// Enable Swipe Function : on/off



					stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
					stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic



					fullWidth:"on",

					shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

				});




	});
	