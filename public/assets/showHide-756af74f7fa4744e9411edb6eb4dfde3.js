$(document).ready(function(){var i=$(".slidingDiv");enquire.register("screen and (min-width: 999px)",{match:function(){i.show()},unmatch:function(){i.hide()}}),$(".show_hide").click(function(){$(".slidingDiv").slideToggle()}),jQuery(".bxslider").bxSlider({video:!0,useCSS:!0,captions:!0}),$(".success").fadeOut(5e3)});