var templateName = 'template-0.svg';
var template = 'templates/' + templateName;

    
function prepare() {
	var form = document.getElementById("the-form");
      
	form.onsubmit = function(e) {
      
		processIt();
		return false;
	}
	

	streeting.initialize('the-svg', template);
	streeting.makeSourceInteractive('the-form', processIt);
}


function processIt(ifEvent) {
	
	var handler = function(link) {
		var theResultLink = document.getElementById("the-result-link");
		theResultLink.href = link;
	};

	if (ifEvent) {
		var sender = ifEvent.target;
		streeting.processUpdate('the-svg', sender, handler);
	} else {
		streeting.process('the-svg', 'the-form', handler);
	}
}

function promptImage(event) {
  var source = event.target;
  var input = source.previousElementSibling;
  var url = input.value;

  url = prompt('Zadej adresu obrázku', url);
  if (url) {
    input.value = url;

    var evtHack = { 'target': input };
   //updateOne(evtHack);
		processIt(evtHack);
  }
}

