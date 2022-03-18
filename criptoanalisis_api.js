
const API_URL = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,EUR';

const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');


fetch (`${API_URL}`)
.then((response) => response.json())
.then((users) => {
  Object.keys(users).forEach(BTC => {
        let elem = document.createElement('li');
        elem.appendChild(document.createTextNode(`Bitcoin a Dollar: ${users[BTC].USD} Bitcoin a Euro: ${users[BTC].EUR}`)
        );
        ul.appendChild(elem);
    });
    HTMLResponse.appendChild(ul);
});

// 👇️ with Objects
const obj = {name: 'Tom', country: 'Chile'};

Object.keys(obj).forEach(key => {
  console.log(key); // 👉️ "name", "country"
  console.log(obj[key]); // 👉️ "Tom", "Chile"
});


  // console.log( `Ethereum: ${json.ETH.USD} Bitcoin: ${json.BTC.USD } Solana: ${json.SOL.USD }`))

  fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,SOL&tsyms=USD,EUR')
  .then(response => response.json())
  .then(cosa => console.log(cosa))

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(cosa => console.log(cosa))


const API_URL_2 = 'https://jsonplaceholder.typicode.com';


const HTMLResponse_2 = document.querySelector("#app");
const ull = document.createElement('ul');


fetch (`${API_URL_2}/users`)
.then((response) => response.json())
.then((users) => {
    users.forEach(user => {
        let elem = document.createElement('li');
        elem.appendChild(document.createTextNode(`Nombre: ${user.name} Correo: ${user.email} aidi: ${user.id}`)
        );
        ull.appendChild(elem);
    });
    HTMLResponse_2.appendChild(ull);
});








// STRINGS PARA INTRODUCIR HTML

// fetch (`${API_URL}/users`)
// .then((response) => response.json())
// .then((users) => {
//     const tpl = users.map((user) => `<li> ${user.name} <3 ${user.email } </li>`);
//     HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
// });





// Consumir API antes de ECMASCRIPT 6

//const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//     if (this.readyState === 4 && this.status === 200) {
//         // 0 = UNSET, no se ha llamado al método open.
//         // 1 = OPENED, se ha llamado al método open.
//         // 2 = HEADERS_RECEIVED, se está llamando al método send()
//         // 3 = LOADING, esta cargando es decir, esta recibiendo la respuesta.
//         // 4 = DONE, se ha completado la operación. 
//         const data =JSON.parse(this.response);
//         const HTMLResponse = document.querySelector('#app');

//         const tpl = data.map((user) => `<li> ${user.name} <3 ${ user.email } </li>`);
//         HTMLResponse.innerHTML = `<ul> ${tpl} </ul> `
//     }
// }

// xhr.addEventListener('load', onRequestHandler)
// xhr.open('GET', `${API_URL}/users`);
// xhr.send();