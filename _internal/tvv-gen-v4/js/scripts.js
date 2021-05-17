var POSTS_COUNT = 6;

var templatesNames= {
	"template-facebook-6.svg": "design pro facebook s 6 položkami (původní) (1x6)",
	"template-facebook-5.svg": "design pro facebook s 5 položkami 1x5",
	"template-twitter-6-sikme.svg": "design pro twitter s 6 položkami (cik-cak) (2x3)",
	"template-twitter-6-rovne.svg": "design pro twitter s 6 položkami (mřížka) (2x3)",
	"sample-template-1.svg": "desgin pro testování apliace (1 post)",

};

var initialTemplateName = "template-facebook-6.svg";
var templatesDirName = 'templates/'; 

var NO_IMAGE_URL = 'img/no-image.svg';
var FORM_ID = 'inputs-form';
/////////////////////////////////////////////////////////////////////

function initialize() {
	cloneAsSibling("input-post", POSTS_COUNT);
	setupAtts();

	putDate();

 	var form = document.getElementById(FORM_ID);                                                                                         
   
  	form.onsubmit = function(e) {   
    		updateComplete();
    		return false;
  	}

	fillTemplatesDropdown();

	updateTemplate(initialTemplateName);
}

function fillTemplatesDropdown() {
	var dropdown = document.getElementById("templates-dropdown");
	for (const [fileName, label] of Object.entries(templatesNames)) {
		var option = document.createElement("option");
		option.text = label;
		option.value = fileName;

		dropdown.add(option);
	}
}

function templateChanged(event) {
	var dropdown = event.target;
	var templateOption = dropdown.item(dropdown.selectedIndex);
	var templateFileName = templateOption.value;

	updateTemplate(templateFileName);
}

function updateTemplate(templateName) {
	var template = templatesDirName + templateName;
	streeting.initialize('output-svg', template);
	streeting.makeSourceInteractive(FORM_ID, updateOne);

	this.updateComplete();
}

function updateComplete() {
	try {
		streeting.process('output-svg', FORM_ID,
			function(link) {
				console.info("SVG updated!");
			},
			function(msg, e) {
				//alert(msg);
			}
		);
	} catch (e) {
		console.error("Chyba, " + JSON.stringify(e));
	}
}

function updateOne(event) {
	var sender = event.target;

	streeting.processUpdate('output-svg', sender, null,
		function(msg, e) {
			//alert(msg);
		});
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
	var iPost = 0, iImage = 0, iCropper = 0;

	inputs.forEach(function(input, index) {
		if (input.classList.contains('input-post-image')) {
			input.setAttribute(ID_ATTR_NAME, 'output-post-image-' + iImage);
			iImage++;
		}
		if (input.classList.contains('input-post-image-cropper')) {
			input.setAttribute(ID_ATTR_NAME, 'output-post-image-cropper-' + iCropper);
			iCropper++;
		} 
		if (input.classList.contains('input-post-text')) {
			input.setAttribute(ID_ATTR_NAME, 'output-post-text-' + iPost);
			iPost++;
		} 
	});	
}

/////////////////////////////////////////////////////////////////////


function putDate() {
	var input = document.getElementById('input-date-to');

	var date = new Date();
	date.setDate(date.getDate());

	input.valueAsDate = date;
}

function toDateProcessor(id, elem, value) {
	var toDate = new Date(value);
	var fromDate = new Date(toDate);
  	fromDate.setDate(toDate.getDate() - 6);

	var fromStr;
	if (fromDate.getFullYear() != toDate.getFullYear()) {
		fromStr = fromDate.getDate() + ". " + (fromDate.getMonth() + 1) + ". " + fromDate.getFullYear();
	} else {
		fromStr = fromDate.getDate() + ". " + (fromDate.getMonth() + 1) + ". ";
	}

	var toStr = toDate.getDate() + ". " + (toDate.getMonth() + 1) + ". " + toDate.getFullYear();

	var dateRangeStr = fromStr + " - " + toStr;
	console.debug("Setting week to " + dateRangeStr);
	return dateRangeStr;
}

/////////////////////////////////////////////////////////////////////


