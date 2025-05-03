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

  // Generate new QR Code
  qr = new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Wait and check for image or canvas
  setTimeout(() => {
    const qrImg = qrContainer.querySelector("img");
    const qrCanvas = qrContainer.querySelector("canvas");

    let dataURL = "";

    if (qrImg && qrImg.src) {
      dataURL = qrImg.src;
    } else if (qrCanvas) {
      dataURL = qrCanvas.toDataURL("image/png");
    }

    if (dataURL) {
      downloadBtn.href = dataURL;
      downloadBtn.download = "qrcode.png";
      qrSection.classList.remove("hidden");
    } else {
      alert("QR code generation failed. Please try again.");
    }
  }, 500);
}
