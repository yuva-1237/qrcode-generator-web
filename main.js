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

  // Generate new QR Code using canvas
  qr = new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Wait until the QR code is fully rendered
  setTimeout(() => {
    const qrCanvas = qrContainer.querySelector("canvas");

    if (qrCanvas) {
      const dataURL = qrCanvas.toDataURL("image/png");
      downloadBtn.href = dataURL;
      downloadBtn.download = "qrcode.png";
      qrSection.classList.remove("hidden");
    } else {
      alert("QR code generation failed. Please try again.");
    }
  }, 800); // Slightly longer delay for stability
}
