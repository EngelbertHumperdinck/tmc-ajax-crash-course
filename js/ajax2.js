// Invoke strict mode.
"use strict";

// Fetching Local JSON Using AJAX.

// 1. 'btn-get-film' and 'btn-get-films': Set an event listener for when the button is clicked.
document.getElementById('btn-get-film').addEventListener('click', loadFilm);
document.getElementById('btn-get-films').addEventListener('click', loadFilms);
// 2. 'loadFilm': function will use AJAX to fetch a film, load and display it.
function loadFilm() {
    // 2a. 'XMLHttpRequest': creates a new instance of the object.
    let xhr = new XMLHttpRequest();
    // 2b. 'open': access the JSON data.
    xhr.open('GET', './documents/film.json', true);
    // 2c. 'onload': function will check status and load the JSON data.
    xhr.onload = function() {
        if(this.status === 200) {
            let film = JSON.parse(this.responseText);
            let htmlOutput = '';
            htmlOutput += 
                `<h3>${film.title}</h3>
                    <p>${film.year}</p>
                    <p>${film.synopsis}</p>`;
            document.getElementById('film').innerHTML = htmlOutput;
        }
    }
    // 2d. 'onerror': reports an error if it occurs.
    xhr.onerror = function() {
        document.getElementById('film').innerHTML = 'Oh, OK, error man.';
    }
    // 2e. 'send': sends the JSON data to the screen.
    xhr.send();
}
// 3. 'loadFilms': function will use AJAX to fetch a film, load and display it.
function loadFilms() {
    // 3a. 'XMLHttpRequest': creates a new instance of the object.
    let xhr = new XMLHttpRequest();
    // 3b. 'open': access the JSON data.
    xhr.open('GET', './documents/films.json', true);
    // 3c. 'onload': function will check status and load the JSON data.
    xhr.onload = function() {
        if(this.status === 200) {
            let films = JSON.parse(this.responseText);
            let htmlOutput = '';
            films.forEach(film => {
                htmlOutput +=   
                `<section>
                    <h3>${film.title}</h3>
                        <p>Released: ${film.year}</p>
                        <p>${film.synopsis}</p>
                </section>`
            });
            document.getElementById('films').innerHTML = htmlOutput;
        }
    }
    // 3d. 'onerror': reports an error if it occurs.
    xhr.onerror = function() {
        document.getElementById('films').innerHTML = 'Oh, OK, error man.';
    }
    // 3e. 'send': sends the JSON data to the screen.
    xhr.send();
}
