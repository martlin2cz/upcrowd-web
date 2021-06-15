/*
var templatesNames= {
	"template-facebook-6.svg": "design pro facebook s 6 položkami (původní) (1x6)",
	"template-facebook-5.svg": "design pro facebook s 5 položkami 1x5",
	"template-twitter-6-sikme.svg": "design pro twitter s 6 položkami (cik-cak) (2x3)",
	"template-twitter-6-rovne.svg": "design pro twitter s 6 položkami (mřížka) (2x3)",
	"sample-template-1.svg": "desgin pro testování apliace (1 post)",

};

var initialTemplateName = "template-facebook-6.svg";
var templatesDirName = 'templates/'; 
*/

var TEMPLATE= 'templates/template-with-2.svg';
var FORM_ID = 'inputs-form';
/////////////////////////////////////////////////////////////////////

function initialize() {

 	var form = document.getElementById(FORM_ID);                                                                                         
   
  	form.onsubmit = function(e) {   
    		updateComplete();
    		return false;
  	}

	streeting.initialize('output-svg', TEMPLATE);
	streeting.makeSourceInteractive(FORM_ID, updateOne);

	this.updateComplete();

//	fillTemplatesDropdown();
//
//	updateTemplate(initialTemplateName);
}

/*
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
*/
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

