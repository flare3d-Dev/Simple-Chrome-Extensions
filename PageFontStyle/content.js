chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, response){
	if (request.todo == "changeColor") {
		var addColor = '#' + request.clickedColor;
		$('.api').css('color', addColor);
	}
});