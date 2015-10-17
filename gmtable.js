$(function(){
	var htmllist = 
		["world_time_roll","world_place_roll","world_genre_roll",
		"scene_keyword_roll_1","scene_keyword_roll_2","scene_keyword_roll_3",
		"scene_opening_roll","scene_ending_roll"];
	var tablelist = 
		[,,,,,,,];
	$.each(htmllist,function(index,val){
		tablelist[index] = getcookie(val);
	});
	var row = 
		'<tr>' +
		'<td>' + "時間" + '</td>' + '<td>' + tablelist[0] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "場所" + '</td>' + '<td>' + tablelist[1] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "ジャンル" + '</td>' + '<td>' + tablelist[2] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "キーワード1" + '</td>' + '<td>' + tablelist[3] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "キーワード2" + '</td>' + '<td>' + tablelist[4] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "キーワード3" + '</td>' + '<td>' + tablelist[5] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "オープニング" + '</td>' + '<td>' + tablelist[6] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "エンディング" + '</td>' + '<td>' + tablelist[7] + '</td>' + 
		'</tr>';
	$('#charatable').empty();
	$('#charatable').append(row);
});
	
function getcookie(cookiename){
	if($.cookie(cookiename)){
		return $.cookie(cookiename);
	}else{
		console.log(cookiename);
		console.log("error");
		return "";
	}
}
