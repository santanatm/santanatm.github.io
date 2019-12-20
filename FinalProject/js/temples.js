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
            let address1 = document.createElement('div');
            let address2 = document.createElement('div');
            let address3 = document.createElement('div');
            let address4 = document.createElement('div');
            let address = temples[i].address1 + temples[i].address2 + temples[i].address3 + temples[i].address4;
            let telephone = document.createElement('div');
            let email = document.createElement('div');
            let displayname = temples[i].displayname;
            let alttext = displayname;

            h2.textContent = displayname;
            temples.textContent = 'Telephone: ' + temples[i].telephone;
            email.textContent = 'Email: ' + temples[i].email;
            image.setAttribute('src', temples[i].imageurl);

            image.setAttribute('alt', alttext);
            image.setAttribute('title', alttext);

            MyTemple.appendChild(h2);
            MyTemple.appendChild(image);
            MyTemple.appendChild(address);
            MyTemple.appendChild(telephone);
            MyTemple.appendChild(email);


            document.querySelector('div.MyTemples').appendChild(MyTemple);
        }
    });

