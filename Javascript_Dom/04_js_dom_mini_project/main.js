var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItem);

//add item
function addItem(e) {
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';
    //console.log(li);
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // create delete button element

    var deleteBtn = document.createElement('button');
    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

// Delete Item
function removeItem(e) {
    //console.log(2);
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure want to delete this Item?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Item

function filterItem(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text);
    // get li
    var items = itemList.getElementsByTagName('li');
    //console.log(items);
    //convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    });
}
