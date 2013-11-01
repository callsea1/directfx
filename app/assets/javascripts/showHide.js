$(document).ready(function(){

  var $red_pane = $(".slidingDiv");

  enquire.register("screen and (min-width: 999px)", {
        match : function() {
            $red_pane.show();
        },
        unmatch : function() {
            $red_pane.hide();       
        }
   });
 $('.show_hide').click(function(){
    $(".slidingDiv").slideToggle();
  });
 
 //front page slider hpefully works this try :)

  jQuery('.bxslider').bxSlider({
    video: true,
  useCSS: false,
  captions: false,
  });

  $(".success").fadeOut(5000);

});