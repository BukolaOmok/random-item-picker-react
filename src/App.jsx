import React from "react";
import items from "./items";
import Tile from "./tile";
import "./App.css";

export default function App() {
  const [tilings, setTilings] = React.useState(items);
 
  const tileContents = tilings.map((tiling) => (
    <Tile 
    key={tiling.id} 
    word = {tiling.word}
    englishWord = {tiling.englishWord}
    isOn={tiling.isOn} 
    />
  ));

  return <main>
    <h1>Learn Mandarin</h1>
    <p>Instruction: Flip the cards below to see the word in Mandarin</p>
    {tileContents}
    </main>;
}
