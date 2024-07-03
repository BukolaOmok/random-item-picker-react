import React from "react";
import "./App.css";

const initialText = `
  Nigeria 
  United-Kingdom 
  Dominican-Republic 
  France 
  Cambodia 
  Australia 
  United-States 
  Ecuador 
  India 
  Italy 
  Peru 
  Jordan 
  Iceland`;

export default function App() {
  const [textContent, setTextContent] = React.useState(initialText);
  const [pickedContent, setPickedContent] = React.useState("");

  const handleChange = (event) => {
    setTextContent(event.target.value);
  };

  const handleRandom = (event) => {
    event.preventDefault();
    const textArray = textContent.split("\n")
    const index = Math.floor(Math.random() * textArray.length);
    setPickedContent(textArray[index]);
  };

  return (
    <div className="content-style">
      <form onSubmit={handleRandom}>
        <textarea
          className="text-area"
          value={textContent}
          onChange={handleChange}
          name="textData"
        />
        <button className="button">Random</button>
      </form>
      <h2 className="picked-content">{pickedContent}</h2>
    </div>
  );
}
