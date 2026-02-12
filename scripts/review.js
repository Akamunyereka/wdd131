/* ========== Review Counter (localStorage) ========== */
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount += 1;
localStorage.setItem("reviewCount", reviewCount);

const reviewDisplay = document.querySelector("#reviewCount");
reviewDisplay.textContent = `You have submitted ${reviewCount} review(s). Thank you!`;

/* ========== Footer Dates ========== */
const currentYear = new Date().getFullYear();
document.querySelector("#copyright").textContent =
  `© ${currentYear} Kevin Akamunyereka`;

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;
