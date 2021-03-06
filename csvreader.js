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

	$('#world_time_roll').unbind('click');
	$('#world_place_roll').unbind('click');
	$('#world_genre_roll').unbind('click');
	$('#scene_opening_roll').unbind('click');
	$('#scene_ending_roll').unbind('click');

	$('#world_time_roll').on("click",function(){
		var myid = $(this).attr("id");
		getCSVFile(2,myid);
	});
	$('#world_place_roll').on("click",function(){
		var myid = $(this).attr("id");
		getCSVFile(1,myid);
	});
	$('#world_genre_roll').on("click",function(){
		var myid = $(this).attr("id");
		getCSVFile(3,myid);
	});
	$('#scene_opening_roll').on("click",function(){
		var myid = $(this).attr("id");
		getCSVFile(4,myid);
	});
	$('#scene_ending_roll').on("click",function(){
		var myid = $(this).attr("id");
		getCSVFile(5,myid);
	});

	$('#save').on("click",function(){
		var htmllist = 
			["pl_skill_roll_1","pl_skill_roll_2",
			"pl_keyword_roll_1","pl_keyword_roll_2",
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
	var htmllist = 
		["pl_skill_roll_1","pl_skill_roll_2","pl_skill_roll_3",
		"pl_keyword_roll_1","pl_keyword_roll_2",
		"pl_keyword_roll_3",
		"pl_deathblow_roll","pl_other_roll",
		"world_time_roll","world_place_roll","world_genre_roll",			"scene_opening_roll","scene_ending_roll",
		"scene_keyword_roll_1","scene_keyword_roll_2",
		"scene_keyword_roll_3"];
	$.each(htmllist,function(index,val){
		if($.cookie(val)){
			$('#'+val+'_text').val($.cookie(val));
		}
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
	    var rnd = Math.floor((Math.random()*2));
	    if(rnd==0){
            	xhr.open("get","dic/Noun.csv", true);
            }else{
            	xhr.open("get","dic/Noun.verbal.csv", true);
            }
            xhr.send(null);
            break;
        case 1:
            xhr.open("get","dic/Noun.place.csv", true);
            xhr.send(null);
            break;
        case 2:
            xhr.open("get","dic/Time.csv", true);
            xhr.send(null);
            break;
        case 3:
            xhr.open("get","dic/Genre.csv", true);
            xhr.send(null);
            break;
        case 4:
            xhr.open("get","dic/Opening.csv", true);
            xhr.send(null);
            break;
        case 5:
            xhr.open("get","dic/Ending.csv", true);
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
    var csvArray = csvData.split("\n");
    var textid = myid + "_text";
    var j = Math.floor( Math.random() * csvArray.length )
    $('#'+textid).val(csvArray[j]);
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
			if(data!=null){
				what = data[0].body.replace(/<br\/>/g,"\n");
			}else{
				what = "Wikipediaに該当する項目はありませんでした。";
			}
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
			what = text;
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
		}
	});
}
