var templateName = 'template-0.svg';
var template = 'templates/' + templateName;

    
function prepare() {
	var form = document.getElementById("the-form");
      
	form.onsubmit = function(e) {
      
		processIt();
		return false;
	}
	
	setupTodayDate();

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


function setupTodayDate() {
	var input = document.getElementById('input-date');

	var date = new Date();
	// yyyy-MM-dd
	// https://stackoverflow.com/questions/14245339/pre-populating-date-input-field-with-javascript
	var str = date.toISOString().substring(0, 10);

	input.value = str;
}

/*
function dateInBracketsProcessor(id, elem, value) {
	return "(" + streeting.dateProcessor.full(id, elem, value) + ")";
}
*/
