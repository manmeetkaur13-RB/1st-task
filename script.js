
// Get elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// Handle form submit
searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const query = searchInput.value.trim();

  // Empty submit handled safely
  if (query === "") {
    alert("Please enter a search term");
    searchInput.focus();
    return;
  }

  // Demo search action
  alert(`Searching for: ${query}`);

  // Clear input after search
  searchInput.value = "";
});

// Keyboard accessibility (Enter key already supported by form)
// Extra: focus state handled via CSS
