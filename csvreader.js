$(function(){
	$('.inlinebtn').on("click",function(){
		var myid = $(this).attr("id");
		getCSVFile(0,myid);
	});

	$('.inlinelink').on("click",function(){
		var myid = $(this).attr("id");
		var textid = myid - "wiki" + "_text";
		var text = $('#'+textid).val()
		console.log($(this))
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
	console.log(text);
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
		},
		error: function(data){
			alert('項目を検索できませんでした');
		}
	});
	return what;
}
