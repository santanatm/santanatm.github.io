const requestURL = 'https://santanatm.github.io/FinalProject/json/temples.json';

fetch(requestURL, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }

  })
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        console.table(jsonObj);
        const temples = jsonObj['temples'];
        for (let i = 0; i < temples.length; i++) {
            let MyTemple = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let address = document.createElement('div');
            let telephone = document.createElement('div');
            let email = document.createElement('div');
            let services = document.createElement('div');
            let history = document.createElement('div');
            let ordinanceschedule = document.createElement('div');
            let sessionschedule = document.createElement('div');
            let closureschedule = document.createElement('div');
            
            let weather = document.createElement('div');
            let citiname = document.createElement('div');
            let currentCondition = document.createElement('div');
            let currentTemperature = document.createElement('div');
            let highTemperature = document.createElement('div');
            let currentHumidity = document.createElement('div');
            let currentWindSpeed = document.createElement('div');
            let windchill = document.createElement('div');

            let displayname = temples[i].displayname;
            let alttext = displayname;

            h2.textContent = displayname;
            address.textContent = 'Address: ' + temples[i].address1 + ',' + temples[i].address2 + ',' + temples[i].address3 + ',' + temples[i].address4  ;
            telephone.textContent = 'Telephone: ' + temples[i].telephone;
            email.textContent = 'Email: ' + temples[i].email;
            image.setAttribute('src', temples[i].imageurl);
            history.textContent= 'History: ' + temples[i].history;

            image.setAttribute('alt', alttext);
            image.setAttribute('title', alttext);

            services.textContent ='Services:' + "\n";
            for (let j = 0; j < temples[i].services.length; j++) {
                services.textContent = services.textContent + temples[i].services[j] + "\, ";
            }

            ordinanceschedule.textContent ='Ordinances Schedule:' + "\n";
            for (let k = 0; k < temples[i].ordinanceschedule.length; k++) {
                ordinanceschedule.textContent = ordinanceschedule.textContent + temples[i].ordinanceschedule[k] + ", ";
            }

            sessionschedule.textContent ='Sessions Schedule:' + "\n";
            for (let l = 0; l < temples[i].sessionschedule.length; l++) {
                sessionschedule.textContent = sessionschedule.textContent + temples[i].sessionschedule[l] + ", ";
            }

            closureschedule.textContent ='Closure Schedule:' + "\n";
            for (let m = 0; m < temples[i].closureschedule.length; m++) {
                closureschedule.textContent = closureschedule.textContent + temples[i].closureschedule[m] + ", ";
            }

            weather.textContent= temples[i].currentWeather;

            const currentWeather = weather.textContent;
            fetch(currentWeather)
            .then((response) => response.json())
            .then((jsObject) => {
                
            console.log(jsObject);
            
            citiname.textContent = jsObject.name;
            currentCondition.textContent = jsObject.weather[0].main;
            currentTemperature.textContent = jsObject.main.temp.toFixed(0) + "ºF";
            highTemperature.textContent = jsObject.main.temp_max.toFixed(0) + "ºF";
            currentHumidity.textContent = jsObject.main.humidity.toFixed(0) + "%";
            currentWindSpeed.textContent = jsObject.wind.speed.toFixed(0) + " MPH";

            let temp_windchill = parseFloat(currentTemperature.textContent);
            let wind_speed_windchill = parseFloat(currentWindSpeed.textContent);
                
            let formula = 35.74 + (0.6215 * temp_windchill.textContent) - (35.75 * Math.pow(wind_speed_windchill.textContent, 0.16)) + (0.4275 * temp_windchill.textContent * Math.pow(wind_speed_windchill.textContent, 0.16));
            
            if(temp_windchill.textContent < 50 && wind_speed_windchill.textContent > 3) {
                windchill.textContent = formula.textContent.toFixed(0) + "ºF";
            } else {
                windchill.textContent = "N/A";
            }

        });

            MyTemple.appendChild(h2);
            MyTemple.appendChild(image);
            MyTemple.appendChild(address);
            MyTemple.appendChild(telephone);
            MyTemple.appendChild(email);
            MyTemple.appendChild(services);
            MyTemple.appendChild(history);
            MyTemple.appendChild(ordinanceschedule);
            MyTemple.appendChild(sessionschedule);
            MyTemple.appendChild(closureschedule);

            MyTemple.appendChild(weather);
            MyTemple.appendChild(citiname);
            MyTemple.appendChild(currentCondition);
            MyTemple.appendChild(currentTemperature);
            MyTemple.appendChild(highTemperature);
            MyTemple.appendChild(currentHumidity);
            MyTemple.appendChild(currentWindSpeed);
            MyTemple.appendChild(windchill);

            document.querySelector('div.MyTemples').appendChild(MyTemple);
        }
    });


//const currentWeather = "https://api.openweathermap.org/data/2.5/weather?id=3492908&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";
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
    
    var temp_windchill = parseFloat(document.getElementById("currentTemperature").innerHTML);
    var wind_speed_windchill = parseFloat(document.getElementById("currentWindSpeed").innerHTML);
        
    var formula = 35.74 + (0.6215 * temp_windchill) - (35.75 * Math.pow(wind_speed_windchill, 0.16)) + (0.4275 * temp_windchill * Math.pow(wind_speed_windchill, 0.16));
    
    if(temp_windchill < 50 && wind_speed_windchill > 3) {
        document.getElementById("windchill").innerHTML = formula.toFixed(0) + "ºF";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }

});
