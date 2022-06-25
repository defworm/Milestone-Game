

// Leaflet basic start up
const map = L.map('map').setView([51.505, -0.09], 5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// creating the main character
const mc = mainCharacter(100, 110);



