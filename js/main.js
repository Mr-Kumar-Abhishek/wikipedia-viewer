$("#search-me").click(function(){
//	alert("checked clicked");
	$("#hilter-front").addClass("on");
	$("#hilter-back").addClass("on");
});


$("#search-me").blur(function(){
	$("#hilter-front").removeClass("on");
	$("#hilter-back").removeClass("on");
});

