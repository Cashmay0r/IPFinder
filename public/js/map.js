document.addEventListener('DOMContentLoaded', (event) => {
	loadMap();
});
let mymap;
let marker;
const defaultView = [-24.797, 133.940];
function loadMap() {
	mymap = L.map('map',{zoomControl: false}).setView(defaultView, 3);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoiY2FzaG1heTByIiwiYSI6ImNrcXA0bXR3bTBpd3AycHM3ZXV3bGVodHoifQ.sX6H2zKyadkNZT5I9NdQoA',
	}).addTo(mymap);
}

function addMarker(location) {
	marker = L.marker(location).addTo(mymap);

	mymap.setView(location, 7);
}
function removeMarker(){
mymap.removeLayer(marker);
mymap.setView(defaultView, 3)

}
