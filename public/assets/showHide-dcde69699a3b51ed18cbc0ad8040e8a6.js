$(document).ready(function(){var i=$(".slidingDiv");enquire.register("screen and (min-width: 999px)",{match:function(){i.show()},unmatch:function(){i.hide()}}),$(".show_hide").click(function(){$(".slidingDiv").slideToggle()}),$(".success").fadeOut(5e3)});