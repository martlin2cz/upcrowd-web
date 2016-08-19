/*
 * Scripts of web.
 * m@rtlin, 18. 8. 2016
 */

$(function() {
	floatHeader();
});

function floatHeader() {
	var $header = $('header');
	var $replacement = $('<header class="header-replacement"></header>');

	$header.addClass('header-floating');
	$header.after($replacement);
}
