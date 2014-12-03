var ratio;
var water;
function updateCalculator () {
	console.log(water,ratio);
	var servings_contents = $("#press-servings-dropdown [data-g=" + water + "]").html();
	var size_contents = $("#press-size-dropdown [data-g=" + water + "]").html();
	var ratio_contents = $("#press-ratio-dropdown [data-r=" + ratio + "]").html();

	$("#press-size").html(size_contents);
    $("#press-ratio").html(ratio_contents);
	$("#press-beans").html(Math.round(water / ratio) + "g");
	$("#press-water").html(water + "g");
	$("#press-servings").html(servings_contents);	

    if ($("div.calcapparatusimage > div").length > 1) {

    	$("div.calcapparatusimage > div").hide();
    	$("div.calcapparatusimage > div[data-g=" + water + "]").show();
	}

    $("div.calcwaterimage > div").hide();
    $("div.calcwaterimage > div[data-g=" + water + "]").show();
	$("div.calcbeanimage > div").hide();
    $("div.calcbeanimage > div[data-r=" + ratio + "]").show();
    $("div.calcmugimage > div").hide();
    $("div.calcmugimage > div[data-g=" + water + "]").show();
}

$(function (){

	water = $("#press-size").data("g");
	ratio = $("#press-ratio").data("r");

	updateCalculator();

	$("#press-size-dropdown li").click(function(){
		water = $(this).data("g");

		updateCalculator();

	})

	$("#press-ratio-dropdown li").click(function(){
		ratio = $(this).data("r");

		updateCalculator();

	})

	$("#press-servings-dropdown li").click(function(){
		water = $(this).data("g");

		updateCalculator();

	})

   
});