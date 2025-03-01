let tasks = [];

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    tasks.push({ title, date, status });

    this.reset();
    showTasks();
});

function showTasks() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    tasks.forEach((task, index) => {
        const newItem = document.createElement("div");
        newItem.classList.add("task-item");
        newItem.innerHTML = `
            <h3>${task.title}</h3>
            <p><strong>Fecha:</strong> ${task.date}</p>
            <p><strong>Estado:</strong> ${task.status}</p>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskListElement.appendChild(newItem);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}
