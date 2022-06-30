import { useState } from "react";

function Undo({ undo, redo, handleUndo, handleRedo }) {
  return (
    <div>
      <button onClick={handleUndo}>Undo</button>

      <button onClick={handleRedo} disabled={redo.length > 1 ? false : true}>
        Redo
      </button>
    </div>
  );
}

export default Undo;
