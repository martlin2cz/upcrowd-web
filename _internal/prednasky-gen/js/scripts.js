
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

	
	return false;
}

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

	output.style.backroundImage = value;

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
	
