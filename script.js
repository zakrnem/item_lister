let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem)

function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById('item').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);

  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.textContent = 'X';
  li.appendChild(deleteBtn);
}

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

filter.addEventListener('keyup', filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  let item = itemList.getElementsByTagName('li');

  Array.from(item).forEach(function(item) {
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}




