// Invoke strict mode.
"use strict";

// Fetching Data From Input Forms Using AJAX.

// 1. 'btn': listens for a button click and loads the 'getName' function.
document.getElementById('btn').addEventListener('click', getName);
document.getElementById('ajaxForm').addEventListener('submit', getName);
document.getElementById('ajaxPostForm').addEventListener('submit', getPostName);
// 2. 'getName': function will get inputted name and display.
function getName(event) {
    event.preventDefault();
    let inputName = document.getElementById('yourName').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './process.php?inputName='+inputName, true);
    xhr.onload = function() {
        console.log(this.responseText);
    }
    xhr.send();
}
// 3. 'getPostName': function will get inputted name and display.
function getPostName(event) {
    event.preventDefault();
    let inputName = document.getElementById('yourPostName').value;
    let paramName = "inputName="+inputName;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', './process.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        console.log(this.responseText);
    }
    xhr.send(paramName);
}