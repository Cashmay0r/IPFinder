document.addEventListener('DOMContentLoaded', (event) => {
	if (document.getElementById('btnFind') != null) {
		document.getElementById('btnFind').addEventListener('click', () => {
			getIPDetails();
			console.log('Button Clicked');
		});
	}
});
function getIPDetails() {
	let ipResult = document.getElementById('ipResult');
	let ipLocation = document.getElementById('ipLocation');
	let ipTimeZone = document.getElementById('ipTimeZone');
	let ipISP = document.getElementById('ipISP');
	let ipCoordinates = {};
	const inputIP = '161.8.247.232';
	const ip = document.getElementById('inputIP').value;
	const apiKey = 'at_DcAiANrwr6NYePGOqSpqk4Q676Lg6';
	fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`)
		.then((result) => {
			return result
				.json()
				.then((obj) => {
					console.log(obj);
					ipResult.innerHTML = obj.ip;
					ipLocation.innerHTML = obj.location.city;
					ipTimeZone.innerHTML = obj.location.timezone;
					ipISP.innerHTML = obj.isp;
					ipCoordinates = {
						lat: obj.location.lat,
						lng: obj.location.lng,
					};
					console.log(ipCoordinates);
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((err) => {
			console.log(err);
		});
}
