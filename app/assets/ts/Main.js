"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var L = require("leaflet");
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: ('leaflet/images/marker-icon-2x.png'),
    iconUrl: ('leaflet/images/marker-icon.png'),
    shadowUrl: ('leaflet/images/marker-shadow.png'),
});
window.onload = function () {
    console.log("onload");
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
};
