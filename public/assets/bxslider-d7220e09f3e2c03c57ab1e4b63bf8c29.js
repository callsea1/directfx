!function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(s){if(0==this.length)return this;if(this.length>1)return this.each(function(){e(this).bxSlider(s)}),this;var o={},r=this;t.el=this;var a=e(window).width(),l=e(window).height(),d=function(){o.settings=e.extend({},n,s),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in t)if(void 0!==e.style[t[i]])return o.cssPrefix=t[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),c()},c=function(){if(r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=e('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?215*o.children.length+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),v(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:h()}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.width(p()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=e('<div class="bx-controls" />'),o.settings.captions&&C(),o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var t="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,t).clone().addClass("bx-clone"),n=o.children.slice(-t).clone().addClass("bx-clone");r.append(i).prepend(n)}o.active.last=o.settings.startSlide==f()-1,o.settings.video&&r.fitVids();var s=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(s=r.children()),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&b(),o.settings.controls&&M(),o.settings.auto&&o.settings.autoControls&&T(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),s.imagesLoaded(u)},u=function(){o.loader.remove(),x(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(g()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,e(window).bind("resize",H),o.settings.auto&&o.settings.autoStart&&Q(),o.settings.ticker&&L(),o.settings.pager&&k(o.settings.startSlide),o.settings.controls&&q(),o.settings.touchEnabled&&!o.settings.ticker&&j()},g=function(){var t=0,n=e();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var s=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(n=o.children.eq(s),i=1;i<=o.settings.maxSlides-1;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return"vertical"==o.settings.mode?(n.each(function(){t+=e(this).outerHeight()}),o.settings.slideMargin>0&&(t+=o.settings.slideMargin*(o.settings.minSlides-1))):t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get()),t},h=function(){var e="100%";return o.settings.slideWidth>0&&(e="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),e},p=function(){var e=o.settings.slideWidth,t=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>t&&!o.carousel||"vertical"==o.settings.mode?e=t:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(t>o.maxThreshold||t<o.minThreshold&&(e=(t-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),e},v=function(){var e=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)e=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)e=o.settings.maxSlides;else{var t=o.children.first().width();e=Math.floor(o.viewport.width()/t)}else"vertical"==o.settings.mode&&(e=o.settings.minSlides);return e},f=function(){var e=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)e=o.children.length/m();else for(var t=0,i=0;t<o.children.length;)++e,t=i+v(),i+=o.settings.moveSlides<=v()?o.settings.moveSlides:v();else e=Math.ceil(o.children.length/v());return e},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=v()?o.settings.moveSlides:v()},x=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var e=o.children.last(),t=e.position();S(-(t.left-(o.viewport.width()-e.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,t=o.children.eq(i).position();S(-t.top,"reset",0)}}else{var t=o.children.eq(o.active.index*m()).position();o.active.index==f()-1&&(o.active.last=!0),void 0!=t&&("horizontal"==o.settings.mode?S(-t.left,"reset",0):"vertical"==o.settings.mode&&S(-t.top,"reset",0))}},S=function(e,t,i,n){if(o.usingCSS){var s="vertical"==o.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==t?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),O()})):"reset"==t?r.css(o.animProp,s):"ticker"==t&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),D()}))}else{var a={};a[o.animProp]=e,"slide"==t?r.animate(a,i,o.settings.easing,function(){O()}):"reset"==t?r.css(o.animProp,e):"ticker"==t&&r.animate(a,speed,"linear",function(){S(n.resetValue,"reset",0),D()})}},w=function(){for(var t="",i=f(),n=0;i>n;n++){var s="";o.settings.buildPager&&e.isFunction(o.settings.buildPager)?(s=o.settings.buildPager(n),o.pagerEl.addClass("bx-custom-pager")):(s=n+1,o.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+s+"</a></div>"}o.pagerEl.html(t)},b=function(){o.settings.pagerCustom?o.pagerEl=e(o.settings.pagerCustom):(o.pagerEl=e('<div class="bx-pager" />'),o.settings.pagerSelector?e(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.delegate("a","click",A)},M=function(){o.controls.next=e('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=e('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",I),o.controls.prev.bind("click",E),o.settings.nextSelector&&e(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&e(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=e('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},T=function(){o.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=e('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",y),o.controls.autoEl.delegate(".bx-stop","click",P),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?e(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),z(o.settings.autoStart?"stop":"start")},C=function(){o.children.each(function(){var t=e(this).find("img:first").attr("title");void 0!=t&&e(this).append('<div class="bx-caption"><span>'+t+"</span></div>")})},I=function(e){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),e.preventDefault()},E=function(e){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),e.preventDefault()},y=function(e){r.startAuto(),e.preventDefault()},P=function(e){r.stopAuto(),e.preventDefault()},A=function(t){o.settings.auto&&r.stopAuto();var i=e(t.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),t.preventDefault()},k=function(t){return"short"==o.settings.pagerType?(o.pagerEl.html(t+1+o.settings.pagerShortSeparator+o.children.length),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")}),void 0)},O=function(){if(o.settings.infiniteLoop){var e="";0==o.active.index?e=o.children.eq(0).position():o.active.index==f()-1&&o.carousel?e=o.children.eq((f()-1)*m()).position():o.active.index==o.children.length-1&&(e=o.children.eq(o.children.length-1).position()),"horizontal"==o.settings.mode?S(-e.left,"reset",0):"vertical"==o.settings.mode&&S(-e.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},z=function(e){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[e]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active"))},q=function(){1==f()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==f()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},Q=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var t=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();t="horizontal"==o.settings.mode?-i.left:-i.top}S(t,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var t=0;o.children.each(function(){t+="horizontal"==o.settings.mode?e(this).outerWidth(!0):e(this).outerHeight(!0)});var i=o.settings.speed/t,n="horizontal"==o.settings.mode?"left":"top",s=i*(t-Math.abs(parseInt(r.css(n))));D(s)}),D()},D=function(e){speed=e?e:o.settings.speed;var t={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?t=r.find(".bx-clone").first().position():i=o.children.first().position();var n="horizontal"==o.settings.mode?-t.left:-t.top,s="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:s};S(n,"ticker",speed,a)},j=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",B)},B=function(e){if(o.working)e.preventDefault();else{o.touch.originalPos=r.position();var t=e.originalEvent;o.touch.start.x=t.changedTouches[0].pageX,o.touch.start.y=t.changedTouches[0].pageY,o.viewport.bind("touchmove",N),o.viewport.bind("touchend",W)}},N=function(e){var t=e.originalEvent,i=Math.abs(t.changedTouches[0].pageX-o.touch.start.x),n=Math.abs(t.changedTouches[0].pageY-o.touch.start.y);if(3*i>n&&o.settings.preventDefaultSwipeX?e.preventDefault():3*n>i&&o.settings.preventDefaultSwipeY&&e.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var s=0;if("horizontal"==o.settings.mode){var r=t.changedTouches[0].pageX-o.touch.start.x;s=o.touch.originalPos.left+r}else{var r=t.changedTouches[0].pageY-o.touch.start.y;s=o.touch.originalPos.top+r}S(s,"reset",0)}},W=function(e){o.viewport.unbind("touchmove",N);var t=e.originalEvent,i=0;if(o.touch.end.x=t.changedTouches[0].pageX,o.touch.end.y=t.changedTouches[0].pageY,"fade"==o.settings.mode){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;"horizontal"==o.settings.mode?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&n>0||o.active.last&&0>n)?S(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):S(i,"reset",200)}o.viewport.unbind("touchend",W)},H=function(){var t=e(window).width(),i=e(window).height();(a!=t||l!=i)&&(a=t,l=i,r.redrawSlider())};return r.goToSlide=function(t,i){if(!o.working&&o.active.index!=t)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>t?f()-1:t>=f()?0:t,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=f()-1,o.settings.pager&&k(o.active.index),o.settings.controls&&q(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=g()&&o.viewport.animate({height:g()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){e(this).css("zIndex",50),O()});else{o.settings.adaptiveHeight&&o.viewport.height()!=g()&&o.viewport.animate({height:g()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.width()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(f()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);s=a.position()}else if("next"==i&&0==o.active.index)s=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(t>=0){var c=t*m();s=o.children.eq(c).position()}if("undefined"!=typeof s){var u="horizontal"==o.settings.mode?-(s.left-n):-s.top;S(u,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var e=parseInt(o.active.index)+1;r.goToSlide(e,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var e=parseInt(o.active.index)-1;r.goToSlide(e,"prev")}},r.startAuto=function(e){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=e&&z("stop"))},r.stopAuto=function(e){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=e&&z("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).width(p()),o.viewport.css("height",g()),o.settings.ticker||x(),o.active.last&&(o.active.index=f()-1),o.active.index>=f()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),k(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,e(".bx-clone",this).remove(),o.children.removeAttr("style"),this.removeAttr("style").unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.pagerEl.remove(),e(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),e(window).unbind("resize",H))},r.reloadSlider=function(e){void 0!=e&&(s=e),r.destroySlider(),d()},d(),this}}(jQuery),function(e,t){var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(n){function s(){var t=e(u),i=e(g);a&&(g.length?a.reject(d,t,i):a.resolve(d)),e.isFunction(n)&&n.call(r,d,t,i)}function o(t,n){t.src===i||-1!==e.inArray(t,c)||(c.push(t),n?g.push(t):u.push(t),e.data(t,"imagesLoaded",{isBroken:n,src:t.src}),l&&a.notifyWith(e(t),[n,d,e(u),e(g)]),d.length===c.length&&(setTimeout(s),d.unbind(".imagesLoaded")))}var r=this,a=e.isFunction(e.Deferred)?e.Deferred():0,l=e.isFunction(a.notify),d=r.find("img").add(r.filter("img")),c=[],u=[],g=[];return e.isPlainObject(n)&&e.each(n,function(e,t){"callback"===e?n=t:a&&a[e](t)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(e){o(e.target,"error"===e.type)}).each(function(n,s){var r=s.src,a=e.data(s,"imagesLoaded");a&&a.src===r?o(s,a.isBroken):s.complete&&s.naturalWidth!==t?o(s,0===s.naturalWidth||0===s.naturalHeight):(s.readyState||s.complete)&&(s.src=i,s.src=r)}):s(),a?a.promise(r):r}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,i,n,s){return jQuery.easing[jQuery.easing.def](e,t,i,n,s)},easeInQuad:function(e,t,i,n,s){return n*(t/=s)*t+i},easeOutQuad:function(e,t,i,n,s){return-n*(t/=s)*(t-2)+i},easeInOutQuad:function(e,t,i,n,s){return(t/=s/2)<1?n/2*t*t+i:-n/2*(--t*(t-2)-1)+i},easeInCubic:function(e,t,i,n,s){return n*(t/=s)*t*t+i},easeOutCubic:function(e,t,i,n,s){return n*((t=t/s-1)*t*t+1)+i},easeInOutCubic:function(e,t,i,n,s){return(t/=s/2)<1?n/2*t*t*t+i:n/2*((t-=2)*t*t+2)+i},easeInQuart:function(e,t,i,n,s){return n*(t/=s)*t*t*t+i},easeOutQuart:function(e,t,i,n,s){return-n*((t=t/s-1)*t*t*t-1)+i},easeInOutQuart:function(e,t,i,n,s){return(t/=s/2)<1?n/2*t*t*t*t+i:-n/2*((t-=2)*t*t*t-2)+i},easeInQuint:function(e,t,i,n,s){return n*(t/=s)*t*t*t*t+i},easeOutQuint:function(e,t,i,n,s){return n*((t=t/s-1)*t*t*t*t+1)+i},easeInOutQuint:function(e,t,i,n,s){return(t/=s/2)<1?n/2*t*t*t*t*t+i:n/2*((t-=2)*t*t*t*t+2)+i},easeInSine:function(e,t,i,n,s){return-n*Math.cos(t/s*(Math.PI/2))+n+i},easeOutSine:function(e,t,i,n,s){return n*Math.sin(t/s*(Math.PI/2))+i},easeInOutSine:function(e,t,i,n,s){return-n/2*(Math.cos(Math.PI*t/s)-1)+i},easeInExpo:function(e,t,i,n,s){return 0==t?i:n*Math.pow(2,10*(t/s-1))+i},easeOutExpo:function(e,t,i,n,s){return t==s?i+n:n*(-Math.pow(2,-10*t/s)+1)+i},easeInOutExpo:function(e,t,i,n,s){return 0==t?i:t==s?i+n:(t/=s/2)<1?n/2*Math.pow(2,10*(t-1))+i:n/2*(-Math.pow(2,-10*--t)+2)+i},easeInCirc:function(e,t,i,n,s){return-n*(Math.sqrt(1-(t/=s)*t)-1)+i},easeOutCirc:function(e,t,i,n,s){return n*Math.sqrt(1-(t=t/s-1)*t)+i},easeInOutCirc:function(e,t,i,n,s){return(t/=s/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+i:n/2*(Math.sqrt(1-(t-=2)*t)+1)+i},easeInElastic:function(e,t,i,n,s){var o=1.70158,r=0,a=n;if(0==t)return i;if(1==(t/=s))return i+n;if(r||(r=.3*s),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*s-o)*2*Math.PI/r))+i},easeOutElastic:function(e,t,i,n,s){var o=1.70158,r=0,a=n;if(0==t)return i;if(1==(t/=s))return i+n;if(r||(r=.3*s),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return a*Math.pow(2,-10*t)*Math.sin((t*s-o)*2*Math.PI/r)+n+i},easeInOutElastic:function(e,t,i,n,s){var o=1.70158,r=0,a=n;if(0==t)return i;if(2==(t/=s/2))return i+n;if(r||(r=s*.3*1.5),a<Math.abs(n)){a=n;var o=r/4}else var o=r/(2*Math.PI)*Math.asin(n/a);return 1>t?-.5*a*Math.pow(2,10*(t-=1))*Math.sin((t*s-o)*2*Math.PI/r)+i:.5*a*Math.pow(2,-10*(t-=1))*Math.sin((t*s-o)*2*Math.PI/r)+n+i},easeInBack:function(e,t,i,n,s,o){return void 0==o&&(o=1.70158),n*(t/=s)*t*((o+1)*t-o)+i},easeOutBack:function(e,t,i,n,s,o){return void 0==o&&(o=1.70158),n*((t=t/s-1)*t*((o+1)*t+o)+1)+i},easeInOutBack:function(e,t,i,n,s,o){return void 0==o&&(o=1.70158),(t/=s/2)<1?n/2*t*t*(((o*=1.525)+1)*t-o)+i:n/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+i},easeInBounce:function(e,t,i,n,s){return n-jQuery.easing.easeOutBounce(e,s-t,0,n,s)+i},easeOutBounce:function(e,t,i,n,s){return(t/=s)<1/2.75?n*7.5625*t*t+i:2/2.75>t?n*(7.5625*(t-=1.5/2.75)*t+.75)+i:2.5/2.75>t?n*(7.5625*(t-=2.25/2.75)*t+.9375)+i:n*(7.5625*(t-=2.625/2.75)*t+.984375)+i},easeInOutBounce:function(e,t,i,n,s){return s/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,n,s)+i:.5*jQuery.easing.easeOutBounce(e,2*t-s,0,n,s)+.5*n+i}}),function(e){"use strict";e.fn.fitVids=function(t){var i={customSelector:null},n=document.createElement("div"),s=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return n.className="fit-vids-style",n.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",s.parentNode.insertBefore(n,s),t&&e.extend(i,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];i.customSelector&&t.push(i.customSelector);var n=e(this).find(t.join(","));n.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var i="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),n=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),s=i/n;if(!t.attr("id")){var o="fitvid"+Math.floor(999999*Math.random());t.attr("id",o)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),t.removeAttr("height").removeAttr("width")}})})}}(jQuery);