
var templateName = 'template-1.svg';
var template = 'templates/' + templateName;                                                                                            

var FORM_ID = 'prednaska-form';

    
function prepare() {
  var form = document.getElementById(FORM_ID);
      
  form.onsubmit = function(e) {
      
    processIt();

    return false;
  }
      
  streeting.initialize('svg-preview', template);
  streeting.makeSourceInteractive(FORM_ID, processIt);

}


function processIt() {
  streeting.process('svg-preview', FORM_ID);
	generateOutputs();
}


/////////////////////////////////////////////////////////////////////
function generateOutputs() {
	var data = streeting.inferData(FORM_ID);

	exportJson(data);
	exportPlain(data);
}

function performImport() {
	var data = importJson();
	//FIXME here: streeting.dataToForm(data);

	processIt();
}


function exportJson(data) {
	var str = JSON.stringify(data);

	var output = document.getElementById('export-json');
	output.value = str;
}

function exportPlain(data) {
	var result = "";

	data.forEach(function(e) {
		result += e.id;
		result += ":\n";
		result += e.value;
		result += "\n\n";
	});

	var output = document.getElementById('to-send');
	output.value = result;
	//TODO
}

function importJson() {
	var input = document.getElementById('import-json');
	var str = input.value;

	var data;
	try {
		data = JSON.parse(str);
	} catch (e) {
		alert("Data jsou poškozena");
	}

	return data;
}



/////////////////////////////////////////////////////////////////////

/*
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
*/
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
*/	
