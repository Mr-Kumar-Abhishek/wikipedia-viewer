$("#search-me").click(function(){
	$("#search-me").addClass("on");
	$("#hilter-front").addClass("on");
	$("#hilter-back").addClass("on");
});


$("#hilter-back").click(function(){
	$("#hilter-front").removeClass("on");
	$("#hilter-back").removeClass("on");
	$("#search-me").removeClass("on");
	$("#search-me").val("");
});

$("#hilter-front").click(function(){
	$("#hilter-front").removeClass("on");
	$("#hilter-back").removeClass("on");
	$("#search-me").removeClass("on");
	$("#search-me").val("");
});

$("#search-me").keypress(function (key) {
        if (key.which == 13) {
            search($(this).val());
        }
});

function search(title){
	var lang = "en";
	var limit = "10";
	var prop = "revisions";
	var rvprop = "content";
	var format = "json";
	var action = "opensearch";
	
	console.log(lang);
	console.log(limit);
	console.log(prop);
	console.log(rvprop);
	console.log(format);
	console.log(action);
	console.log(title);
	
	
	if ( title == "" ) {
		title = "wikipedia";
	}
	
	var url = "https://" + lang + ".wikipedia.org/w/api.php?format=" + format + "&action=" + action + "&search=" + title + "&limit=" + limit + "&rvprop=" + rvprop + "&callback=?";
	
	console.log(url);
	
	$.getJSON(url).done(function (data) {
        result_display(data);
    }).fail(function () {
        alert("Something Broke !");
    });
}


function result_display(wiki_data){
	console.log(wiki_data);
}

