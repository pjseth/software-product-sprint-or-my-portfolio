// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random movie quote to the page.
 */
function addBBQuote() {
    const quotes =
        ['I am the one who knocks.', 'Tread lightly', 'Say my name', 'Ayo Mr. White!', 
        'Just because you killed Jesse James, don’t make you Jesse James', 'Ahhhh wire!',
        'I did it for me.', 'Stay out of my territory', 'Yeah science!'];
  
    // Pick a random quote.
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Add it to the page.
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote;
  }

  function tQuestion($event) {
    console.log(event);
    var temp = event.target;
    var temp1 = event.target.nextElementSibling;
    console.log(temp);
    console.log(temp1);
  if (temp1.className=="answerBlock") {
      temp1.classList.remove("answerBlock");
      temp.innerHTML = 'Show Answer';
  } else {
      temp1.classList.add("answerBlock");
      temp.innerHTML = 'Hide Answer';
  }
}

function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/** Fetches the current date from the server and adds it to the page. */
async function revealHello() {
    const responseFromServer = await fetch('/hello-pj');
    const textFromResponse = await responseFromServer.text();
  
    const helloContainer = document.getElementById('hello-container');
    helloContainer.innerText = textFromResponse;
}

async function revealSmashMain() {
    // Send a request to /my-data-url.
    const responseFromServer = await fetch('/smash');
    // Parse the response as JSON.
    const myObject = await responseFromServer.json();
    const character = myObject[Math.floor(Math.random() * myObject.length)];
    // Now we can reference the fields in myObject!
    console.log(myObject);

    const smashContainer = document.getElementById('smash-container');
    smashContainer.innerText = character;
}

