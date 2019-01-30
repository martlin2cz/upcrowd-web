
var templateName = 'template-1.svg';
var template = 'templates/' + templateName;                                                                                            

var FORM_ID = 'the-form';

    
function prepare() {
  var form = document.getElementById(FORM_ID);
      
  form.onsubmit = function(e) {
      
    processIt();

    return false;
  }
      
  updateTemplate();
	streeting.makeSourceInteractive(FORM_ID, processIt);

}


function processIt() {
	streeting.process('svg-preview', FORM_ID);
}


function updateTemplate() {
	var select = document.getElementById('select-template');

	var templateName = select.value;

	var template ='templates/' + templateName;

	streeting.initialize('svg-preview', template);
	processIt();
}

function promptImage(event) {
  var source = event.target;
  var input = source.previousElementSibling; //hihi
  var url = input.value;

  url = prompt('Zadej adresu obrázku', url);
  if (url) {
    input.value = url;

		///FIXME  updateCropperLink(input);

  	//var evtHack = { 'target': input };
  	//  updateOne(evtHack);
 		//}
		processIt();
	}
}
