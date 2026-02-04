import "./App.css";
import Agent from "./components/Agent";
import Apps from "./components/Apps";
import Database from "./components/Database";
import Device from "./components/Device";
import PKM from "./components/PKM";
import Tasks from "./components/Tasks";
import History from "./components/History";

type Device = {
  name: string;
};

function App() {
  return (
    <>
      <h1>fermat</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: "10px",
        }}
      >
        <div className="section" style={{ flex: 2 }}>
          <h2>Main</h2>
          <History />
        </div>
        <div className="section">
          <h2>Settings</h2>
          <PKM />
          <Tasks />
          <Database />
          <Agent />
          <Apps />
          <Device />
        </div>
      </div>
    </>
  );
}

export default App;
