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

	})

	$("#press-ratio-dropdown li").click(function(){
		ratio = $(this).data("r");

		var contents = $(this).html();

		$("#press-ratio").html(contents);
		$("#press-water").html(water + "g");
		$("#press-beans").html(Math.round(water / ratio) + "g");

	})

	$("#press-servings-dropdown li").click(function(){
		water = $(this).data("g");

		var contents = $(this).html();
		var size_contents = $("#press-size-dropdown [data-g=" + water + "]").html();

		$("#press-servings").html(contents);
		$("#press-water").html(water + "g");
		$("#press-beans").html(Math.round(water / ratio) + "g");
		$("#press-size").html(size_contents);
	})
})



$(function(){
    function changeImage(image)
    {
        // hide all mainimages          
        $('div.calcbeanimage > div ').hide();
        
        // show the selected image
        $('div.calcbeanimage > div.' + image).show(); 

        // hide all mainimages          
        $('div.calcwaterimage > div ').hide();
        
        // show the selected image
        $('div.calcwaterimage > div.' + image).show();  

        // hide all mainimages          
        $('div.calcmugimage > div ').hide();
        
        // show the selected image
        $('div.calcmugimage > div.' + image).show();      
    }
    
    $('ul > li').click(function(){

	        var selected = $(this);
	        changeImage(selected.data('value'));   
	    });
    });
