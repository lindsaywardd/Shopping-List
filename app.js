document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');
  
    const addItem = () => {
      const item = inputField.value;
      if (item !== '') {
        const listItem = document.createElement('li');
        // Create the checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        // Append the checkbox to the list item
        listItem.appendChild(checkbox);
        // Add the item text next to the checkbox
      listItem.appendChild(document.createTextNode(item));

        itemList.appendChild(listItem);
        inputField.value = '';
      }
    };
  
    addButton.addEventListener('click', addItem);
  
    inputField.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addItem();
      }
    });

    itemList.addEventListener('change', (event) => {
      if (event.target.type === 'checkbox') {
        const listItem = event.target.parentNode;
        if (event.target.checked) {
          listItem.style.textDecoration = 'line-through';
        } else {
          listItem.style.textDecoration = 'none';
        }
      }
    });
  });
