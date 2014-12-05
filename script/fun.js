function indexDivFun(){
	$('.indexDiv').height($(window).height());
	$('.indexDiv').width($(window).width());
	//--
	
	}
//
function businessFun(){
	$('.business').each(function(i){
		if($(window).scrollTop()>$(this).offset().top-$(window).height()/2){
			$(this).find('.name').addClass('nameNow');
			}else{
				$(this).find('.name').removeClass('nameNow');
				}
		})
	}	