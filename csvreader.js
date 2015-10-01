
function getCSVFile(csvNO) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    	createArray(xhr.responseText,csvNO);
	};
	//使用するファイル名に変更する
	if(csvNO == 0){
		xhr.open("get","dic/Noun.csv", true);
		xhr.send(null);
	}
	if(csvNO == 1){
		xhr.open("get","dic/Noun.csv", true);
		xhr.send(null);
	}
}

function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}

function createArray(csvData,csvNO) {
    var tempArray = csvData.split("\n");
    var csvArray = new Array();
    for(var i = 0; i<tempArray.length;i++){
		csvArray[i] = tempArray[i].split(",");
    }
	var j = 0;
	j = Math.floor( Math.random() * tempArray.length )
	if(csvNO == 0){
		document.getElementById("rand0").innerHTML = csvArray[j][0];
	}
	else if(csvNO == 1){
		document.getElementById("rand1").innerHTML = csvArray[j][0];
	}
}
