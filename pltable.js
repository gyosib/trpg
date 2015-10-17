$(function(){
	var htmllist = 
		["pl_skill_roll_1","pl_skill_roll_2","pl_skill_roll_3",
		"pl_keyword_roll_1","pl_keyword_roll_2","pl_keyword_roll_3",
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
		'<td>' + "スキル1" + '</td>' + '<td>' + tablelist[1] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "スキル1" + '</td>' + '<td>' + tablelist[2] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "スキル1" + '</td>' + '<td>' + tablelist[3] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "スキル1" + '</td>' + '<td>' + tablelist[4] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "スキル1" + '</td>' + '<td>' + tablelist[5] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "スキル1" + '</td>' + '<td>' + tablelist[6] + '</td>' + 
		'</tr>'+
		'<tr>' +
		'<td>' + "スキル1" + '</td>' + '<td>' + tablelist[7] + '</td>' + 
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
