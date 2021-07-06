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
	//const inputIP = '8.8.8.8';
	const ip = document.getElementById('inputIP').value;
	const apiKey = 'at_DcAiANrwr6NYePGOqSpqk4Q676Lg6';
	if (ip.trim() != ''){
	fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`)
		.then((result) => {
			
			return result
				.json()
				.then((obj) => {
					
					ipResult.innerHTML = obj.ip;
					ipLocation.innerHTML = obj.location.city;
					ipTimeZone.innerHTML = 'UTC ' + obj.location.timezone;
					ipISP.innerHTML = obj.isp;
					let ipCoordinates = {
						lat: obj.location.lat,
						lng: obj.location.lng,
					};
					addMarker(ipCoordinates);
				})
				.catch((err) => {
					ipResult.innerHTML = '...';
					ipLocation.innerHTML ='...';
					ipTimeZone.innerHTML = '...';
					ipISP.innerHTML = '...';
					removeMarker();
					
					alert(`Unable to parse ${result} to JSON`);
					
				});
		})
		.catch((err) => {
			
			alert(`No Result was found for ${ip}`);
		});
	}else{
		alert('Input not valid, please try again.')
	};
}
