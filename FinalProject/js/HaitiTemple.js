

const requestURL = 'https://santanatm.github.io/FinalProject/json/temples.json';

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {

    document.getElementById('address').textContent = jsObject.temples[1].address1 + ", " + jsObject.temples[1].address2 + ", " + jsObject.temples[1].address3 + ", " + jsObject.temples[1].address4 + ".";
    document.getElementById('telephone').textContent = jsObject.temples[1].telephone + ".";
    document.getElementById('email').textContent = jsObject.temples[1].email;

    var templeservices = "";
    for (let j = 0; j < jsObject.temples[1].services.length; j++) {
        if (j + 1 == jsObject.temples[1].services.length) {
            templeservices = templeservices + jsObject.temples[1].services[j] + '.';
        }
        else {
            templeservices = templeservices + jsObject.temples[1].services[j] + ', ';
        }
    }
    document.getElementById('services').textContent = templeservices;

    var templeordinances = "";
    for (let j = 0; j < jsObject.temples[1].ordinanceschedule.length; j++) {
        if (j + 1 == jsObject.temples[1].ordinanceschedule.length) {
            templeordinances = templeordinances + jsObject.temples[1].ordinanceschedule[j] + ".";
        }
        else {
            templeordinances = templeordinances + jsObject.temples[1].ordinanceschedule[j] + "; ";
        }      
    }
    document.getElementById('ordinanceschedule').textContent = templeordinances;

    document.getElementById('history').textContent = jsObject.temples[1].history;

    var templesessions = "";
    for (let j = 0; j < jsObject.temples[1].sessionschedule.length; j++) {
        if (j + 1 == jsObject.temples[1].sessionschedule.length) {
            templesessions = templesessions + jsObject.temples[1].sessionschedule[j] + ".";  
        }
        else {
            templesessions = templesessions + jsObject.temples[1].sessionschedule[j] + "; ";
        }
    }
    document.getElementById('sessionschedule').textContent = templesessions;

    var templeclosure = "";
    for (let j = 0; j < jsObject.temples[1].closureschedule.length; j++) {
        if (j + 1 == jsObject.temples[1].closureschedule.length) {
            templeclosure = templeclosure + jsObject.temples[1].closureschedule[j] + ".";
        }
        else {
            templeclosure = templeclosure + jsObject.temples[1].closureschedule[j] + "; ";
        }
    }
    document.getElementById('closureschedule').textContent = templeclosure;


});

const currentWeather = "https://api.openweathermap.org/data/2.5/weather?id=3718426&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";

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
    
    var temp_windchill = parseFloat(document.getElementById("currentTemperature").innerHTML);
    var wind_speed_windchill = parseFloat(document.getElementById("currentWindSpeed").innerHTML);
        
    var formula = 35.74 + (0.6215 * temp_windchill) - (35.75 * Math.pow(wind_speed_windchill, 0.16)) + (0.4275 * temp_windchill * Math.pow(wind_speed_windchill, 0.16));
    
    if(temp_windchill < 50 && wind_speed_windchill > 3) {
        document.getElementById("windchill").innerHTML = formula.toFixed(0) + "ºF";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }

});

