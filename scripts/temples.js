// Hamburger Menu Toggle Functionality
const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    
    // Change button symbol between hamburger and X
    if (nav.classList.contains('open')) {
        menuButton.textContent = '✕';
        menuButton.classList.add('open');
    } else {
        menuButton.textContent = '☰';
        menuButton.classList.remove('open');
    }
});

// Dynamic Footer: Copyright Year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Dynamic Footer: Last Modified Date
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
