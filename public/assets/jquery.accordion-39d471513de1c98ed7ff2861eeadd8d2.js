!function(i){i.fn.extend({accordion:function(){return this.each(function(){function i(i,d){$(i).parent(o).siblings().removeClass(t).children(a).slideUp(e),$(i).siblings(a)[d||s]("show"==d?e:!1,function(){$(i).siblings(a).is(":visible")?$(i).parents(o).not(n.parents()).addClass(t):$(i).parent(o).removeClass(t),"show"==d&&$(i).parents(o).not(n.parents()).addClass(t),$(i).parents().show()})}var n=$(this),t="active",s="slideToggle",a="ul, div",e="fast",o="li";if(n.data("accordiated"))return!1;$.each(n.find("ul, li>div"),function(){$(this).data("accordiated",!0),$(this).hide()}),$.each(n.find("a"),function(){$(this).click(function(){i(this,s)}),$(this).bind("activate-node",function(){n.find(a).not($(this).parents()).not($(this).siblings()).slideUp(e),i(this,"slideDown")})});var d=location.hash?n.find("a[href="+location.hash+"]")[0]:n.find("li.current a")[0];d&&i(d,!1)})}})}(jQuery);