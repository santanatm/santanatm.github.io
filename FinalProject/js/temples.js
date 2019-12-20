const requestURL = 'https://santanatm.github.io/temples.json';
//const requestURL = 'https://meganmcbride.github.io/final/json/templeinfo.json';


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
            let telephone = document.createElement('div');
            let email = document.createElement('div');
            let image = document.createElement('img');
            let displayname = temples[i].displayname;
            let alttext = displayname + ' - ' + (i + 1);

            h2.textContent = displayname;
            temples.textContent = 'Telephone: ' + temples[i].telephone;
            email.textContent = 'Email: ' + temples[i].email;
            image.setAttribute('src', temples[i].imageurl);

            image.setAttribute('alt', alttext);
            image.setAttribute('title', alttext);

            MyTemple.appendChild(h2);
            MyTemple.appendChild(telephone);
            MyTemple.appendChild(email);
            MyTemple.appendChild(image);

            document.querySelector('div.MyTemples').appendChild(MyTemple);
        }
    });

