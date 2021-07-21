'use strict';

///////////////////////////////////////
// LESSON: Asynchronous Javascript, AJAX and API
///////////////////////////////////////

// Synchronous Code:
// -    Most code is synchronous
// -    Synchronous code is executed line-by-line
// -    Each line of code waits for the previous line to finish.
// Ex:  The ALERT function is an example of a long-running operation
//      that blocks code execution.

// Asynchronous Code:
// -    Asynchronous code is excuted after a task that runs in the "background" finishes
// -    Asynchronous code is non-blocking
// -    Execution doesn't wait for an asynchronous task to finish its work
// Ex:  The setTimeout function is asynchronous code in that code within its
//      function block cannot executed until the timer has finished running,
//      however, code outside of that block can execute while the timer is
//      running in the background.
// Ex2:
// const img = document.querySelector;
// ('.dog');
// img.src = 'dog.jpg'; // image-loading is actually asynchronous, because it allows
// // for the code to continue being executed while the image loads
// img.addEventListener('load', function () {
//   img.classList.add('fadeIn');
// });
// p.style.width = '300px'; // this line would run even if the img hasn't finished loading

// AJAX (Asynchronous Javascript And XML):
// -    AJAX allows us to communicate with remote web servers in an asynchronous way.
//      With AJAX calls, we can REQUEST data from web servers dynamically.

// APIs: What is an API?
// -    API = Application Programming Interface
// -    An API is a piece of software that can be used by another piece of
//      software in order to allow applications to talk to each other.
// -    An "Online" API is an application running on a server that
//      receives requests for data and sends data back as a response.

///////////////////////////////////////
// LESSON: Our First AJAX Call: XMLHttpRequest
///////////////////////////////////////

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)} million</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>
// `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('Thailand');
// getCountryData('Vietnam');
// getCountryData('Malaysia');

///////////////////////////////////////
// LESSON: Welcome to Callback Hell
///////////////////////////////////////

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className) {
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)} million</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>
// `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country #1
//     renderCountry(data);

//     // Get neighbor country
//     const [neighbor] = data.borders;
//     console.log(neighbor);

//     if (!neighbor) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('Thailand');

// // Callback Hell Example
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

///////////////////////////////////////
// LESSON: Promises and the Fetch API
///////////////////////////////////////

// This is how we used to do it
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// const requestFetch = fetch('https://restcountries.eu/rest/v2/name/thailand');
// console.log(requestFetch);

// What are PROMISES?
// -    A promise is an object that is used as a placeholder for the future
//      result of an asynchronous operation.
// -    A promise is a container for an asynchronous delivered value.
// -    A promise is a container for a future value.
//      For example, the response from an AJAX call

//  What are the ADVANTAGES of using PROMISES?
// 1)   We no longer need to rely on events and callbacks passed into
//      asynchronous functions to handle asynchronous results
// 2)   Instead of nesting callbacks, we can chain promises for
//      a sequence of asynchronous operations: ESCAPING CALLBACK HELL!

// The Promise LIFE-CYCLE
// 1)   PENDING - before the future value is available
// 2)   SETTLED - there are 2 types
//      a) FULFILLED - success, the value is now available
//      b) REJECTED - an error happened during the asynchronous task
// *    we are able to handle these different states in our code
// *    The outcome of a promise is settled only once and lasts forever
// i.   Promises are 1st BUILT - such as the Fetch API returning a promise
// ii.  Promises are 2nd CONSUMED - when we already have a promise

///////////////////////////////////////
// LESSON: Consuming Promises
///////////////////////////////////////

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className) {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} million</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const requestFetch = fetch('https://restcountries.eu/rest/v2/name/thailand');
console.log(requestFetch);

const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

getCountryData('thailand');

// Cleaner version of above function
const getCountryData2 = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData2('usa');
