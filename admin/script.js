// Giả lập dữ liệu (sau này thay bằng fetch từ backend)
const mockReports = [
  { name: "Nguyễn Văn A", reason: "Giả mạo ngân hàng", date: "2025-07-28" },
  { name: "Trần Thị B", reason: "Lừa đảo tuyển dụng", date: "2025-07-27" },
  { name: "Lê C", reason: "Hack tài khoản Facebook", date: "2025-07-26" }
];

document.getElementById("count-reports").innerText = mockReports.length;
document.getElementById("count-users").innerText = 42; // tạm thời gán cứng

const reportList = document.getElementById("report-list");
reportList.innerHTML = "";

mockReports.forEach(report => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${report.name}</strong> • ${report.reason} <br><small>${report.date}</small>`;
  reportList.appendChild(li);
});
