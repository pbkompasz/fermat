const Device = () => {
  const linkDevice = () => {};

  return (
    <>
      <div className="subsection--title">
        <h2>Device</h2>
        <button onClick={linkDevice}>Link device(s)</button>
      </div>
      <div>connected devices, but really the fs(sshfs for the demo)</div>
    </>
  );
};

export default Device;
