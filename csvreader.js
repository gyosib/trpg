
function getCSVFile(csvNO) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    	createArray(xhr.responseText,csvNO);
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

function createArray(csvData,csvNO) {
    var tempArray = csvData.split("\n");
    var csvArray = new Array();
    for(var i = 0; i<tempArray.length;i++){
		csvArray[i] = tempArray[i].split(",");
    }
	var j = 0;
	j = Math.floor( Math.random() * tempArray.length )
    switch (csvNO) {
        case 0:
            document.getElementById("skill_roll_1").innerHTML = csvArray[j][0];
            break;
        case 1:
            document.getElementById("skill_roll_2").innerHTML = csvArray[j][0];
            break;
        case 2:
            document.getElementById("skill_roll_3").innerHTML = csvArray[j][0];
            break;
        case 3:
            document.getElementById("keyword_roll_1").innerHTML = csvArray[j][0];
            break;
        case 4:
            document.getElementById("keyword_roll_2").innerHTML = csvArray[j][0];
            break;
        case 5:
            document.getElementById("keyword_roll_3").innerHTML = csvArray[j][0];
            break;
        default:
    }

}
