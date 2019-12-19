const requestURL = 'https://santanatm.github.io/temples.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        console.table(jsonObj);
/*        const temples = jsonObj['temples'];
        for (let i = 0; i < temples.length; i++) {
            let card = document.createElement('section');
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

            card.appendChild(h2);
            card.appendChild(telephone);
            card.appendChild(email);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }*/
    });

