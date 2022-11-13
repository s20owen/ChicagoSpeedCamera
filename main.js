

const map = L.map('map').setView([41.765836, -87.6036], 12);
const popup = L.popup();
const file = "Speed_Camera_Locations.csv";

getData();
async function getData(){
   const response = await fetch(file);
   const data = await response.text();
   //console.log(data);

   const table = data.split('\n').slice(1);
   table.forEach(row => {
    const columns = row.split(',');
    const address = columns[0];
    const lat = columns[4];
    const lon = columns[5];
   
    //console.log(address, lat, lon);
    addMarkers(address, lat, lon);
   });
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function addMarkers(address, lat, lon){
    const marker = L.marker([lat, lon]).addTo(map)
    .bindPopup(address);
}

/*function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Speed Camera at: "  + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);*/