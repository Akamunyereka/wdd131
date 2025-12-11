// Get the current year and populate the currentyear span
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date and populate the lastModified paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
// Set a specific year in the footer (e.g., 2025)
document.getElementById("2025").textContent = "2025";