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
              
            let displayname = temples[i].displayname;
            let alttext = displayname;

            h2.textContent = displayname;
            image.setAttribute('src', temples[i].imageurl);

            image.setAttribute('alt', alttext);
            image.setAttribute('title', alttext);

            MyTemple.appendChild(h2);
            MyTemple.appendChild(image);

            document.querySelector('div.MyTemples').appendChild(MyTemple);
        }
    });