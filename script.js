function addItem(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${input.value} <button class="delete-btn" onclick="removeItem(this)">X</button>`;
        list.appendChild(li);
        input.value = "";
    }
}

function removeItem(element) {
    element.parentElement.remove();
}
