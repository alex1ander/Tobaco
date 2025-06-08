const darkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#cfcfcf" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1d1d1d" }] },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#2c2c2c" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#232323" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#181818" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2e2e2e" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8a8a8a" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#1e1e1e" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#444444" }],
  },
];



function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 }, // Нью-Йорк или нужное место
    zoom: 11,
    styles: darkMapStyle,
  });

  const marker = new google.maps.Marker({
    position: { lat: 40.7128, lng: -74.0060 },
    map,
    icon: {
      url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png", // белая метка
      scaledSize: new google.maps.Size(27, 43),
    },
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="color: #f9a825; font-weight: bold;">Mackbellzy Armenia</div>
      <div style="color: #fff;">146 Sheikh Zayed Rd - Al Wasl, Dubai, UAE<br>
      7 Ուլիխ Փողոց | mackbellzy.am</div>`,
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}
