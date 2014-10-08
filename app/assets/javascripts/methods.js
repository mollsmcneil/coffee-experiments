var water=1000;
var ratio=14;

$(function (){
	$("#press-size-dropdown li").click(function(){
		water = $(this).data("g");

		var contents = $(this).html();
		var servings_contents = $("#press-servings-dropdown [data-g=" + water + "]").html();

		$("#press-size").html(contents);
		$("#press-water").html(water + "g");
		$("#press-beans").html(Math.round(water / ratio) + "g");
		$("#press-servings").html(servings_contents);
		$("div.calcmugimage > div").hide();
        $("div.calcmugimage > div[data-g=" + water + "]").show();
        $("div.calcwaterimage > div").hide();
        $("div.calcwaterimage > div[data-g=" + water + "]").show();

	})

	$("#press-ratio-dropdown li").click(function(){
		ratio = $(this).data("r");

		var contents = $(this).html();

		$("#press-ratio").html(contents);
		$("#press-water").html(water + "g");
		$("#press-beans").html(Math.round(water / ratio) + "g");
		$("div.calcbeanimage > div").hide();
        $("div.calcbeanimage > div[data-r=" + ratio + "]").show();

	})

	$("#press-servings-dropdown li").click(function(){
		water = $(this).data("g");

		var contents = $(this).html();
		var size_contents = $("#press-size-dropdown [data-g=" + water + "]").html();
                                                    
		$("#press-servings").html(contents);
		$("#press-water").html(water + "g");
		$("#press-beans").html(Math.round(water / ratio) + "g");
		$("#press-size").html(size_contents);
		$("div.calcmugimage > div").hide();
        $("div.calcmugimage > div[data-g=" + water + "]").show();
        $("div.calcwaterimage > div").hide();
        $("div.calcwaterimage > div[data-g=" + water + "]").show();
	})

    /*function changeImage(image, cell) {        
        $('div.' + cell + ' > div').hide();
        $('div.' + cell + ' > div.' + image).show();      
    }
    
    $('table.calc ul > li').click(function(){

        var selected = $(this);
        changeImage(selected.data('value'), selected.data('cell'));   
	});*/

});