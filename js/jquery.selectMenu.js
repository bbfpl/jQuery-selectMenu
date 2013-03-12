(function($){
	$.fn.selectMenu = function(options){
		var defaults = {
			changeType:'defaults'
		}
		var options = $.extend(defaults,options);
		this.each(function(){
			var	obj = $(this),
				placeholder = obj.children('span'),//ѡ����ֵ
				opts = obj.find('ul > li'),//obj ul li 
				val = '';//Ĭ�Ͽ�
				
			obj.find('ul').addClass('dropdown');
			if(options.changeType == 'defaults'){
				obj.addClass('wrapper-dropdown-defaults'); 
			}
			obj.on('click',function(event){
				$(this).toggleClass('active');
				return false;
			});
			opts.on('click',function(){
				var opt = $(this);
				val =opt.text();
				placeholder.text(val);
			});
			$(document).click(function(){
				obj.removeClass('active');
			});
		});
	};
})(jQuery);