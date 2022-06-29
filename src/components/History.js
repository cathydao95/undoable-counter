function History({ history }) {
  let allHistory = history.map((item) => {
    return (
      <div className="history">
        <div>{`${item.action > 0 ? "+" : ""}` + item.action} </div>
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
