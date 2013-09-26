$(document).ready(function(){
 
        $(".slidingDiv").hide();
        $("#moreInfoPopup").hide();
        $(".show_hide").show();
        //$("[id*='Tab']").hide();
        $("#moreInfoHistTab").hide();
        $("#moreInfoChartTab").hide();
        $("#moreInfoDescDrawer").removeClass("inactive");
        $("#moreInfoDescDrawer").addClass("active");
        $("#moreInfoDescTab").show();
        
    $('#moreInfoDescDrawer').click(function(){
        $("[id*='Tab']").hide();
        $(this).siblings("[id*='Drawer']").removeClass("active");
        $(this).siblings("[id*='Drawer']").addClass("inactive");
        $(this).removeClass("inactive");
        $(this).addClass("active");
        $("#moreInfoDescTab").show();
        $("#moreInfoDescTab p").show();
    });

    $('#moreInfoHistDrawer').click(function(){
        $("[id*='Tab']").hide();
        $(this).siblings("[id*='Drawer']").removeClass("active");
        $(this).siblings("[id*='Drawer']").addClass("inactive");
        $(this).removeClass("inactive");
        $(this).addClass("active");
        $("#moreInfoHistTab").show();
    });

    $('#moreInfoChartDrawer').click(function(){
        $("[id*='Tab']").hide();
        $(this).siblings("[id*='Drawer']").removeClass("active");
        $(this).siblings("[id*='Drawer']").addClass("inactive");
        $(this).removeClass("inactive");
        $(this).addClass("active");
        $("#moreInfoChartTab").show();
    });


    $('.show_hide').click(function(){
    $(".slidingDiv").slideToggle();
    });

    $('#closePop').click(function() {
  		$("#moreInfoPopup").hide();
	});

    $('.moreInfoTog').click(function(e){
    	e.preventDefault();
        var id = $(this).parent().parent().attr('id');
 		$("#moreInfoPopup").toggle();
        var text = $('#'+id).find("[data-id='INDDESC']").html();
        var text2 = $('#'+id).find("[data-id='DATECOL2']").html();
        var text3 = $('#'+id).find("[data-id='COUNTRY']").html();
        var text4 = $('#'+id).find("[data-id='INDTYPE']").html();
        var text5 = "[";
        text5 += $('#'+id).find("[data-id='COUNTRYFLAG']").html();
        text5 += "] ";
        text5 += $('#'+id).find("[data-id='INDNAME']").find("a").html();
        var text6 = $('#'+id).find("[data-id='INDSOURCE']").html();
        var text7 = $('#'+id).find("[data-id='SOURCELINK']").html();
        var text8 = $('#'+id).find("[data-id='RELEVANCE']").html();
        var text9 = $('#'+id).find("[data-id='PREVIOUS']").html();
        var text10 = $('#'+id).find("[data-id='FORCAST']").html();
        var text11 = $('#'+id).find("[data-id='ACTUAL']").html();
        $("#descTabDescription").html("<strong>Description: </strong>"+text);
        $("#moreInfoDateTime").html("<strong>DateTime: </strong>"+text2);
        $("#moreInfoCountry").html("<strong>Country: </strong>"+text3);
        $("#moreInfoEventType").html("<strong>EventType: </strong>"+text4);
        $("#moreInfoName").html("<strong>"+text5+"</strong>");
        $("#descTabSource").html("<strong>Source of Report: </strong>"+text6);
        $("#descTabRelease").html("<strong>Release URL: </strong>"+text7);
        $("#descTabImportance").html("<strong>Importance: </strong>"+text8);
        $("#moreInfoPrevious").html("<strong>Previous: </strong>"+text9);
        $("#moreInfoForecast").html("<strong>Forecast: </strong>"+text10);
        $("#moreInfoActual").html("<strong>Actual: </strong>"+text11);
    });

 
});