import React from "react";
import QRCode from "qrcode"
import "./App.css";

export default function App() {
  const [typedString, setTypedString] = React.useState("");
  const [storedTypedString, setStoredTypedString] = React.useState([])
  const [storedQRCode, setStoredQRCode] = ([])

const handleChange = (event) => {
setTypedString(event.target.value)
}

const generateQRCode = () => {
    setStoredTypedString([typedString, ...storedTypedString]);
    QRCode.toDataURL(typedString, function (err, typedString) {
      setStoredQRCode([typedString, ...storedQRCode]);
    });
  }


  return (
    <div className="content-style">
      <div>
        <h1>QR Code Generator</h1>
      </div>

      <p>enter a URL and click generate to see code</p>

      <div>
        <input 
        type="text" 
        placeholder="Enter URL..." 
        onChange={handleChange}
        />
        <button 
        onClick={generateQRCode}>Generate</button>
      </div>
    </div>
  );
}
