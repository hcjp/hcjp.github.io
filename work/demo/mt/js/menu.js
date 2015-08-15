$(function(){
	$(".action li:eq(0)").mousemove(function(){
		$(this).css({
			"background":"rgb(255,255,255)",
			"border-bottom":"1px solid rgb(255,255,255)",
			"cursor":"pointer"
		});
		$(".cat").css("color","rgb(51,153,153)");
		$(".action li:eq(0) .car").css("background","url(./images/sp-hd.png) no-repeat -76px -61px");
		$(".action li:eq(0) .trigon").css({
			"border":"3px solid rgb(51,153,153)",
			"border-color":"rgb(51,153,153) transparent transparent transparent"
		});
		var w=$(this).css("width");
		w = parseInt(w)*2.86;
		$(".more_cat").css("width",w + "px");
		$(".more_cat").show();
	}).mouseout(function(){
		$(this).css({
			"border-bottom":"1px solid rgb(16,155,157)",
			"background":"rgb(45,172,174)"
		});
		$(".cat").css("color","#FFF");
		$(".action li:eq(0) .car").css("background","url(./images/sp-hd.png) no-repeat -26px -61px");
		$(".action li:eq(0) .trigon").css({
			"border":"3px solid #FFF",
			"borderColor":"#FFF transparent transparent transparent"
		});
		$(".more_cat").hide();
	});
	$(".action li:eq(1)").mousemove(function(){
		$(this).css({
			"background":"rgb(255,255,255)",
			"border-bottom":"1px solid rgb(255,255,255)",
			"cursor":"pointer"
		});
		$(".history").css("color","rgb(51,153,153)");
		$(".action li:eq(1) .trigon").css({
			"border":"3px solid rgb(51,153,153)",
			"border-color":"rgb(51,153,153) transparent transparent transparent"
		});
		var w=$(this).css("width");
		w = parseInt(w)*3;
		$(".more_history").css("width",w + "px");
		$(".more_history").show();
	}).mouseout(function(){
		$(this).css({
			"border-bottom":"1px solid rgb(16,155,157)",
			"background":"rgb(45,172,174)"
		});
		$(".history").css("color","#FFF");
		$(".action li:eq(1) .trigon").css({
			"border":"3px solid #FFF",
			"borderColor":"#FFF transparent transparent transparent"
		});
		$(".more_history").hide();
	});
	$(".action li:eq(2)").mousemove(function(){
		$(this).css({
			"background":"rgb(255,255,255)",
			"border-bottom":"1px solid rgb(255,255,255)",
			"cursor":"pointer"
		});
		$(".mymt").css("color","rgb(51,153,153)");
		$(".action li:eq(2) .trigon").css({
			"border":"3px solid rgb(51,153,153)",
			"border-color":"rgb(51,153,153) transparent transparent transparent"
		});
		var w=$(this).css("width");
		w=parseInt(w)+1;
		$(".more_mymt").css("width",w+"px");
		$(".more_mymt").show();
	}).mouseout(function(){
		$(this).css({
			"border-bottom":"1px solid rgb(16,155,157)",
			"background":"rgb(45,172,174)"
		});
		$(".mymt").css("color","#FFF");
		$(".action li:eq(2) .trigon").css({
			"border":"3px solid #FFF",
			"borderColor":"#FFF transparent transparent transparent"
		});
		$(".more_mymt").hide();
	});
});