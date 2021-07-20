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

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
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
  });
};

getCountryData('Thailand');
getCountryData('Vietnam');
getCountryData('Malaysia');
