var POSTS_COUNT = 6;
/////////////////////////////////////////////////////////////////////

function initialize() {
	cloneAsSibling("input-post", POSTS_COUNT);
	cloneAsSibling("output-post", POSTS_COUNT);

	putDate("date-from", -6);
	putDate("date-to", 0);

}


function update() {

	transferDate("date-from", false);
	transferDate("date-to", true);

	for (i = 1; i <= POSTS_COUNT; i++) {
		transferPost(i);
	}

//	exportJSON();
	
	return false;
}

function generateImage() {
	var source = document.getElementById("output-panel");
	var target = document.getElementById("output-canvas-wrapper");
	target.innerHTML = '';

	html2canvas(source, {
  	onrendered: function(canvas) {
  	  target.appendChild(canvas);
  	}
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

function putDate(inputIdSpec, daysAfter) {
	var input = inputElem(inputIdSpec);

	var date = new Date();
	date.setDate(date.getDate() + daysAfter);

	input.valueAsDate = date;
}


/////////////////////////////////////////////////////////////////////

/*
function formToJSON() {
	return {
		'title':		inputElem('title').value,
		'subject':	inputElem('subject').value,
		'target':		inputElem('target').value,
		'duration':	inputElem('duration').value,
		'annotation':		inputElem('annotation').value,
		'authorName':	inputElem('author-name').value,
		'authorDescription':	inputElem('author-description').value,
		'background': 	inputElem('background').value,
		'authorThumbnail':		inputElem('author-thumbnail').value,
		'timestamp': 		new Date().toString()	
	};
}


function jsonToForm(json) {
	inputElem('title').value 		= json.title;
	inputElem('subject').value	= json.subject;
	inputElem('target').value		= json.target;
	inputElem('duration').value	= json.duration;
	inputElem('annotation').value		= json.annotation;
	inputElem('author-name').value	= json.authorName;
	inputElem('author-description').value = json.authorDescription;
	inputElem('background').value		= json.background;
	inputElem('author-thumbnail').value = json.authorThumbnail;
}
*/

/////////////////////////////////////////////////////////////////////



function transferDate(idSpec, withYear) {
	var input = inputElem(idSpec);
	var output = outputElem(idSpec);

	var value = input.valueAsDate;
	var text = "";
	if (value) {
		text = 
			(value.getDate()) + "." +
			(value.getMonth() + 1) + "." + 
			(withYear ? value.getFullYear() : '');
	}

	output.innerHTML = text;
}

function transferPost(index) {
	var inputImg = inputElemClassed("post-image", index);
	var inputTitle = inputElemClassed("post-title", index);
	var inputCrop = inputElemClassed("post-crop", index);

	var outputImg = outputElemClassed("post-image", index);
	var outputTitle = outputElemClassed("post-title", index);

	var img = inputImg.value;
	if (img == "") {
		img = "img/no-image.svg";
	}
	outputImg.src = img;

	var title = inputTitle.value;
	outputTitle.innerHTML = title;

	if (inputCrop.checked) {
		outputImg.classList.add("rounded");
	} else {
		outputImg.classList.remove("rounded");
	}
	
}

/////////////////////////////////////////////////////////////////////

function exportJSON() {
	var exportId = "export-json";
	var exportElem = document.getElementById(exportId);

	var json = formToJSON();
	var str = JSON.stringify(json);

	exportElem.value = str;
}

function importJSON() {
	var importId = "import-json";
	var importElem = document.getElementById(importId);

	var str = importElem.value;
	
	var json;
	try {
		json = JSON.parse(str);
	} catch(e) {
		alert("Chybný formát dat: " + e);
		return;
	}

	jsonToForm(json);
	update();
}

/////////////////////////////////////////////////////////////////////


function inputElem(idSpec) {
	var inputId = "input-" + idSpec;
	var input = document.getElementById(inputId);
	return input;
}

function outputElem(idSpec) {
	var outputId = "output-" + idSpec;
	var output = document.getElementById(outputId);
	return output;
}

function inputElemClassed(classSpec, index) {
	var inputClass = "input-" + classSpec;
	var inputs = document.getElementsByClassName(inputClass);
	var input = inputs[index - 1];
	return input;
}

function outputElemClassed(classSpec, index) {
	var outputClass = "output-" + classSpec;
	var outputs = document.getElementsByClassName(outputClass);
	var output = outputs[index - 1];
	return output;
}



	
