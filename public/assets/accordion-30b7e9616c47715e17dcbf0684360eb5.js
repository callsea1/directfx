if("undefined"==typeof Effect)throw"accordion.js requires including script.aculo.us' effects.js library!";var accordion=Class.create();accordion.prototype={showAccordion:null,currentAccordion:null,duration:null,effects:[],animating:!1,initialize:function(i,t){if(!$(i))throw i+" doesn't exist!";this.options=Object.extend({resizeSpeed:8,classNames:{toggle:"accordion_toggle",toggleActive:"accordion_toggle_active",content:"accordion_content"},defaultSize:{height:null,width:null},direction:"vertical",onEvent:"click"},t||{}),this.duration=.15*(11-this.options.resizeSpeed);var o=$$("#"+i+" ."+this.options.classNames.toggle);o.each(function(i){if(Event.observe(i,this.options.onEvent,this.activate.bind(this,i),!1),"click"==this.options.onEvent&&(i.onclick=function(){return!1}),"horizontal"==this.options.direction)var t=$H({width:"0px"});else var t=$H({height:"0px"});t.merge({display:"none"}),this.currentAccordion=$(i.next(0)).setStyle(t)}.bind(this))},activate:function(i){return this.animating?!1:(this.effects=[],this.currentAccordion=$(i.next(0)),this.currentAccordion.setStyle({display:"block"}),this.currentAccordion.previous(0).addClassName(this.options.classNames.toggleActive),this.scaling="horizontal"==this.options.direction?$H({scaleX:!0,scaleY:!1}):$H({scaleX:!1,scaleY:!0}),this.currentAccordion==this.showAccordion?this.deactivate():this._handleAccordion(),void 0)},deactivate:function(){var i=$H({duration:this.duration,scaleContent:!1,transition:Effect.Transitions.sinoidal,queue:{position:"end",scope:"accordionAnimation"},scaleMode:{originalHeight:this.options.defaultSize.height?this.options.defaultSize.height:this.currentAccordion.scrollHeight,originalWidth:this.options.defaultSize.width?this.options.defaultSize.width:this.currentAccordion.scrollWidth},afterFinish:function(){this.showAccordion.setStyle({height:"auto",display:"none"}),this.showAccordion=null,this.animating=!1}.bind(this)});i.merge(this.scaling),this.showAccordion.previous(0).removeClassName(this.options.classNames.toggleActive),new Effect.Scale(this.showAccordion,0,i)},_handleAccordion:function(){var i=$H({sync:!0,scaleFrom:0,scaleContent:!1,transition:Effect.Transitions.sinoidal,scaleMode:{originalHeight:this.options.defaultSize.height?this.options.defaultSize.height:this.currentAccordion.scrollHeight,originalWidth:this.options.defaultSize.width?this.options.defaultSize.width:this.currentAccordion.scrollWidth}});i.merge(this.scaling),this.effects.push(new Effect.Scale(this.currentAccordion,100,i)),this.showAccordion&&(this.showAccordion.previous(0).removeClassName(this.options.classNames.toggleActive),i=$H({sync:!0,scaleContent:!1,transition:Effect.Transitions.sinoidal}),i.merge(this.scaling),this.effects.push(new Effect.Scale(this.showAccordion,0,i))),new Effect.Parallel(this.effects,{duration:this.duration,queue:{position:"end",scope:"accordionAnimation"},beforeStart:function(){this.animating=!0}.bind(this),afterFinish:function(){this.showAccordion&&this.showAccordion.setStyle({display:"none"}),$(this.currentAccordion).setStyle({height:"auto"}),this.showAccordion=this.currentAccordion,this.animating=!1}.bind(this)})}};