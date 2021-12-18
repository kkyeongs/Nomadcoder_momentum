const API_KEY = "";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // JS가 대신 URL을 부른다
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you no weather for you");
}

// 이것을 부르면 브라우저에서 위치 좌표를 준다
// wifi 위치 gps 등등 다 이걸로 사용
// 인자값 2개를 주는데 (성공했을때, 실패했을때)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// js가 함수를 실행시키고 object를 준다