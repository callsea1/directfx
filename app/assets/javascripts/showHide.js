$(document).ready(function(){

  var $red_pane = $(".slidingDiv");

  enquire.register("screen and (min-width: 479px)", {
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
});