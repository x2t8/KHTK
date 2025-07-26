const fileInput = document.getElementById('minhchung');
const preview = document.getElementById('preview');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const uploadStatus = document.getElementById('uploadStatus');
const form = document.getElementById('reportForm');
const statusDiv = document.getElementById('statusMessage');

const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

const MAX_SIZE_MB = 20;
let customFiles = [];

fileInput.addEventListener('change', () => {
  const newFiles = Array.from(fileInput.files);

  newFiles.forEach(file => {
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      alert(`x File "${file.name}" vượt quá ${MAX_SIZE_MB}MB và sẽ bị bỏ qua.`);
    } else {
      customFiles.push(file);
    }
  });

  renderPreview();
  simulateUpload();
  fileInput.value = '';
});

function renderPreview() {
  preview.innerHTML = '';
  customFiles.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-block';
      wrapper.style.margin = '5px';
      wrapper.style.padding = '5px';
      wrapper.style.border = '1px solid #ccc';
      wrapper.style.borderRadius = '6px';
      wrapper.style.backgroundColor = '#f9f9f9';
      wrapper.style.maxWidth = '120px';
      wrapper.style.textAlign = 'center';

      const removeBtn = document.createElement('button');
      removeBtn.textContent = '×';
      removeBtn.style.position = 'absolute';
      removeBtn.style.top = '-6px';
      removeBtn.style.right = '-6px';
      removeBtn.style.width = '18px';
      removeBtn.style.height = '18px';
      removeBtn.style.border = 'none';
      removeBtn.style.background = '#333';
      removeBtn.style.color = 'white';
      removeBtn.style.borderRadius = '50%';
      removeBtn.style.cursor = 'pointer';
      removeBtn.style.fontSize = '12px';
      removeBtn.style.fontWeight = 'bold';
      removeBtn.style.boxShadow = '0 0 3px rgba(0,0,0,0.2)';
      removeBtn.style.display = 'flex';
      removeBtn.style.alignItems = 'center';
      removeBtn.style.justifyContent = 'center';
      removeBtn.addEventListener('click', () => {
  customFiles.splice(index, 1);
  renderPreview();
});


      let mediaElement;
      if (file.type.startsWith('image/')) {
        mediaElement = document.createElement('img');
        mediaElement.src = e.target.result;
        mediaElement.style.maxWidth = '100%';
        mediaElement.style.cursor = 'pointer';
        mediaElement.addEventListener('click', () => {
          lightboxImage.src = mediaElement.src;
          lightboxOverlay.style.display = 'flex';
        });
      } else if (file.type.startsWith('video/')) {
        mediaElement = document.createElement('video');
        mediaElement.src = e.target.result;
        mediaElement.controls = true;
        mediaElement.style.maxWidth = '100%';
        mediaElement.style.cursor = 'pointer';
        mediaElement.addEventListener('click', () => {
          lightboxImage.src = '';
          lightboxImage.replaceWith(document.createElement('div'));
          const videoWrapper = document.createElement('video');
          videoWrapper.src = mediaElement.src;
          videoWrapper.controls = true;
          videoWrapper.style.maxWidth = '100%';
          videoWrapper.style.maxHeight = '80vh';
          videoWrapper.autoplay = true;
          lightboxContent = document.getElementById('lightboxContent');
          lightboxContent.replaceChild(videoWrapper, lightboxContent.querySelector('img, video'));
          lightboxOverlay.style.display = 'flex';
        });
      } else {
        mediaElement = document.createElement('div');
        mediaElement.textContent = `📄 ${file.name} (${(file.size/1024).toFixed(1)} KB)`;
        mediaElement.style.fontSize = '14px';
        mediaElement.style.maxWidth = '100px';
        mediaElement.style.padding = '8px';
        mediaElement.style.border = '1px solid #ccc';
        mediaElement.style.borderRadius = '6px';
        mediaElement.style.background = '#f5f5f5';
        mediaElement.style.cursor = 'pointer';
        mediaElement.addEventListener('click', () => {
          const newTab = window.open();
          newTab.document.write(`<title>${file.name}</title>`);
          newTab.document.write(`<p>${file.name}</p><p>Không thể hiển thị trực tiếp, vui lòng tải xuống.</p>`);
        });
      }

      wrapper.appendChild(mediaElement);
      wrapper.appendChild(removeBtn);
      preview.appendChild(wrapper);
    };
    reader.readAsDataURL(file);
  });
}

