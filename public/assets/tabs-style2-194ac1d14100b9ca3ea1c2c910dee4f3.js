$(document).ready(function(){$(".tab-content-two").hide(),$("ul.tabs-two li:first").addClass("active").show(),$(".tab-content-two:first").show(),$("ul.tabs-two li").click(function(){$("ul.tabs-two li").removeClass("active"),$(this).addClass("active"),$(".tab-content-two").hide();var t=$(this).find("a").attr("href");return $(t).fadeIn(),!1})});