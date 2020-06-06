var global_map;
document.addEventListener("DOMContentLoaded", function() {
	/// Loader.async = true;
	/// Loader.load(null, {suggest: true});
	
	//var word = "Brníčko"
	//prepareWord(word)
});

function wordsSubmitted(event) {
	event.preventDefault();

	var input = document.getElementById("input-words");
	var wordsStr = input.value;
	var wordsList = wordsStr.split(" ");

	wordsList.forEach(function(word) {
		prepareWord(word);
	});
}


///////////////////////////////////////////////////////////////////////////////


function prepareWord(word) {
	pane = preparePane(word)
	var inputEl = pane.querySelector(".word-input")
	var mapEl = pane.querySelector(".word-map")
	var zoomMinus = pane.querySelector(".zoom-minus")
	var zoomPlus = pane.querySelector(".zoom-plus")
	var wordTip = pane.querySelector(".word-tip")

	console.debug("Preparing mapping for ", word, "; ", inputEl, "; ", mapEl);

	var map = prepareMap(mapEl)

	var searchCallback = function(geocoder) {
		var results = geocoder.getResults()[0].results;
		if (!results.length) {
			console.warn("Nothing found for ", word)
			return;
		}
		
		item = results[0];
		console.debug("For ", word, " found", item);
		coords = item.coords;
		updateCenterTo(map, wordTip, coords.x, coords.y, item.label);
	};
	search(word, searchCallback);

	var contentAssistCallback = function(suggestData) {
		var lon = suggestData.data.longitude;
		var lat = suggestData.data.latitude;
		var label = suggestData.data.title + " " + suggestData.data.secondRow
		updateCenterTo(map, wordTip, lon, lat, label);
	}
	setupContentAssist(inputEl, contentAssistCallback);

	setupZoomButtons(map, zoomMinus, zoomPlus);
}

function preparePane(word) {
	template = document.getElementById("word-panel-template")
	pane = template.cloneNode(true);

	pane.id = null
	pane.style.display = "inline-block";

	panes = document.getElementById("words-panels")
	panes.appendChild(pane)

	var inputEl = pane.querySelector(".word-input")
	inputEl.value = word

	return pane;
}

function setupZoomButtons(map, zoomMinusButt, zoomPlusButt) {
	onMinusClick = function() {
		zoomRelative(map, -1);
	}
	onPlusClick = function() {
		zoomRelative(map, +1);
	}

	zoomMinusButt.addEventListener('click', onMinusClick)
	zoomPlusButt.addEventListener('click', onPlusClick)
}

///////////////////////////////////////////////////////////////////////////////

function setupContentAssist(inputEl, callback) {
	var suggest = new SMap.Suggest(inputEl);
	suggest.urlParams({"type": "country|municipality|street|region"});
		//country|municipality|street|address|poi|pubt|region


	suggest.addListener("suggest", function(suggestData) {
		// cool
		console.log("Choosen: ", suggestData.phrase)
		callback(suggestData);
	});
}

function updateCenterTo(map, tipLbl, lon, lat, tipText) {
	console.debug("Centering to lon=", lon, ", lat=", lat, "; ", tipText);
	var center = SMap.Coords.fromWGS84(lon, lat);

	var animate = null;
	map.setCenter(center, animate)

	tipLbl.innerText = tipText;
}

function prepareMap(mapEl) {
	var lon = 14.41790;
	var lat = 50.12655; 

	var center = SMap.Coords.fromWGS84(lon, lat);

	var m = new SMap(mapEl, center, 13);
	m.addDefaultLayer(SMap.DEF_BASE).enable();
	
	return m;
}


///////////////////////////////////////////////////////////////////////////////

function zoomRelative(map, shift) {
	var zoom = map.getZoom();
	map.setZoom(zoom + shift);
}


function search(word, callback) {
	var coder = new SMap.Geocoder(word, callback);
	return coder;
}