function simulateUpload() {
  progressFill.style.width = '0%';
  uploadStatus.innerText = 'Chờ chút... Uploading: 0%';
  progressBar.style.display = 'block';
  uploadStatus.style.display = 'block';

  let percent = 0;
  const interval = setInterval(() => {
    percent += 10;
    progressFill.style.width = percent + '%';
    uploadStatus.innerText = `Chờ chút... Uploading: ${percent}%`;

    if (percent >= 100) {
      clearInterval(interval);
      // Ẩn luôn thanh sau khi upload
      setTimeout(() => {
        progressBar.style.display = 'none';
        uploadStatus.style.display = 'none';
        uploadStatus.innerText = ''; // Xóa luôn nội dung ✅
        progressFill.style.width = '0%'; // Reset thanh về 0
      }, 500);
    }
  }, 100);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  customFiles.forEach(file => {
    formData.append('minhchung[]', file);
  });

  statusDiv.style.display = 'block';
  statusDiv.style.color = 'orange';
  statusDiv.textContent = '🕐 Đang xử lý đơn tố cáo của bạn...';

  setTimeout(() => {
    statusDiv.style.color = 'green';
    statusDiv.textContent = '✅ Gửi thành công! Chúng tôi sẽ kiểm tra và xử lý sớm nhất.';

    // Reset mọi thứ sau khi gửi
    form.reset();
    customFiles = [];
    preview.innerHTML = '';

    // Ẩn và xóa nội dung upload
    progressBar.style.display = 'none';
    progressFill.style.width = '0%';
    uploadStatus.innerText = '';
    uploadStatus.style.display = 'none';

    // Ẩn luôn status sau 3 giây
    setTimeout(() => {
      statusDiv.style.display = 'none';
      statusDiv.textContent = '';
    }, 3000);
  }, 2000);
});
lightboxClose.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';

  // Nếu đang xem video, thay lại bằng ảnh trống để reset
  const lightboxContent = document.getElementById('lightboxContent');
  const currentMedia = lightboxContent.querySelector('video');
  if (currentMedia) {
    const img = document.createElement('img');
    img.id = 'lightboxImage';
    img.style.maxWidth = '100%';
    img.style.maxHeight = '80vh';
    lightboxContent.replaceChild(img, currentMedia);
  }
});
const zaloInput = document.getElementById('zaloInput');
const zaloWarning = document.getElementById('zaloWarning');

zaloInput.addEventListener('input', function () {
  const oldValue = this.value;
  const newValue = oldValue.replace(/[^0-9]/g, ''); // Chỉ giữ lại số

  if (oldValue !== newValue) {
    zaloWarning.style.display = 'inline'; // Cảnh báo nếu nhập sai
  } else {
    zaloWarning.style.display = 'none';
  }

  this.value = newValue;
});
document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("hinhThucToCao");
    const nguoiXacThuc = document.getElementById("nguoiXacThuc");

    select.addEventListener("change", function () {
      if (select.value === "an_danh") {
        nguoiXacThuc.style.display = "none";
        nguoiXacThuc.querySelectorAll("input").forEach((el) => (el.required = false));
        nguoiXacThuc.querySelectorAll("input[type='radio']").forEach((el) => (el.required = false));
      } else {
        nguoiXacThuc.style.display = "block";
        nguoiXacThuc.querySelectorAll("input").forEach((el) => (el.required = true));
        nguoiXacThuc.querySelectorAll("input[type='radio']").forEach((el) => (el.required = true));
      }
    });
  });