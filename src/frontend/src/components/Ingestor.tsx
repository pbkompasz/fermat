const Ingestor = () => {
  const addIngestor = () => {};

  return (
    <>
      <div className="subsection--title">
        <h2>Ingestor</h2>
        <button onClick={addIngestor}>Add ingestor</button>
      </div>
      <div>connected ingestors, anything where date has to be ingested e.g. a device, chrome extension, etc.</div>
    </>
  );
};

export default Ingestor;
