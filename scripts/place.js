const temp = 28; // °C
const windSpeed = 10; // km/h

document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const windChillSpan = document.getElementById("windchill");

if (temp <= 10 && windSpeed > 4.8) {
  const chill = calculateWindChill(temp, windSpeed).toFixed(1);
  windChillSpan.textContent = chill + "°C";
} else {
  windChillSpan.textContent = "N/A";
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
