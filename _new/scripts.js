/*
 * Scripts of web.
 * m@rtlin, 18. 8. 2016
 */

$(function() {
	floatHeader();
	setupHeaderSlide();
	makeSmoothScrolling();
	startTheGallery();
	addButtonsToArticleTitles();
});

function floatHeader() {
	var $header = $('header');
	var $replacement = $('<header class="header-replacement" id="top"></header>');

	$header.addClass('header-floating');
	$header.after($replacement);
}

var prevScrollPos = 0;
var shown = true;

function setupHeaderSlide() {
	var handler = function() {
		var currScrollPos = $(this).scrollTop();

		if (currScrollPos < prevScrollPos) {
			var $header = $('header.header-floating');
			
			if (currScrollPos > 0 && !shown) {
				$header.hide(0);
			}
			$header.css({'top': currScrollPos});
			if (currScrollPos > 0 && !shown) {
				$header.slideDown();
			}
			if (!shown) {
				shown = true;
			}
		} else {
			shown = false;
		}

		prevScrollPos = currScrollPos;
	}

	$(window).scroll(handler);	
}

function makeSmoothScrolling() {
	var handler = function(event){
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
	};

	
	$(document).on('click', 'a', handler);
}

function startTheGallery() {
	var config = {
		download: false
	};
	
	$('.gallery').each(function(i) {
		$(this).lightGallery(config);
	});
}

function addButtonsToArticleTitles() {
	$('article').each(function() {
		var id = $(this).attr('id');
		var $title = $(this).find('h2.spl-article-title');
		var $buttons = $('<span class="article-header-buttons">'
				+ '<a href="#' + id + '" title="Odkaz sem">#</a>'
				+ '<a href="#top" title="Nahoru">&uarr;</a>'
				+ '</span>');

		$title.append($buttons);
		$title.hover(
				function() {
					$buttons.show();
				}, 
				function() {
					$buttons.hide();
				}
		);
	});
}
