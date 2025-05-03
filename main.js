let qr;

function generateQRCode() {
  const input = document.getElementById("qrInput").value.trim();
  const qrSection = document.getElementById("qrSection");
  const qrContainer = document.getElementById("qrcode");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!input) {
    alert("Please enter a valid URL or text.");
    return;
  }

  // Clear previous QR code
  qrContainer.innerHTML = "";

  // Force QRCode.js to render as image
  const qrcode = new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Wait for the image to render
  setTimeout(() => {
    const qrImg = qrContainer.querySelector("img");

    if (qrImg && qrImg.src) {
      downloadBtn.href = qrImg.src;
      downloadBtn.download = "qrcode.png";
      downloadBtn.classList.remove("hidden");
      qrSection.classList.remove("hidden");
    } else {
      alert("QR Code failed to generate as an image.");
    }
  }, 500);
}
