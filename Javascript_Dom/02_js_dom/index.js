// Traversing Dom
var itemList = document.querySelector('#items');
// 7 - parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//8 - parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// 9 - childNodes
// console.log(itemList.childNodes);
//console.log(itemList.children);
//itemList.children[1].style.backgroundColor = 'yellow';

//10 - firstChild

// console.log(itemList.firstChild);

// 11 - firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// 11 - lastChild
// console.log(itemList.lastChild);
// 12 - lastElementChild
// itemList.lastElementChild.textContent = 'Hello 1';

// 13 - nextSibling
//console.log(itemList.nextSibling);

// 14 - nextElementSibling
//console.log(itemList.nextElementSibling)

// 15 - previousSibling
// console.log(itemList.previousSibling)

// 16 - previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// 17 - createElement
// create a div
var newDiv = document.createElement('div');

// add class 
newDiv.className = 'hello';

// add id

newDiv.id = 'hellow'

// add attribute 
newDiv.setAttribute('title', 'Hello Div');

// create text node

var newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);