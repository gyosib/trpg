$(function(){
	$('#roll').on("click",function(){
		var rnd = Math.floor((Math.random()*11)+2);
		$('#num').text(rnd);
	});
});
