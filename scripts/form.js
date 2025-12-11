// Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor"
    },
    {
        id: "fc-2050",
        name: "power laces"
    },
    {
        id: "fs-1987",
        name: "time circuits"
    },
    {
        id: "ac-2000",
        name: "low voltage reactor"
    },
    {
        id: "jj-1969",
        name: "warp equalizer"
    }
];

// Populate Product Name Select Options
function populateProducts() {
    const selectElement = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

// Update Footer with Current Year and Last Modified Date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', function() {
    populateProducts();
    updateFooter();
});
