$(document).ready(function(){
	
	setTimeout(function() {
		$(".slide-thing").animate({left:3000}, 5000, function(){
			$(".intro").addClass('display-none');
		});


		$(".intro").addClass('intro_animation'); 

		$(".slide-thing").addClass('intro_animation');

		}, 5000);
		
	
	
});


//beginning of painting page's carousel
$(function() {
	var root = $('.carousel');
	var window = root.find('.slider_window');
	var container = root.find('.img_container');
	var items = root.find('.item');
	var prevButton = root.find('.slider_previous');
	var nextButton = root.find('.slider_next');
	var currentIndex = 0;
	var totalItems = items.length;
	function nextItem() {
		currentIndex++;
		if(currentIndex == totalItems) {
			currentIndex = 0;
		}
		gotoItem();
	}
	function prevItem() {
		currentIndex--;
		if(currentIndex == -1) {
			currentIndex =totalItems-1;
		}
		gotoItem();
	}
	function gotoItem() {
		container.css("margin-left", (currentIndex*-100)+'%'); // substatute 'imageWidth' for '900' allowing you to change the css width and not the js code
	}
	nextButton.click(nextItem);
	prevButton.click(prevItem);
	
	setInterval(nextItem,5000);
});
//end of painting page's carousel