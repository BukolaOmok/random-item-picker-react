import React from "react";

export default function Tile(props) {
  const [showEnglishWord, setShowEnglishWord] = React.useState(props.isOn);

  const status = showEnglishWord ? props.englishWord : props.word;

  function toggleContent() {
    setShowEnglishWord((showEnglishWord) => !showEnglishWord);
  }

  return (
      <div className="box-style" onClick={toggleContent}>
        <p className="content-style">{status}</p>
      </div>
  );
}
