# Interactive Portfolio Website (Week 3 – JavaScript)

This project enhances a basic portfolio website by adding **JavaScript-based interactivity** including form validation, theme toggling, DOM manipulation, and dynamic task management.

---

## 🚀 Features Implemented

### ✔ 1. Form Validation
- Validates email format
- Ensures message length
- Displays real-time error/success messages

### ✔ 2. Dark/Light Theme Toggle
- Toggles theme using `classList.toggle()`
- Saves theme preference using `localStorage`

### ✔ 3. Dynamic To-Do List
- Add tasks dynamically
- Remove tasks using DOM events

---

## 🧩 Tech Stack Used

| Technology | Purpose |
|---|---|
| HTML | Structure |
| CSS | Styling & Layout |
| JavaScript | Interactivity & Logic |

---

---

## 📚 JavaScript Concepts Used

- Variables & Data Types
- Functions
- Event Listeners (`click`, `submit`)
- DOM Manipulation
- Conditionals
- Local Storage
- Reusable UI Helper Functions

---

## ⚙ Setup & Usage

1. Clone or download the repository
2. Open folder in VS Code
3. Open `index.html` in any browser

No external installation required.

---

## 🧪 Testing

**Tested functionalities:**
- Form validations
- Theme toggle persistence
- To-Do add/remove
- DOM update responses
- Button/submit events

Browsers tested:
- Chrome
- Edge
- Firefox

---

## 📝 Sample Code Snippets

**Dark Mode Toggle**
```js
document.body.classList.toggle("dark-mode");
localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
Form Validation

if (!email.includes("@")) showStatus("Enter a valid email!", "red");


