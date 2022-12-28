// Invoke strict mode.
"use strict";

// FETCHING A TEXT FILE USING AJAX.

// 1. 'addEventListener': adds an event listener for button click.
document.getElementById('btn').addEventListener('click', loadText);

// 2. 'loadText': function will load a text file.
function loadText() {
    // 2a. 'xhr': is a new instance of the XMLHttpRequest() object.
    let xhr = new XMLHttpRequest();
    // 2b. 'open': takes in 3 parameters, 'type', 'url/file' and 'async/TorF'.
    xhr.open('GET', './documents/sample2.txt', true);
    console.log('readyState = ', xhr.readyState); 
    // 2c. 'onprogress': often used for graphical loaders.
    xhr.upload.onprogress = function() {
        console.log('readyState = ', xhr.readyState); 
        if(xhr.readyState === 3) {
            console.log('loading...');
        }
    }
    // 2d. 'onload': brings in the 'url/file' and check for th status.
    // NOTE: 'onload' will not run till a readyState of 4.
    // However, 'readystatechange' will check all states from 1 to 4.
    xhr.onload = function() {
        console.log('readyState = ', xhr.readyState); 
            if(this.status === 200) {
                // console.log(this.responseText);
                document.getElementById('text').innerHTML = this.responseText;
            }
            else if(this.status === 404) {
                document.getElementById('text').innerHTML = 'Ouch! Error man.';
            }
    }
    // 2e. 'onreadystatechange': this is an older method of 'onload'.
    /*
    xhr.onreadystatechange = function() {
        console.log('readyState = ', xhr.readyState); // server connection established.
        if(this.readyState === 4 && this.status === 200) {
            setTimeout(() => {
                console.log(this.responseText);
            }, 4000);
        }
    }
    */
   // 2f. 'onerror': catches and reports an error if it occurs.
   xhr.onerror = function() {
        console.log('Ouch! Error man.');
   }
    // 2g. 'send': sends the request for the file.
    xhr.send();
}

/*
readyState Values
0 = request not initialised.
1 = server connection established.
2 = request received.
3 = processing request.
4 = request finished and response is ready.

HTTP Statuses.
200 = OK.
403 = Forbidden.
404 = Not Found.
*/