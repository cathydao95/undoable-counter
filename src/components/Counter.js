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
      setRedo([...redo, undo]);
      setUndo();
    }
  }, [undo, redo]);

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
    if (history.length > 1) {
      setUndo(history.shift());
    }
  }

  console.log("UNDO", undo);
  console.log("history", history);

  function handleRedo() {
    console.log("test");
    let lastRemoved = redo.pop();
    console.log("lastremoved", lastRemoved);
    history.unshift(lastRemoved);
  }

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
