

const requestURL = 'https://santanatm.github.io/FinalProject/json/temples.json';

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {

    document.getElementById('address').textContent = jsObject.temples[2].address1 + ", " + jsObject.temples[2].address2 + ", " + jsObject.temples[2].address3 + ", " + jsObject.temples[2].address4 + ".";
    document.getElementById('telephone').textContent = jsObject.temples[2].telephone + ".";
    document.getElementById('email').textContent = jsObject.temples[2].email;

    var templeservices = "";
    for (let j = 0; j < jsObject.temples[2].services.length; j++) {
        if (j + 1 == jsObject.temples[2].services.length) {
            templeservices = templeservices + jsObject.temples[2].services[j] + '.';
        }
        else {
            templeservices = templeservices + jsObject.temples[2].services[j] + ', ';
        }
    }
    document.getElementById('services').textContent = templeservices;

    var templeordinances = "";
    for (let j = 0; j < jsObject.temples[2].ordinanceschedule.length; j++) {
        if (j + 1 == jsObject.temples[2].ordinanceschedule.length) {
            templeordinances = templeordinances + jsObject.temples[2].ordinanceschedule[j] + ".";
        }
        else {
            templeordinances = templeordinances + jsObject.temples[2].ordinanceschedule[j] + "; ";
        }      
    }
    document.getElementById('ordinanceschedule').textContent = templeordinances;

    document.getElementById('history').textContent = jsObject.temples[2].history;

    var templesessions = "";
    for (let j = 0; j < jsObject.temples[2].sessionschedule.length; j++) {
        if (j + 1 == jsObject.temples[2].sessionschedule.length) {
            templesessions = templesessions + jsObject.temples[2].sessionschedule[j] + ".";  
        }
        else {
            templesessions = templesessions + jsObject.temples[2].sessionschedule[j] + "; ";
        }
    }
    document.getElementById('sessionschedule').textContent = templesessions;

    var templeclosure = "";
    for (let j = 0; j < jsObject.temples[2].closureschedule.length; j++) {
        if (j + 1 == jsObject.temples[2].closureschedule.length) {
            templeclosure = templeclosure + jsObject.temples[2].closureschedule[j] + ".";
        }
        else {
            templeclosure = templeclosure + jsObject.temples[2].closureschedule[j] + "; ";
        }
    }
    document.getElementById('closureschedule').textContent = templeclosure;


});

const currentWeather = "https://api.openweathermap.org/data/2.5/weather?id=4167147&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";

fetch(currentWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        
    console.log(jsObject);
    
    document.getElementById('citiname').textContent = jsObject.name;
    document.getElementById('currentCondition').textContent = jsObject.weather[0].main;
    document.getElementById('currentTemperature').textContent = jsObject.main.temp.toFixed(0) + "ºF";
    document.getElementById('highTemperature').textContent = jsObject.main.temp_max.toFixed(0) + "ºF";
    document.getElementById('currentHumidity').textContent = jsObject.main.humidity.toFixed(0) + "%";
    document.getElementById('currentWindSpeed').textContent = jsObject.wind.speed.toFixed(0) + " MPH";
});

