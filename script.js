// ==============================
// MOBILE NAVIGATION
// ==============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Disable background scroll when menu is open
  document.body.style.overflow =
    navLinks.classList.contains("show") ? "hidden" : "auto";
});

// Close menu when any link is clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    document.body.style.overflow = "auto";
  });
});


// ==============================
// SEARCH BAR FUNCTIONALITY
// ==============================
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = searchInput.value.trim();

    if (!value) {
      alert("Please enter a search term");
      searchInput.focus();
      return;
    }

    alert("Searching for: " + value);
  });
}
/* ===== Day 7: Notification ===== */
const notification = document.getElementById("notification");
const message = document.getElementById("message");

function showSuccess() {
  message.textContent = "Success! Task deployed successfully.";
  notification.className = "notification success";
}

function showError() {
  message.textContent = "Error! Something went wrong.";
  notification.className = "notification error";
}

function dismiss() {
  notification.classList.add("hidden");
}

// ================================
// Day 8: Form Input & Submit
// ================================

const usernameInput = document.getElementById("username");
const errorMsg = document.getElementById("errorMsg");
const submitBtn = document.getElementById("submitBtn");
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (usernameInput && submitBtn && contactForm) {

  // Enable / disable submit button
  usernameInput.addEventListener("input", () => {
    if (usernameInput.value.trim() === "") {
      submitBtn.disabled = true;
      errorMsg.style.display = "block";
    } else {
      submitBtn.disabled = false;
      errorMsg.style.display = "none";
    }
  });

  // Prevent empty submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (usernameInput.value.trim() === "") {
      errorMsg.style.display = "block";
      submitBtn.disabled = true;
      return;
    }

    successMsg.textContent = "Form submitted successfully!";
    usernameInput.value = "";
    submitBtn.disabled = true;
  });
}
