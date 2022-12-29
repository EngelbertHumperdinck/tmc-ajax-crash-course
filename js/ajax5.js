// Invoke strict mode.
"use strict";

// Retrieve Data From a Database Using AJAX.

// 1. 'btn-get-users': Set an event listener for when the button is clicked.
document.getElementById('btn-get-users').addEventListener('click', loadUsers);

// 2. 'loadUsers': function will use AJAX to fetch a film, load and display it.
function loadUsers() {
    // 2a. 'XMLHttpRequest': creates a new instance of the object.
    let xhr = new XMLHttpRequest();
    // 2b. 'open': access the JSON data.
    xhr.open('GET', './users.php', true);
    // 2c. 'onload': function will check status and load the JSON data.
    xhr.onload = function() {
        if(this.status === 200) {
            let users = JSON.parse(this.responseText);
            let htmlOutput = '';
            users.forEach(user => {
                htmlOutput +=   
                `<section>
                    <h3>${user.user_id}</h3>
                        <p>${user.user_name}</p>
                </section>`
            });
            document.getElementById('users').innerHTML = htmlOutput;
        }
    }
    // 2d. 'onerror': reports an error if it occurs.
    xhr.onerror = function() {
        document.getElementById('users').innerHTML = 'Oh, OK, error man.';
    }
    // 2e. 'send': sends the JSON data to the screen.
    xhr.send();
}
