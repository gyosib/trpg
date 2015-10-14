$(function(){
	var myid = $(this).attr("id");
	$('.inlinebtn').live("click",function(){
		getCSVFile(0,myid);
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