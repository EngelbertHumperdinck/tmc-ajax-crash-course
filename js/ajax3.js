// Invoke strict mode.
"use strict";

// Fetching a GitHub API Using AJAX: https://api.github.com/users.
console.log('beetroot1');
// 1. 'btn': adds an event listener for btn click. Then runs function loadUsers.
document.getElementById('btn').addEventListener('click', loadUsers);
// 2. 'loadUsers': function will make API request for user data.
function loadUsers() {
    // 2a. 'xhr': creates a new instance of the 'XMLHttpRequest' object.
    let xhr = new XMLHttpRequest();
    // 2b. 'open': takes in 3 parameters, 'type', 'url/file' and 'async/TorF'.
    xhr.open('GET', 'https://api.github.com/users', true);
    // 2c. 'onload': checks status and loads the user data.
    xhr.onload = function() {
        if(this.status === 200) {
            let users = JSON.parse(this.responseText);
            console.log(users);
            let htmlOutput = '';
            htmlOutput += 'beetroot';
            htmlOutput += '<ul>';
            for(let i = 0 ; i <= 28; i++ ) {
                htmlOutput += 
                    '<li>' + users[i].login + '</li>' + 
                    '<li>' + users[i].id + '</li>' + 
                    '<li>' + users[i].gravatar_id + '</li>' + 
                    '<li>' + users[i].url + '</li>' + 
                    '<li>' + users[i].site_admin + '</li>';
            }
            htmlOutput += '</ul>';
            document.getElementById('users').innerHTML = htmlOutput;
        }
    }
    // 2d. 'onerror': produces an error message if 'onload' fails.
    xhr.onerror = function() {
        console.log('Ooooh, error.');
    }
    // 2e. 'send': if all is right sends the user data to htmlOutput.
    xhr.send();
}