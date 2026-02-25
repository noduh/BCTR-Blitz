function showTime() {
	document.getElementById('currentTime').textContent = new Date().toUTCString();
}
showTime();
const timeInterval = setInterval(showTime, 1000);