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
            
        let displayname = temples[0].displayname;
        let alttext = displayname;
        h2.textContent = displayname;
        address.textContent = 'Address: ' + temples[0].address1 + ',' + temples[0].address2 + ',' + temples[0].address3 + ',' + temples[0].address4  ;
        telephone.textContent = 'Telephone: ' + temples[0].telephone;
        email.textContent = 'Email: ' + temples[0].email;
        image.setAttribute('src', temples[0].imageurl);
        history.textContent= 'History: ' + temples[0].history;
        image.setAttribute('alt', alttext);
        image.setAttribute('title', alttext);
        services.textContent ='Services:' + "\n";
        for (let j = 0; j < temples[0].services.length; j++) {
            services.textContent = services.textContent + temples[0].services[j] + "\, ";
        }
        ordinanceschedule.textContent ='Ordinances Schedule:' + "\n";
        for (let k = 0; k < temples[0].ordinanceschedule.length; k++) {
            ordinanceschedule.textContent = ordinanceschedule.textContent + temples[0].ordinanceschedule[k] + ", ";
        }
        sessionschedule.textContent ='Sessions Schedule:' + "\n";
        for (let l = 0; l < temples[0].sessionschedule.length; l++) {
            sessionschedule.textContent = sessionschedule.textContent + temples[0].sessionschedule[l] + ", ";
        }
        closureschedule.textContent ='Closure Schedule:' + "\n";
        for (let m = 0; m < temples[0].closureschedule.length; m++) {
            closureschedule.textContent = closureschedule.textContent + temples[0].closureschedule[m] + ", ";
        }
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
        document.querySelector('div.MyTemples0').appendChild(MyTemple);
        
    });

const currentWeather = "https://api.openweathermap.org/data/2.5/weather?id=3492908&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";

fetch(currentWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        
    console.log(jsObject);
    
    document.getElementById('citiname0').textContent = jsObject.name;
    document.getElementById('currentCondition0').textContent = jsObject.weather[0].main;
    document.getElementById('currentTemperature0').textContent = jsObject.main.temp.toFixed(0) + "ºF";
    document.getElementById('highTemperature0').textContent = jsObject.main.temp_max.toFixed(0) + "ºF";
    document.getElementById('currentHumidity0').textContent = jsObject.main.humidity.toFixed(0) + "%";
    document.getElementById('currentWindSpeed0').textContent = jsObject.wind.speed.toFixed(0) + " MPH";
    
    var temp_windchill = parseFloat(document.getElementById("currentTemperature0").innerHTML);
    var wind_speed_windchill = parseFloat(document.getElementById("currentWindSpeed0").innerHTML);
        
    var formula = 35.74 + (0.6215 * temp_windchill) - (35.75 * Math.pow(wind_speed_windchill, 0.16)) + (0.4275 * temp_windchill * Math.pow(wind_speed_windchill, 0.16));
    
    if(temp_windchill < 50 && wind_speed_windchill > 3) {
        document.getElementById("windchill0").innerHTML = formula.toFixed(0) + "ºF";
    } else {
        document.getElementById("windchill0").innerHTML = "N/A";
    }

});

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
            
        let displayname = temples[1].displayname;
        let alttext = displayname;
        h2.textContent = displayname;
        address.textContent = 'Address: ' + temples[1].address1 + ',' + temples[1].address2 + ',' + temples[1].address3 + ',' + temples[1].address4  ;
        telephone.textContent = 'Telephone: ' + temples[1].telephone;
        email.textContent = 'Email: ' + temples[1].email;
        image.setAttribute('src', temples[1].imageurl);
        history.textContent= 'History: ' + temples[1].history;
        image.setAttribute('alt', alttext);
        image.setAttribute('title', alttext);
        services.textContent ='Services:' + "\n";
        for (let j = 0; j < temples[1].services.length; j++) {
            services.textContent = services.textContent + temples[1].services[j] + "\, ";
        }
        ordinanceschedule.textContent ='Ordinances Schedule:' + "\n";
        for (let k = 0; k < temples[1].ordinanceschedule.length; k++) {
            ordinanceschedule.textContent = ordinanceschedule.textContent + temples[1].ordinanceschedule[k] + ", ";
        }
        sessionschedule.textContent ='Sessions Schedule:' + "\n";
        for (let l = 0; l < temples[1].sessionschedule.length; l++) {
            sessionschedule.textContent = sessionschedule.textContent + temples[1].sessionschedule[l] + ", ";
        }
        closureschedule.textContent ='Closure Schedule:' + "\n";
        for (let m = 0; m < temples[1].closureschedule.length; m++) {
            closureschedule.textContent = closureschedule.textContent + temples[1].closureschedule[m] + ", ";
        }
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
        document.querySelector('div.MyTemples1').appendChild(MyTemple);
        
    });

const currentWeather = "https://api.openweathermap.org/data/2.5/weather?id=3718426&appid=00a968af0c9bdd2cf561a37bc3775927&units=imperial";

fetch(currentWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        
    console.log(jsObject);
    
    document.getElementById('citiname1').textContent = jsObject.name;
    document.getElementById('currentCondition1').textContent = jsObject.weather[0].main;
    document.getElementById('currentTemperature1').textContent = jsObject.main.temp.toFixed(0) + "ºF";
    document.getElementById('highTemperature1').textContent = jsObject.main.temp_max.toFixed(0) + "ºF";
    document.getElementById('currentHumidity1').textContent = jsObject.main.humidity.toFixed(0) + "%";
    document.getElementById('currentWindSpeed1').textContent = jsObject.wind.speed.toFixed(0) + " MPH";
    
    var temp_windchill = parseFloat(document.getElementById("currentTemperature1").innerHTML);
    var wind_speed_windchill = parseFloat(document.getElementById("currentWindSpeed1").innerHTML);
        
    var formula = 35.74 + (0.6215 * temp_windchill) - (35.75 * Math.pow(wind_speed_windchill, 0.16)) + (0.4275 * temp_windchill * Math.pow(wind_speed_windchill, 0.16));
    
    if(temp_windchill < 50 && wind_speed_windchill > 3) {
        document.getElementById("windchill1").innerHTML = formula.toFixed(0) + "ºF";
    } else {
        document.getElementById("windchill1").innerHTML = "N/A";
    }

});