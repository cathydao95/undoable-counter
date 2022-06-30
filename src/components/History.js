function History({ history }) {
  let allHistory = history.map((item, index) => {
    return (
      <div key={index} className="history">
        <div>{`${item.action > 1 ? "+" : ""}` + item.action} </div>
        <div>
          ({item.before} &rarr; {item.after})
        </div>
      </div>
    );
  });
  return (
    <div>
      <h2>History</h2>
      {/* {history ? { allHistory } : null} */}
      {allHistory}
    </div>
  );
}

export default History;
