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
	$("div.text-center#text-center").removeClass("searched");
	$("h2#searched-for").text("");
	$("div#show-results").html("");
});

$("#hilter-front").click(function(){
	$("#hilter-front").removeClass("on");
	$("#hilter-back").removeClass("on");
	$("#search-me").removeClass("on");
	$("#search-me").val("");
	$("div.text-center#text-center").removeClass("searched");
	$("h2#searched-for").text("");
	$("div#show-results").html("");
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
	$("div.text-center#text-center").addClass("searched");
	$("h2#searched-for").text("Searched for : '" + wiki_data[0] + "'");
	for(var i = 0; i < wiki_data[1].length; i++){
		$("div#show-results").append("<article><h1><a target='_blank' href='"+ wiki_data[3][i] + "'>" + wiki_data[1][i] + "</a><h1><p>" + wiki_data[2][i] + "</p></article>");
	}
	$("div.search-results").show();
}

