import React from "react";
import { KanaGrid } from "./components/KanaGrid";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Kana Grid: Hiragana & Katakana - By Julián Cadena</h1>
      <KanaGrid />
    </div>
  );
};

export default App;
