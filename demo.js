$("#myRange").on("change", function(){
	var val = $(this).val();
	$("#demo").html(val);
	var volRemaining = 100 -  val;
	$(".empty").animate({
		height: volRemaining + "%"
	});
	$(".fill").animate({
		height: val + "%"
	}, function(){
		if(val >= 50){
			$(this).css({
				"background-color": "green"
			});
		}
		else if(val < 50 && val > 20)
		{
			$(this).css({
				"background-color": "yellow"
			});
		}
		else if(val <= 20 && val > 0)
		{
			$(this).css({
				"background-color": "red"
			});
		}
	});
});

