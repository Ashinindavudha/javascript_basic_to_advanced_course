// 18 EVENT

//var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick() {
//     //console.log('Button Clicked');
//     document.getElementById('header-title').textContent = 'Change';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// }

// 19 EVENT
// var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e) {
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);

//     var output = document.getElementById('output');
//     output.innerHTML = '<h3>' + e.target.id + '</h3>';
//     console.log(e.type);
// }
// 20 EVENT
// var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e) {
// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

// 21 
// var button = document.getElementById('button');
// button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// function runEvent(e) {
//     console.log('Event Type : ' + e.type);
// }

// 22 - 
var button = document.getElementById('button');
var box = document.getElementById('box');
//box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);
//box.addEventListener('mousemove', runEvent);


/*function runEvent(e) {
    console.log('Event Type : ' + e.type);
    //output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY :' + e.offsetY + '</h3>';
    //box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
    document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";

}
*/

//23
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keydownup', runEvent);
//itemInput.addEventListener('keydownpress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('input', runEvent);
//select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);
function runEvent(e) {
    e.preventDefault();
    console.log('Event Type : ' + e.type);
    //document.getElementById('inputValue').innerHTML = e.target.value;
    //document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
}