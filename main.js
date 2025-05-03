let qr;

function generateQRCode() {
  const input = document.getElementById("qrInput").value.trim();
  const qrSection = document.getElementById("qrSection");
  const qrContainer = document.getElementById("qrcode");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!input) {
    alert("Please enter a URL.");
    return;
  }

  // Clear previous QR code if exists
  qrContainer.innerHTML = "";

  // Generate new QR Code
  qr = new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200,
    colorDark: "#2d3748",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Wait for QR code to be drawn
  setTimeout(() => {
    const qrImg = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");
    if (qrImg) {
      const dataURL = qrImg.src || qrImg.toDataURL("image/png");
      downloadBtn.href = dataURL;
      qrSection.classList.remove("hidden");
    }
  }, 500);
}
