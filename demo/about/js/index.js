$(function(){
	var pathImg = './images/';
	var imgs = ['banner1.jpg','banner2.jpg','banner3.jpg','banner4.jpg','banner5.jpg','banner6.jpg','banner7.jpg','banner8.jpg'];

	$('.nav a').each(function(index, el) {
		$(this).click(function(){
			if($(this).hasClass('select')){
				return;
			}
			$('.banner')[0].style.background = 'url(' + pathImg + imgs[index] + ') center top';
			$(this).addClass('select').siblings('a').removeClass('select').animate({backgroundColor:'#FFFFFF',color:'#666666'},'fast');
			$('.rig-con div').eq(index).show().siblings('div').hide();
		}).mouseover(function(){
			if($(this).hasClass('select')){
				return;
			}
			$(this).stop().animate({backgroundColor:'#D1141B',color:'#FFFFFF'},400);
		}).mouseout(function(){
			if($(this).hasClass('select')){
				return;
			}
			$(this).stop().animate({backgroundColor:'#FFFFFF',color:'#666666'},400);
		});
	});
	
});