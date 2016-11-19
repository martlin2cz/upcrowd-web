/*
 * Scripts of web.
 * m@rtlin, 18. 8. 2016
 */

$(function() {
	floatHeader();
	setupHeaderSlide();
	makeSmoothScrolling();
	//startTheGallery(); //XXX: yet done by template's plugin
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
		var $header = $('header.header-floating');
		var position = $header.offset();
		var headTop = position.top;
		var headHeight = $header.outerHeight();
		var headBott = headTop + headHeight;
		
		if (currScrollPos > prevScrollPos) {
			if (headBott < currScrollPos) {
				var newTop = currScrollPos - headHeight;
				$header.css({'top': newTop});
			}
		} else {
			if (headTop > currScrollPos) {
				$header.css({'top': currScrollPos});
			}
		}

		prevScrollPos = currScrollPos;
	}

	$(window).scroll(handler);	
}

function makeSmoothScrolling() {
	var handler = function(event){
		event.preventDefault();
		var linkTop = $( $.attr(this, 'href') ).offset().top;
		var offset;

		if (linkTop < prevScrollPos) {
			var $header = $('header.header-floating');
			var headHeight = $header.outerHeight();
			offset = linkTop - headHeight;
		} else {
			offset = linkTop;
		}

		$('html, body').animate({ scrollTop: offset }, 500);
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
		var $title = $(this).find('h2');
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
