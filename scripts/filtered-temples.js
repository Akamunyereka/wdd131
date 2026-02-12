/* ========== Temple Data Array ========== */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
];

/* ========== DOM References ========== */
const templeContainer = document.querySelector("#temples");

/* ========== Temple Card Builder ========== */
function displayTemples(templeList) {
  templeContainer.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";

    const content = document.createElement("div");
    content.classList.add("card-content");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

    content.append(name, location, dedication, area);
    card.append(img, content);
    templeContainer.append(card);
  });
}

/* ========== Filtering Functions ========== */
function filterOld() {
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
}

/* ========== Event Listeners ========== */
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
document.querySelector("#old").addEventListener("click", filterOld);
document.querySelector("#new").addEventListener("click", filterNew);
document.querySelector("#large").addEventListener("click", filterLarge);
document.querySelector("#small").addEventListener("click", filterSmall);

/* ========== Footer Date Handling ========== */
const currentYear = new Date().getFullYear();
document.querySelector("#copyright").textContent =
  `© ${currentYear} Kevin Akamunyereka`;

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

/* ========== Initial Load ========== */
displayTemples(temples);
