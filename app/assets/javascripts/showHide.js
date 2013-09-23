$(document).ready(function(){
 
        $(".slidingDiv").hide();
        //$(".moreInfo").hide();
        $("#moreInfoPopup").hide();
        $(".show_hide").show();
        //$(".moreInfoTog").show();
 
    $('.show_hide').click(function(){
    $(".slidingDiv").slideToggle();
    });

    $('#closePop').click(function() {
  		$("#moreInfoPopup").hide();
	});

    $('.moreInfoTog').click(function(e){
    	e.preventDefault();
        var id = $(this).parent().parent().attr('id');
        console.log(id);
        /*$('.moreInfo').not('#' + id).slideUp(400);
 		$('div#' + id).slideDown(400);*/
 		$("#moreInfoPopup").toggle();
        var text = $('#'+id).find("[data-id='INDDESC']").html();
        $("#moreInfoPopupText").html(text);
    });

 
});