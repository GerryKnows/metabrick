


// 👇️ with Objects
// const obj = {name: 'Tom', country: 'Chile'};

// Object.keys(obj).forEach(key => {
//   console.log(key); // 👉️ "name", "country"
//   console.log(obj[key]); // 👉️ "Tom", "Chile"
// });


  // console.log( `Ethereum: ${json.ETH.USD} Bitcoin: ${json.BTC.USD } Solana: ${json.SOL.USD }`))

  

  fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
  .then(response => response.json())
  .then(cosa => console.log(cosa))


  // fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,SOL&tsyms=USD,EUR')
  // .then(response => response.json())
  // .then(cosa => console.log(cosa))

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(cosa => console.log(cosa))


// const API_URL_2 = 'https://jsonplaceholder.typicode.com';


// const HTMLResponse_2 = document.querySelector("#app");
// const ull = document.createElement('ul');


// fetch (`${API_URL_2}/users`)
// .then((response) => response.json())
// .then((users) => {
//     users.forEach(user => {
//         let elem = document.createElement('li');
//         elem.appendChild(document.createTextNode(`Nombre: ${user.name} Correo: ${user.email} aidi: ${user.id}`)
//         );
//         ull.appendChild(elem);
//     });
//     HTMLResponse_2.appendChild(ull);
// });


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

// var contenido = document.querySelector('#contenido')

// function traer(){
//   const API_URL = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';

// const HTMLResponse = document.querySelector("#app");
// const td = document.createElement('td');
// const td_2 = document.createElement('td');


// fetch (`${API_URL}`)
// .then((response) => response.json())
// .then((users) => {
//   Array.from(users.Data).forEach(BTC => {
//         console.log(BTC);
//         let elem = document.createElement('tr');
//         elem.appendChild(document.createTextNode(`${BTC.CoinInfo.Name}`) ,
//         // elem.appendChild(document.createTextNode(` Precio Dll: $${BTC.RAW.USD.PRICE}`) ,
//         // elem.appendChild(document.createTextNode(` Market Cap:T $${BC.RAW.USD.MKTCAP}`)         
//         // ))
//         );
//         td.appendChild(elem);
//         console.log(elem);
//   });

//   Array.from(users.Data).forEach(BTC => {
//       console.log(BTC);
//       let price = document.createElement('tr');
//       price.appendChild(document.createTextNode(`$${BTC.RAW.USD.PRICE}`) ,
//       );
//       td_2.appendChild(price);
//       console.log(price);
//   });
//     HTMLResponse.appendChild(td);
//     HTMLResponse.appendChild(td_2);
   
// });

// }



var contenido = document.querySelector('#contenido')

function traer(){
  const API_URL = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';

  fetch (`${API_URL}`)
      .then((response) => response.json())
      .then((users) => {
          // console.log(datos.Data)
        tabla(users)     
    });
}

function tabla(users) {
  // console.log(users.Data)
  contenido.innerHTML = ''
  for(let valor of users.Data) {
    // console.log(valor.CoinInfo.Name)
    contenido.innerHTML += `
    <tr>
         <th scope="row">
         <img src="${valor.CoinInfo.ImageUrl}" class="img-thumbnail" alt="...">
         </th>
         <td>${valor.CoinInfo.Name}</td>
         <td> $${valor.RAW.USD.PRICE}</td>
         <td>$${valor.RAW.USD.MKTCAP}</td>
    </tr>

    `
  }

}