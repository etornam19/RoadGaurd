
//controls for hamburger menu
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

//importing map and scaling
const apiKey ='pk.eyJ1IjoiZXRvcm5hbTIiLCJhIjoiY21hY3Fpa3VxMDYycTJqcG92Nm9rczJrNSJ9.DizHToDzkeZszViPYlrwpg';

const map = L.map('map').setView([41.8781, -87.6298], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

//important markers
var marker = L.marker([41.845631, -87.620234]).addTo(map);
marker.bindPopup("Accident spotted here");

var marker2 = L.marker([41.885728, -87.643538]).addTo(map);
marker2.bindPopup("Accident spotted here");

var marker3 = L.marker([41.881920, -87.627427]).addTo(map);
marker3.bindPopup("Accident spotted here");

var marker4 = L.marker([41.869924, -87.687522]).addTo(map);
marker4.bindPopup("Accident spotted here");

var marker5 = L.marker([41.823471, -87.626197]).addTo(map);
marker5.bindPopup("Accident spotted here");
