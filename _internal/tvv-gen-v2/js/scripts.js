var POSTS_COUNT = 5;

var templateName = 'template-2.svg';
var template = 'templates/' + templateName;                                                                                            

var NO_IMAGE_URL = 'img/no-image.svg';
var FORM_ID = 'inputs-form';
/////////////////////////////////////////////////////////////////////

function initialize() {
	cloneAsSibling("input-post", POSTS_COUNT);
	setupAtts();

	putDate("date-from", -6);
	putDate("date-to", 0);

 var form = document.getElementById(FORM_ID);                                                                                         
   
  form.onsubmit = function(e) {   
    updateComplete();
    return false;
  }
      
  streeting.initialize('output-svg', template);
  streeting.makeSourceInteractive(FORM_ID, updateOne);

	this.updateComplete();
}

function updateComplete() {
	try {
  streeting.process('output-svg', FORM_ID, function(link) {
		var outlink = document.getElementById('output-link');
		outlink.href = link;
	});
	} catch (e) {
		alert("Chyba, " + JSON.stringify(e));
	}
}

function updateOne(event) {
	var sender = event.target;

	streeting.processUpdate('output-svg', sender, null);
}

function promptImage(event) {
	var source = event.target;
	var input = source.previousElementSibling;
	var url = input.value;	

	url = prompt('Zadej adresu obrázku', url);
	if (url) {
		input.value = url;

		updateCropperLink(input);

		var evtHack = { 'target': input };
		updateOne(evtHack);
	}
}

function updateCropperLink(input) {
	var link = input.nextElementSibling.nextElementSibling;

	var url = input.value;	
	link.href = "../online-image-cropper/?img=" + url;
}

/////////////////////////////////////////////////////////////////////

function imageProcessor(id, elem, value) {
	if (!value) {
		value = NO_IMAGE_URL;
	}

	elem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value);
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

function putDate(inputIdSpec, daysAfter) {
	var input = document.getElementById('input-' + inputIdSpec);

	var date = new Date();
	date.setDate(date.getDate() + daysAfter);

	input.valueAsDate = date;
}


/////////////////////////////////////////////////////////////////////


