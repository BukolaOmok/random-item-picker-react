import React from "react";
import QRCode from "qrcode";
import "./App.css";

export default function App() {
  const [typedString, setTypedString] = React.useState("");
  const [qrCodeUrl, setQrCodeUrl] = React.useState("");
  const [storeQRCode, setStoreQRCode] = React.useState([]);

  const handleChange = (event) => {
    setTypedString(event.target.value);
  };

  const generateQRCode = () => {
    QRCode.toDataURL(typedString, (err, url) => {
      setQrCodeUrl(url);
      storeRecentFiveQRCode(url)
    });
  };

  const storeRecentFiveQRCode = (url) => {
      setStoreQRCode (storeQRCode => {
        const newStoreQRCode = [url, ...storeQRCode];
        return newStoreQRCode.slice(0,5)
      })
    }

  

  return (
    <div>
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

      <div>{qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}</div>
    </div>

<div className="stored-qr-style">
<h1>Recent QR Codes Generated</h1>

<div>
{storeQRCode.map((qrCode, index) => (
        <div key={index} className="qr-code">
          <img src={qrCode} alt={`QR Code ${index + 1}`} />
        </div>
      ))}
</div>
</div>
</div>
)}
