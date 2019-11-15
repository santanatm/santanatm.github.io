const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json(); })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if ((towns[i].name == "Fish Haven") || (towns[i].name == "Preston") || (towns[i].name == "Soda Springs")) {
                let townInfo = document.createElement('section');
                let tName = document.createElement('h1');
                let tMotto = document.createElement('h4');
                let tYear = document.createElement('p');
                let tPopulation = document.createElement('p');
                let tRain = document.createElement('p');
                let tImg = document.createElement('img')
                let text = document.createElement('div');
                let img = document.createElement('div');
                townInfo.className = "townDetail-section";
                tName.textContent = towns[i].name;
                tMotto.textContent = towns[i].motto;
                tYear.textContent = "Year Founded: " + towns[i].yearFounded;
                tPopulation.textContent = "Population: " + towns[i].currentPopulation;
                tRain.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                tImg.src = "images/" + towns[i].photo;
                tImg.alt = "Photo of " + towns[i].name;
                text.appendChild(tName);
                text.appendChild(tMotto);
                text.appendChild(tYear);
                text.appendChild(tPopulation);
                text.appendChild(tRain);
                img.appendChild(tImg);
                townInfo.appendChild(text);
                townInfo.appendChild(img);
                document.querySelector('div.townDetail').appendChild(townInfo);
            }
        }
