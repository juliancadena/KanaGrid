import React, { useState } from "react";
import { kanaList } from "../data/kana";

type ScriptType = "both" | "hiragana" | "katakana";

export const KanaGrid: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [script, setScript] = useState<ScriptType>("both");

  const filteredKana = kanaList.filter((kana) =>
    kana.romaji.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "0.5rem" }}>
      <input
        type="text"
        placeholder="Search by romaji (e.g. 'ka', 'shi')"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          width: "100%",
          maxWidth: "400px",
          display: "block",
          marginInline: "auto",
          fontSize: "1rem",
        }}
      />

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <label>
          <input
            type="radio"
            name="script"
            value="both"
            checked={script === "both"}
            onChange={() => setScript("both")}
          />{" "}
          Both
        </label>
        {"  "}
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            name="script"
            value="hiragana"
            checked={script === "hiragana"}
            onChange={() => setScript("hiragana")}
          />{" "}
          Hiragana
        </label>
        {"  "}
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            name="script"
            value="katakana"
            checked={script === "katakana"}
            onChange={() => setScript("katakana")}
          />{" "}
          Katakana
        </label>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredKana.map((kana, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "0.5rem",
              textAlign: "center",
              backgroundColor: "#fdfdfd",
            }}
          >
            <strong>{kana.romaji}</strong>
            <div style={{ fontSize: "2rem", marginTop: "0.3rem" }}>
              {(script === "hiragana" ||  script === "both") && <div>{kana.hiragana}</div>}
              {(script === "katakana"  ||  script === "both") && <div>{kana.katakana}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
