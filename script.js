
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = searchInput.value.trim();

  if (value === "") {
    alert("Please enter something to search.");
    return;
  }

  console.log("Search value:", value);
});
