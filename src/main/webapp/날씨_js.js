const api_key="d1bde7f90f8a697ebe612685e6287591"

function saveCoord(coordObj){
	sessionStorage.setItem("coords", JSON.stringify(coordObj));
}

function success(position){
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const coordObj={
		lat,
		lon
	};
	saveCoord(coordObj);
	getWeather(lat, lon);
}

function getGeolocation(){
	if(navigator.geolocation)
		navigator.geolocation.getCurrentPosition(success);
    else
	    alert("지원하지 않음");
}

function getWeather(lat, lon){
	let api_src="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+api_key+"&units=metric&lang={kr}";
	fetch(api_src)
	    .then(function(response){
	        return response.json();	
	    })
	    .then(function(json){
		    const description=json.weather[0].description;
		    const icon = json.weather[0].icon;
		    const temperature = json.main.temp;
		    const currentLocation = json.name;
		    const humidity = json.main.humidity;
		    
		    let weather_des=document.getElementsByClassName("weather_des");
		    let img=document.getElementById("weather_img");
		    weather_des[0].innerHTML=description;
		    weather_des[1].innerHTML=temperature.toFixed(1)+"℃";
		    weather_des[2].innerHTML=humidity+"%";
		    img.setAttribute("src", "http://openweathermap.org/img/w/"+icon+".png");
		    
	    })
}

function loadCoord(){
	const loadedCoords=sessionStorage.getItem("coords");
	if(loadedCoords==null)
		getGeolocation();
	else{
		const parsedCoords=JSON.parse(loadedCoords);
		getWeather(parsedCoords.lat, parsedCoords.lon);
	}	
}