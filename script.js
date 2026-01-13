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
// ================== NOTIFICATION BANNER (DAY 7) ==================

const notification = document.getElementById("notification");
const closeBtn = document.getElementById("close-btn");

// function to show notification
function showNotification(type, message) {
  notification.classList.remove("hidden", "success", "error");
  notification.classList.add(type);
  notification.querySelector("span").innerText = message;

  // auto hide after 3 seconds
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 3000);
}

// close button
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    notification.classList.add("hidden");
  });
}
// Trigger notification on page load
showNotification("success", "Task completed successfully!");


