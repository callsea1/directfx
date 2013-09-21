$(document).ready(function(){
 
        $(".slidingDiv").hide();
        $(".moreInfo").hide();
        $("#moreInfoPopup").hide();
        $(".show_hide").show();
        $(".moreInfoTog").show();
 
    $('.show_hide').click(function(){
    $(".slidingDiv").slideToggle();
    });

    $('#closePop').click(function() {
  		$("#moreInfoPopup").hide();
	});

    $('.moreInfoTog').click(function(e){
    	e.preventDefault();
    	/*var id = this.id;
    	$('.moreInfo').not('#' + id).slideUp(400);
 		$('div#' + id).slideDown(400);*/
 		$("#moreInfoPopup").toggle();
    });

 
});