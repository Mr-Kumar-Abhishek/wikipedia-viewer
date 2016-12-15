$("#search-me").click(function(){
	$("#search-me").addClass("on");
	$("#hilter-front").addClass("on");
	$("#hilter-back").addClass("on");
});


$("#hilter-back").click(function(){
	$("#hilter-front").removeClass("on");
	$("#hilter-back").removeClass("on");
	$("#search-me").removeClass("on");
});

$("#hilter-front").click(function(){
	$("#hilter-front").removeClass("on");
	$("#hilter-back").removeClass("on");
	$("#search-me").removeClass("on");
});

$("#search-me").keypress(function (key) {
        if (key.which == 13) {
            search($(this).val());
        }
});


function search(title){
	console.log(title);
}
