/*!
Tendina jQuery plugin v0.11.0
Copyright (c) 2015 Ivan Prignano
Released under the MIT License
*/(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b=[].slice;!function(c){var d;return d=function(){function b(b,d){this._eventHandler=a(this._eventHandler,this),this.options=c.extend({},this.defaults,d),this.$el=c(b),this.elSelector=this._getSelector(this.$el),this.$el.addClass("tendina"),this.linkSelector=""+this.elSelector+" a",this.$listElements=c(this.linkSelector).parent("li"),this._hideSubmenus(),this.mouseEvent=this.options.onHover===!0?"mouseenter.tendina":"click.tendina",this._bindEvents(),null!==this.options.activeMenu&&this._openActiveMenu(this.options.activeMenu)}return b.prototype.defaults={animate:!0,speed:500,onHover:!1,hoverDelay:200,activeMenu:null},b.prototype._bindEvents=function(){return c(document).on(this.mouseEvent,this.linkSelector,this._eventHandler)},b.prototype._unbindEvents=function(){return c(document).off(this.mouseEvent)},b.prototype._getSelector=function(a){var b,d,e;return d=null!=(e=c(a).attr("class"))?e.split(" ")[0]:void 0,b=c(a).attr("id"),void 0!==b?"#"+b:"."+d},b.prototype._isFirstLevel=function(a){return c(a).parent().parent().hasClass("tendina")?!0:void 0},b.prototype._eventHandler=function(a){var b;return b=a.currentTarget,this._hasChildrenAndIsHidden(b)?(a.preventDefault(),this.options.onHover?setTimeout(function(a){return function(){return c(b).is(":hover")?a._openSubmenu(b):void 0}}(this),this.options.hoverDelay):this._openSubmenu(b)):this._isCurrentlyOpen(b)&&(a.preventDefault(),!this.options.onHover)?this._closeSubmenu(b):void 0},b.prototype._openSubmenu=function(a){var b,d;return d=c(a).next("ul"),b=this.$el.find("> .selected ul").not(d).not(d.parents("ul")),c(a).parent("li").addClass("selected"),this._close(b),this.$el.find(".selected").not(d.parents("li")).removeClass("selected"),this._open(d),this.options.openCallback?this.options.openCallback(c(a).parent()):void 0},b.prototype._closeSubmenu=function(a){var b,d;return d=c(a).next("ul"),b=d.find("li.selected"),c(a).parent().removeClass("selected"),this._close(d),b.removeClass("selected"),this._close(b.find("ul")),this.options.closeCallback?this.options.closeCallback(c(a).parent()):void 0},b.prototype._open=function(a){return this.options.animate?a.stop(!0,!0).slideDown(this.options.speed):a.show()},b.prototype._close=function(a){return this.options.animate?a.stop(!0,!0).slideUp(this.options.speed):a.hide()},b.prototype._hasChildrenAndIsHidden=function(a){return c(a).next("ul").length>0&&c(a).next("ul").is(":hidden")},b.prototype._isCurrentlyOpen=function(a){return c(a).parent().hasClass("selected")},b.prototype._hideSubmenus=function(){return this.$el.find("ul").hide()},b.prototype._showSubmenus=function(){return this.$el.find("ul").show(),this.$el.find("li").addClass("selected")},b.prototype._openActiveMenu=function(a){var b,c;return b=a instanceof jQuery?a:this.$el.find(a),c=b.closest("ul").parents("li").find("> a"),this._hasChildrenAndIsHidden(c)?c.next("ul").show():b.next("ul").show(),b.parent().addClass("selected"),c.parent().addClass("selected")},b.prototype.destroy=function(){return this.$el.removeData("tendina"),this._unbindEvents(),this._showSubmenus(),this.$el.removeClass("tendina"),this.$el.find(".selected").removeClass("selected")},b.prototype.hideAll=function(){return this._hideSubmenus()},b.prototype.showAll=function(){return this._showSubmenus()},b}(),c.fn.extend({tendina:function(){var a,e;return e=arguments[0],a=2<=arguments.length?b.call(arguments,1):[],this.each(function(){var b,f;return b=c(this),f=b.data("tendina"),f||b.data("tendina",f=new d(this,e)),"string"==typeof e?f[e].apply(f,a):void 0})}})}(window.jQuery,window)}).call(this);




// 모바일 메뉴토글
$('.show').tendina({
  onHover: false,
    speed: 300,


  });