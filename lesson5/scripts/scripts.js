const button = document.querySelector('button');
const userEntry = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (userEntry.value !== "") {

        // create a li and a delete element button

        let listItem = document.createElement('li');
        let deleteBtn = document.createElement('button');

        // set attributes
        listItem.classList.add('list');
        deleteBtn.classList.add('delete');

        // asign values
        listItem.textContent = userEntry.value;
        deleteBtn.textContent = "✖";

        // add to list element and the delete button
        list.appendChild(listItem);
        listItem.append(deleteBtn);

        // delete button
        deleteBtn.addEventListener('click', function () {

            listItem.remove();
            
        });
    }
});