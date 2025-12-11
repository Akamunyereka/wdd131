// Temple Data Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Additional three temples
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-2339.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160339.jpg"
    }
];

// Create Temple Cards
function createTempleCard(temple) {
    const card = document.createElement('figure');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        <figcaption>
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
    `;
    
    return card;
}

// Display Temples
function displayTemples(filteredTemples) {
    const container = document.getElementById('temple-container');
    container.innerHTML = '';
    
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        container.appendChild(card);
    });
}

// Filter Functions
function filterOld() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
}

function filterNew() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
}

function filterLarge() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmall() {
    return temples.filter(temple => temple.area < 10000);
}

// Navigation and Filtering
const navLinks = document.querySelectorAll('nav a');
const pageTitle = document.getElementById('page-title');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Get filter type
        const filter = link.getAttribute('data-filter');
        
        // Filter and display temples
        let filtered = [];
        let title = 'Sacred Temples';
        
        switch(filter) {
            case 'old':
                filtered = filterOld();
                title = 'Old Temples';
                break;
            case 'new':
                filtered = filterNew();
                title = 'New Temples';
                break;
            case 'large':
                filtered = filterLarge();
                title = 'Large Temples';
                break;
            case 'small':
                filtered = filterSmall();
                title = 'Small Temples';
                break;
            default:
                filtered = temples;
                title = 'Sacred Temples';
        }
        
        pageTitle.textContent = title;
        displayTemples(filtered);
        
        // Close mobile menu after selection
        if (window.innerWidth < 768) {
            nav.classList.remove('open');
            menuButton.textContent = '☰';
            menuButton.classList.remove('open');
        }
    });
});

// Hamburger Menu Toggle
const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    
    if (nav.classList.contains('open')) {
        menuButton.textContent = '✕';
        menuButton.classList.add('open');
    } else {
        menuButton.textContent = '☰';
        menuButton.classList.remove('open');
    }
});

// Footer - Copyright Year and Last Modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

// Initial Display - Show All Temples
displayTemples(temples);
