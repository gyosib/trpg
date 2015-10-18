$(function(){
	var htmllist = 
		["pl_skill_roll_1","pl_skill_roll_2",,
		"pl_keyword_roll_1","pl_keyword_roll_2",
		"pl_deathblow_roll","pl_other_roll"];
	var tablelist = 
		[,,,,,,,];
	$.each(htmllist,function(index,val){
		tablelist[index] = getcookie(val);
	});
	var row = 
		'<tr>' +
		'<td>' + "スキル1" + '</td>' + '<td>' + tablelist[0] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "スキル2" + '</td>' + '<td>' + tablelist[1] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "キーワード1" + '</td>' + '<td>' + tablelist[3] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "キーワード2" + '</td>' + '<td>' + tablelist[4] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "必殺技" + '</td>' + '<td>' + tablelist[5] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "その他" + '</td>' + '<td>' + tablelist[6] + '</td>' + 
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
