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
            let history = document.createElement('div');
            
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

            MyTemple.appendChild(h2);
            MyTemple.appendChild(image);
            MyTemple.appendChild(address);
            MyTemple.appendChild(telephone);
            MyTemple.appendChild(email);
            MyTemple.appendChild(history);

            document.querySelector('div.MyTemples').appendChild(MyTemple);
        }
    });

