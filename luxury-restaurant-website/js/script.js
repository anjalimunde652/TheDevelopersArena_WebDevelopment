// Reservation Form
const reserveForm = document.getElementById("reserveForm");
if (reserveForm) {
  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !guests || !date || !time) {
      reserveStatus.textContent = "Please fill out all fields!";
      reserveStatus.style.color = "red";
    } else {
      reserveStatus.textContent = "Reservation Successful!";
      reserveStatus.style.color = "gold";
    }
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("cemail").value;

    if (!email.includes("@")) {
      contactStatus.textContent = "Invalid email address!";
      contactStatus.style.color = "red";
    } else {
      contactStatus.textContent = "Message sent!";
      contactStatus.style.color = "gold";
    }
  });
}
