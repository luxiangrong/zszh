$(function() {
	var parseToMatrix = function(str) {
		console.log(str);
		var reg = /^matrix\((-?\d+),\s*(-?\d+),\s*(-?\d+),\s*(-?\d+),\s*(-?\d+),\s*(-?\d+)\)$/;
		var matches = str.match(reg);
		if ($.isArray(matches) && matches.length == 7) {
			matches.splice(0, 1);
			return matches;
		}
		return [0, 0, 0, 0, 0, 0];
	};
	//--首页(复杂特效)
	if ($('.indexDiv').length > 0) {
		indexDivFun();
		$(window).resize(function() {
			indexDivFun();
		});
		$(window).scroll(function() {
			//$('.indexPart1').find('li').css('top', -$(window).scrollTop() / 2);
			if ($(window).scrollTop() > 200) {
				$('.indexImg').fadeOut(500);
			} else {
				$('.indexImg').fadeIn(500);
			}
			$('.indexDiv h1').each(function(i) {
				// $(this).find('h1').css('top',($(window).scrollTop()-$(this).offset().top)/2+200);
				// if('-webkit-transform' in document.documentElement.style) {
				// var translate3dY = ($(window).scrollTop() - parseToMatrix($(this).css('-webkit-transform'))[5])/2 + 200;
				// $(this).css(
				// '-webkit-transform', 'translate3d(0px, ' + translate3dY + 'px, 0px)'
				// );
				//
				// }
				// if ('transform' in document.documentElement.style) {
					// var translate3dY = ($(window).scrollTop() - $(this).closest('.indexDiv').offset().top) / 2 + 200;
					// console.log(translate3dY);
					// $(this).css('transform', 'translate3d(0px, ' + translate3dY + 'px, 0px)');
				// } else if ('-webkit-transform' in document.documentElement.style) {
					// var translate3dY = ($(window).scrollTop() - $(this).closest('.indexDiv').offset().top) / 2 + 200;
					// $(this).css('-webkit-transform', 'translate3d(0px, ' + translate3dY + 'px, 0px)');
				// } else {
					// $(this).css('top', ($(window).scrollTop() - $(this).closest('.indexDiv').offset().top) / 2 + 200);
				// }
			});
		});
	}
	//--首页第一部分
	$('.indexPart1').find('li').fadeTo(10, 0.8);
	$('.indexPart1').find('li').hover(function() {
		$(this).fadeTo(200, 1);
	}, function() {
		$(this).fadeTo(200, 0.8);
	});
	//--首页按钮
	$('#indexBtn').find('a').each(function(i) {
		$(this).hover(function() {
			$('.indexBtn').find('li').eq(i).css('left', $(this).offset().left - 58);
			$('.indexBtn').find('li').eq(i).css('top', $(this).offset().top - 70);
			$('.indexBtn').find('li').eq(i).show();
		}, function() {
			$('.indexBtn').find('li').hide();
		});
		$(this).click(function() {
			$('body,html').animate({
				scrollTop : $('.indexDiv2').eq(i).offset().top - 60
			}, 500);
		});
	});
	//--业务选项卡
	$('.businessTab').find('a').find('img:last').hide();
	$('.businessTab').find('a').hover(function() {
		$(this).find('img:last').fadeIn(500);
	}, function() {
		$(this).find('img:last').fadeOut(500);
	});
	$('.businessTab').find('a').each(function(i) {
		$(this).click(function() {
			$('body,html').animate({
				scrollTop : $('.business').eq(i).offset().top - 60
			}, 500);
		});
	});
	//--业务(复杂特效)
	if ($('.business').length > 0) {
		businessFun();
		$(window).scroll(function() {
			businessFun();
		});
		//--
		$(window).scroll(function() {
			$('.business').each(function(i) {
				$(this).find('.bg').css('top', ($(window).scrollTop() - $(this).offset().top) / 3 + 20);
			});
		});
	}
	//
});
