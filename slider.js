var timer = new Object;
 
$(function(){
	var $Slides = $("#slides");
	var _step = $Slides.find("li:first").width();
	$Slides
		.data("currentSlide",1)
		.data("nbSlides",$Slides.find("li").size());
	$Slides
		.find("li:last")
			.clone()
			.prependTo("#slides");
 
	$Slides
		.find("li:first")
			.next()
			.clone()
			.appendTo("#slides");
 
	$Slides		
		.find("li:first")
			.addClass("clone")
		.end()
		.find("li:last")
			.addClass("clone")
		.end()
		.css({marginLeft:-_step});
 
	$Slides.width($Slides.find("li").size()*_step);
 
	$("#nextSlide").bind("click",nextSlide);
	$("#prevSlide").bind("click",prevSlide);
 
	window.setTimeout(slider,10000);
 
})

function nextSlide(){
	var $Slides = $("#slides");
	$Slides.animate(
		{marginLeft:"-=900px"},
		1000,
		function(){
				$Slides.data("currentSlide",$Slides.data("currentSlide")+1);
				if($Slides.data("currentSlide") > $Slides.data("nbSlides")){
					$Slides
						.data("currentSlide",1)
						.css({marginLeft:"-900px"});
 
				}
				window.clearTimeout(timer);
				timer = window.setTimeout(slider,10000);
			}
	);
}
 
function prevSlide(){
	var $Slides = $("#slides");
	$Slides.animate(
		{marginLeft:"+=900px"},
		1000,
		function(){
				$Slides.data("currentSlide",$Slides.data("currentSlide")-1);
				if($Slides.data("currentSlide") == 0){
					$Slides
						.data("currentSlide",$Slides.data("nbSlides"))
						.css({marginLeft:-(900*$Slides.data("currentSlide"))});
				}
				window.clearTimeout(timer);
				timer = window.setTimeout(slider,10000);
			}
	);
}

function slider(){
	nextSlide();
	window.setTimeout(slider,10000);
}