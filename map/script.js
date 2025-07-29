// 1. Khởi tạo map (Dark Theme)
const map = L.map('map').setView([16.0, 108.0], 6);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© CyberScam'
}).addTo(map);

// 2. Load dữ liệu GIẢ từ file local
const scamData = [
  { lat: 10.8231, lng: 106.6297, type: "Lừa đảo tiền ảo", level: "high" },
  { lat: 21.0285, lng: 105.8542, type: "Phishing ngân hàng", level: "medium" },
  { lat: 16.0544, lng: 108.2022, type: "Sim số đẹp scam", level: "low" }
];

// 3. Thêm marker và animation
function updateMap(data) {
  // Xóa marker cũ (nếu có)
  map.eachLayer(layer => {
    if (layer instanceof L.Marker) map.removeLayer(layer);
  });

  // Thêm marker mới
  data.forEach(scam => {
    const marker = L.circleMarker([scam.lat, scam.lng], {
      radius: 8,
      fillColor: scam.level === "high" ? "#ff0000" : "#ffaa00",
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    }).addTo(map);

    marker.bindPopup(`<b>${scam.type}</b><br>Mức độ: ${scam.level}`);
  });

  // Update stats với animation
  anime({
    targets: '#total',
    innerHTML: [0, data.length],
    round: 1,
    duration: 1000,
    easing: 'easeInOutExpo'
  });

  anime({
    targets: '#high',
    innerHTML: [0, data.filter(s => s.level === "high").length],
    round: 1,
    duration: 1200,
    easing: 'easeInOutExpo'
  });
}

// 4. Giả lập live data (3s update 1 lần)
setInterval(() => {
  updateMap(scamData);
  console.log("Map updated!");
}, 3000);

// Khởi chạy lần đầu
updateMap(scamData);