
var templateName = 'template-1.svg';
var template = 'templates/' + templateName;                                                                                            

var FORM_ID = 'the-form';

    
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
