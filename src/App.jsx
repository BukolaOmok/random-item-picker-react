import React from "react";
import QRCode from "qrcode";
import "./App.css";

export default function App() {
  const [typedString, setTypedString] = React.useState("");
  const [qrCodeUrl, setQrCodeUrl] = React.useState("");

  const handleChange = (event) => {
    setTypedString(event.target.value);
  };

  const generateQRCode = () => {
    QRCode.toDataURL(typedString, (err, url) => {
      setQrCodeUrl(url);
    });
  };

  return (
    <div className="content-style">
      <div>
        <h1>QR Code Generator</h1>
      </div>
      <p>Enter a URL and click generate to see the QR code</p>
      <div>
        <input
          type="text"
          placeholder="Enter URL..."
          value={typedString}
          onChange={handleChange}
        />
        <button onClick={generateQRCode}>Generate</button>
      </div>
      <div>
        {qrCodeUrl && (
          <img src={qrCodeUrl} alt="QR Code" style={{ marginTop: "20px" }} />
        )}
      </div>
    </div>
  );
}
