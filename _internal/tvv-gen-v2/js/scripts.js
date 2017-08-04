var POSTS_COUNT = 6;

var templateName = 'template-1.svg';
var template = 'templates/' + templateName;                                                                                            

var FORM_ID = 'inputs-form';
/////////////////////////////////////////////////////////////////////

function initialize() {
	cloneAsSibling("input-post", POSTS_COUNT);
	setupAtts();
	setupCropperLinks();

	putDate("date-from", -6);
	putDate("date-to", 0);

 var form = document.getElementById(FORM_ID);                                                                                         
   
  form.onsubmit = function(e) {   
    updateComplete();
    return false;
  }
      
  streeting.initialize('output-svg', template);
  streeting.makeSourceInteractive(FORM_ID, updateOne);


}

function updateComplete() {
  var links = streeting.process('output-svg', FORM_ID);

	var svgLink = links.svg;
	
	var link = document.getElementById('output-link');
	link.href = svgLink;
}

function updateOne(event) {
	var sender = event.target;
  
	streeting.processUpdate('output-svg', sender, function(link) {
		var outlink = document.getElementById('output-link');
		outlink.href = link;
	});
}

function promptImage(event) {
	var source = event.target;
	var input = source.previousElementSibling;

	var url = prompt('Zadej adresu obrázku');
	if (url) {
		input.value = url;

		var evtHack = { 'target': input };
		updateOne(evtHack);
	}
}
/////////////////////////////////////////////////////////////////////
function cloneAsSibling(className, count) {
	var items = document.getElementsByClassName(className);

//	for (i = 0; i < items.length; i++) {
		var item = items[0]; // [i]
		var parentNode = item.parentNode;
		for (j = 1; j < count; j++) {
			var copy = item.cloneNode(true);
			parentNode.appendChild(copy);
		}
//	}
}

function setupAtts() {
	var inputs = streeting.listInputs(FORM_ID);
	var iPost = 0, iImage = 0;

	inputs.forEach(function(input, index) {
		if (input.classList.contains('input-post-image')) {
			input.setAttribute(ID_ATTR_NAME, 'output-post-image-' + iImage);
			iImage++;
		} 

		if (input.classList.contains('input-post-title')) {
			input.setAttribute(ID_ATTR_NAME, 'output-post-' + iPost);
			iPost++;
		} 
	});	
}

function setupCropperLinks() {
	var inputs = document.getElementsByClassName('input-post-image');
	
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		
		input.addEventListener('input', function(e) {
			var input = e.target;
			var link = input.nextElementSibling.nextElementSibling;

			var url = input.value;	
			link.href = "../online-image-cropper/?img=" + url;
		});
	}
}

function putDate(inputIdSpec, daysAfter) {
	var input = document.getElementById('input-' + inputIdSpec);

	var date = new Date();
	date.setDate(date.getDate() + daysAfter);

	input.valueAsDate = date;
}


/////////////////////////////////////////////////////////////////////


