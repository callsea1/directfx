$(document).ready(function(){var i=$(".slidingDiv");enquire.register("screen and (min-width: 479px)",{match:function(){i.show()},unmatch:function(){i.hide()}}),$(".show_hide").click(function(){$(".slidingDiv").slideToggle()})});