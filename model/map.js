var mongoose = require('mongoose');
var assert = require('assert');

exports.mapLogic = function mapLogic(map){
	var map = L.map('mapDiv').setView([49, -120], 7);

    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
        id: 'examples.map-20v6611k'
    }).addTo(mapDiv);
    console.log("Are we even accessing me????");
    console.log(map);

    $('#mapDiv').html(map);

}// end exports.hikelist


