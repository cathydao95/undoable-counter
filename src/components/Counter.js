import Buttons from "./Buttons";
import History from "./History";
import { useState, useEffect } from "react";
import Undo from "./Undo";

const addButtons = [+1, +10, +100];
const subtractButtons = [-100, -10, -1];

function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const [undo, setUndo] = useState({
    action: "",
    before: "",
    after: "",
  });

  const [redo, setRedo] = useState([]);

  useEffect(() => {
    if (undo) {
      setCount(Number(undo.before));
      setRedo([...redo, undo]);
      setUndo();
    }
  }, [undo, redo, count]);

  function handleEquation(e) {
    const test = Number(e.target.value);

    setHistory((prevHistory) => {
      return [
        {
          action: test,
          before: count,
          after: count + test,
        },
        ...prevHistory,
      ];
    });

    setCount((prevCount) => prevCount + test);
  }

  function handleUndo() {
    if (history.length > 0) {
      setUndo(history.shift());
      console.log(undo);
    }
  }

  function handleRedo() {
    let lastRemoved = redo.pop();
    console.log("lastremoved", lastRemoved);
    setHistory((prevHistory) => [lastRemoved, ...prevHistory]);
    console.log("redo", redo);
    setCount(lastRemoved.after);
  }

  console.log("UNDO", undo);

  console.log("REDO", redo);
  console.log("history", history);

  return (
    <div>
      <Undo
        undo={undo}
        redo={redo}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
      />
      <Buttons
        data={subtractButtons}
        counter={count}
        setCount={setCount}
        handleEquation={handleEquation}
      />
      {count}
      <Buttons
        data={addButtons}
        counter={count}
        setCount={setCount}
        handleEquation={handleEquation}
      />
      <History history={history} />
    </div>
  );
}

export default Counter;
