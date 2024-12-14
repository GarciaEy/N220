let currentUser = "";
const users = {};

function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  let messages = [];

  if (!username) {
    messages.push("Username cannot be empty.");
  }

  if (!password) {
    messages.push("Password cannot be empty.");
  } else {
    if (password.length < 8) {
      messages.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      messages.push("Password must contain at least one uppercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      messages.push("Password must contain at least one number.");
    }
  }

  if (messages.length > 0) {
    alert(messages.join("\n"));
  } else {
    currentUser = username;
    if (!users[username]) {
      users[username] = [];
    }
    showDashboard();
  }
}

function showDashboard() {
  const container = document.querySelector(".container");
  container.innerHTML = `
                <h1>Personal Task Manager</h1>
                <h2>Welcome, <strong>${currentUser}</strong></h2>
                <button class="task-btn" onclick="addTask()">Add Task</button>
                <button class="logout-btn" onclick="logout()">Logout</button>
                <div id="task-list"></div>
            `;
  renderTasks();
}

function logout() {
  currentUser = "";
  document.querySelector(".container").innerHTML = `
                <h1>Personal Task Manager</h1>
				<form onsubmit="validateForm(event)">
				<div class="user-wrapper">
					<label for="username">Username:</label>
					<input type="text" id="username" name="username" required />
				</div>

				<div class="pass-wrapper">
					<label for="password">Password:</label>
					<input type="password" id="password" name="password" required />
				</div>
				<button type="submit" class="login-btn">Login</button>
				</form>`;
}

function addTask() {
  const taskName = prompt("Enter the name of the new task:");
  if (taskName) {
    const task = { name: taskName, category: "Indoor", completed: false };
    users[currentUser].push(task);
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  users[currentUser].forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `
                    <span class="task-name ${
                      task.completed ? "strikethrough" : ""
                    }" onclick="toggleComplete(${index})">${task.name} (${
      task.category
    })</span>
                    <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
                    <button class="change-btn" onclick="changeTaskName(${index})">Change Text</button>
                    <select  class="category" onchange="changeCategory(${index}, this.value)">
                        <option value="Indoor" ${
                          task.category === "Indoor" ? "selected" : ""
                        }>Indoor</option>
                        <option value="Outdoor" ${
                          task.category === "Outdoor" ? "selected" : ""
                        }>Outdoor</option>
                    </select>
                `;
    taskList.appendChild(taskDiv);
  });
}

function toggleComplete(index) {
  users[currentUser][index].completed = !users[currentUser][index].completed;
  renderTasks();
}

function removeTask(index) {
  users[currentUser].splice(index, 1);
  renderTasks();
}

function changeCategory(index, category) {
  users[currentUser][index].category = category;
  renderTasks();
}

function changeTaskName(index) {
  const newName = prompt(
    "Enter the new name for the task:",
    users[currentUser][index].name
  );
  if (newName) {
    users[currentUser][index].name = newName;
    renderTasks();
  }
}
