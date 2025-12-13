const features = [
"Semantic HTML",
"Responsive CSS",
"DOM Manipulation",
"Local Storage"
];


const siteInfo = {
name: "Dynamic Web Project",
version: "1.0"
};


function displayFeatures() {
const list = document.querySelector('#featureList');
list.innerHTML = features.map(feature => `<li>${feature}</li>`).join('');
}


function savePreference() {
localStorage.setItem('preferredSite', siteInfo.name);
alert(`Preference saved for ${siteInfo.name}`);
}


function loadPreference() {
const saved = localStorage.getItem('preferredSite');
if (saved) {
document.querySelector('h1').textContent = `Welcome Back to ${saved}`;
}
}


// Event Listener
document.querySelector('#saveBtn').addEventListener('click', savePreference);


// Initialize
displayFeatures();
loadPreference();