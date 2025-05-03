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

  // Clear any previous QR code
  qrContainer.innerHTML = "";

  // Create new QR Code
  qr = new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200,
    colorDark: "#2d3748",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Wait for QR to be rendered (image or canvas)
  setTimeout(() => {
    const qrImg = qrContainer.querySelector("img");
    const qrCanvas = qrContainer.querySelector("canvas");

    if (qrImg && qrImg.src) {
      downloadBtn.href = qrImg.src;
      downloadBtn.download = "qrcode.png";
      qrSection.classList.remove("hidden");
    } else if (qrCanvas) {
      downloadBtn.href = qrCanvas.toDataURL("image/png");
      downloadBtn.download = "qrcode.png";
      qrSection.classList.remove("hidden");
    } else {
      alert("QR code generation failed. Please try again.");
    }
  }, 500);
}