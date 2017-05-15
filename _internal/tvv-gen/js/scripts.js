
/////////////////////////////////////////////////////////////////////

function update() {

	transferDate("date-from");
	transferDate("date-to");

	transferPost(1);
	transferPost(2);

//	exportJSON();
	
	return false;
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



function transferDate(idSpec) {
	var input = inputElem(idSpec);
	var output = outputElem(idSpec);

	var value = input.value;
	output.innerHTML = value;
}

function transferPost(index) {
	var inputImg = inputElemClassed("post-image", index);
	var inputTitle = inputElemClassed("post-title", index);

	var outputImg = outputElemClassed("post-image", index);
	var outputTitle = outputElemClassed("post-title", index);

	var img = inputImg.value;
	if (img == "") {
		img = "img/no-image.svg";
	}
	outputImg.src = img;

	var title = inputTitle.value;
	outputTitle.innerHTML = title;

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



	
