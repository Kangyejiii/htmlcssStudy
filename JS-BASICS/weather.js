const weather = document.querySelector(".js-weather");

const API_KEY = "8bd6491e356e3390b7ab809d50e79223";
const COORDS = 'coords';


//https:// 추가, units=Metric 추가
//**then 
function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return (response.json());
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        console.log(json);    
        const icon = json.weather[0].main;
        weather.innerText = `${temperature}°C ${icon} @${place}`;
    });
    
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    //위도와 경도 
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    //이름이 같다면 이렇게 저장해도된다.
    const coordsObj = {
        latitude,
        longitude
    };
    //localstorage저장
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}
//(method) Geolocation.getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback,
// options?: PositionOptions): void
function askForCoords(){
    //(성공,error일 때) 
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords===null){
        askForCoords();
    }else { 
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);

    }

}

function init() {
    loadCoords();
}

init();