const History = () => {
  const date = "today";
  const history: [] = [];

  return (
    <div>
      <div className="subsection--title">
        <h2>History({date})</h2>
      </div>
      {history && history.length ? history.map(() => <>hi</>) : "nothing"}
    </div>
  );
};

export default History;
