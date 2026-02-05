import { useState } from "react";
import Modal from "../components/Modal";
import DemoDevice from "./DemoDevice";

const Device = ({ isDemo = false }: { isDemo: boolean }) => {
  const linkDevice = () => {};
  const [showDemoDevice, setShowDemoDevice] = useState(false);

  return (
    <div style={{}}>
      <div className="subsection--title">
        <h2>Device</h2>
        <div>
          {isDemo ? (
            <>
              <button
                onClick={() => setShowDemoDevice(true)}
                style={{ marginRight: "1rem" }}
              >
                View demo device
              </button>
              <Modal
                isOpen={showDemoDevice}
                setIsOpen={setShowDemoDevice}
                title="Demo Device"
                content={<DemoDevice />}
              />
            </>
          ) : (
            <button onClick={linkDevice}>Link device(s)</button>
          )}
        </div>
      </div>
      <div>connected devices, but really the fs(sshfs for the demo)</div>
    </div>
  );
};

export default Device;
