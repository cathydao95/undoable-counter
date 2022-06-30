function Buttons({ data, count, setCount, handleEquation }) {
  return (
    <div>
      {data.map((num) => {
        return (
          <button key={num} value={num} onClick={(e) => handleEquation(e)}>
            {`${num > 0 ? "+" : ""}` + num}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
