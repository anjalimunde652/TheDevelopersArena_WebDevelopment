// -------- THEME TOGGLE --------
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("darkMode");

if (savedTheme === "true") document.body.classList.add("dark-mode");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});


// -------- FORM VALIDATION --------
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!email.includes("@")) {
    return showStatus("Enter a valid email!", "red");
  }

  if (message.length < 10) {
    return showStatus("Message must be 10+ characters!", "red");
  }

  showStatus("Message sent successfully!", "green");
});

function showStatus(msg, color) {
  formStatus.textContent = msg;
  formStatus.style.color = color;
}


// -------- TO-DO LIST --------
const addTask = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${task} <span class="removeBtn">✖</span>`;
  taskList.appendChild(li);
  taskInput.value = "";

  li.querySelector(".removeBtn").addEventListener("click", () => li.remove());
});
