$(function(){
	$('.inlinebtn').on("click",function(){
		var myid = $(this).attr("id");
		getCSVFile(0,myid);
	});

	$('.inlinelink').on("click",function(){
		var myid = $(this).attr("id");
		var textid = myid + "_text";
		console.log(myid);
		var text = $('#'+textid).val();
		getAPI(text);
	});

	$('#save').on("click",function(){
		var htmllist = 
			["pl_skill_roll_1","pl_skill_roll_2","pl_skill_roll_3",
			"pl_keyword_roll_1","pl_keyword_roll_2",
			"pl_keyword_roll_3",
			"pl_deathblow_roll","pl_other_roll",
			"world_time_roll","world_place_roll","world_genre_roll",			"scene_opening_roll","scene_ending_roll",
			"scene_keyword_roll_1","scene_keyword_roll_2",
			"scene_keyword_roll_3"];
		$.each(htmllist,function(index,val){
			if($('#'+val+'_text').length){
				var myid = val;
				var textid = myid + "_text";
				var text = $('#'+textid).val();
				$.cookie(myid,text,{expires:7,path:"/"});
			}
		});
	});
});

function getCSVFile(csvNO,myid) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    	createArray(xhr.responseText,csvNO,myid);
	};
	//使用するファイル名に変更する
    switch (csvNO) {
        case 0:
            xhr.open("get","dic/Noun.csv", true);
            xhr.send(null);
            break;
        case 1:
            xhr.open("get","dic/Noun.csv", true);
            xhr.send(null);
            break;
        case 2:
            xhr.open("get","dic/Noun.csv", true);
            xhr.send(null);
            break;
        case 3:
            xhr.open("get","dic/Noun.csv", true);
            xhr.send(null);
            break;
        case 4:
            xhr.open("get","dic/Noun.csv", true);
            xhr.send(null);
            break;
        case 5:
            xhr.open("get","dic/Noun.csv", true);
            xhr.send(null);
            break;
        default:

    }
}

function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}

function createArray(csvData,csvNO,myid) {
    var tempArray = csvData.split("\n");
    var csvArray = new Array();
    var textid = myid + "_text";
    for(var i = 0; i<tempArray.length;i++){
		csvArray[i] = tempArray[i].split(",");
    }
	var j = 0;
	j = Math.floor( Math.random() * tempArray.length )
	$('#'+textid).val(csvArray[j][0]);
}

function getAPI(text){
	var what;
	$.cookie('word',text,{expires:7,path:"/"});
	$.ajax({
		url: 'http://wikipedia.simpleapi.net/api',
		data: {
			output: 'json',
			keyword: text
		},
		type: 'GET',
		cache: false,
		dataType: 'jsonp',
		success: function(data){
			//alert(data[0].body.replace(/<br\/>/g,"\n"));
			what = data[0].body.replace(/<br\/>/g,"\n");
			var setting = {
				buttons: {
				confirm: {
					action: function(){
						Apprise('close');
					},
					text: 'OK',
				}
				},
				input: false,
				override: true,
			};
			Apprise(what,setting);
		},
		error: function(data){
			console.log(text);
		}
	});
}
