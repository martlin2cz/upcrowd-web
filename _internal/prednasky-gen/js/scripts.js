
/////////////////////////////////////////////////////////////////////

function update() {
	clearOutput();

	transferText("title", "Název přednášky");
	transferText("subject", "Obor");
	transferText("target", "Cílovka");
	transferText("duration", "Délka");
	transferText("annotation", "Anotace");
	transferText("author-name", "Přednášející");
	transferText("author-description", "O přednášejícím");

	transferBgImage("background", "Obrázek na pozadí");
	transferImage("author-thumbnail", "Fotka přednášejícího");

	exportJSON();
	
	return false;
}

/////////////////////////////////////////////////////////////////////

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


/////////////////////////////////////////////////////////////////////



function transferText(idSpec, desc) {
	var input = inputElem(idSpec);
	var output = outputElem(idSpec);

	var value = input.value;
	output.innerHTML = value;

	appendToOutput(value, desc);
}

function transferBgImage(idSpec, desc) {
	var input = inputElem(idSpec);
	var output = outputElem(idSpec);

	var value = input.value;
	if (value == "") {
		value = "img/no-bg.jpg";
	}

	output.style.backgroundImage = "url('" + value+ "')";

	appendToOutput(value, desc);
}

function transferImage(idSpec, desc) {
	var input = inputElem(idSpec);
	var output = outputElem(idSpec);

	var value = input.value;
	if (value == "") {
		value = "img/no-photo.jpg";
	}
	output.src = value;

	appendToOutput(value, desc);
}

/////////////////////////////////////////////////////////////////////
function clearOutput() {
	var output = toSendElem();

	output.value = "";

}

function appendToOutput(value, desc) {
	var output = toSendElem();

	var text = desc + ":\n" + value + "\n\n";
	output.value += text;
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

function toSendElem() {
	var outputId = "to-send";
	var output = document.getElementById(outputId);
	return output;

}
	
