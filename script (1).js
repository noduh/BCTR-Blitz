function showTime() {
	document.getElementById('currentTime').textContent = new Date().toUTCString();
}
showTime();
setInterval(showTime, 1000);