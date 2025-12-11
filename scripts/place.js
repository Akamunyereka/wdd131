// Static values for temperature and wind speed (matching HTML content)
const temperature = 15; // °C
const windSpeed = 10; // km/h

// Function to calculate wind chill (Metric units)
// Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
// Where T is temperature in °C and V is wind speed in km/h
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Calculate and display wind chill
function displayWindChill() {
    const windChillElement = document.getElementById('windchill');
    
    // Check if conditions are met for viable wind chill calculation
    // Metric: Temperature <= 10°C and Wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Update footer with current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
}

// Run functions when page loads
displayWindChill();
updateFooter();
