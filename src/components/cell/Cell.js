import React from "react";
import "./Cell.css";

export default function Cell({ updateCell, index, playerValue, winner }) {
  return (
    <button
      disabled={playerValue != null || winner != null}
      onClick={() => updateCell(index)}
    >
      {playerValue === null ? "●" : playerValue}
    </button>
  );
}
