import "./App.css";
import Agent from "./components/Agent";
import Apps from "./components/Apps";
import Database from "./components/Database";
import Device from "./components/Device";
import PKM from "./components/PKM";
import Tasks from "./components/Tasks";
import History from "./components/History";
import { useState } from "react";
import Ingestor from "./components/Ingestor";
import Main from "./components/Main";
import Chat from "./components/Chat";

type Device = {
  name: string;
};

function App() {
  const [isDemo, setIsDemo] = useState(true);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h1>fermat {isDemo && "(demo)"}</h1>
        </div>

        <button
          style={{ maxHeight: "4rem" }}
          onClick={() => {
            setIsDemo(!isDemo);
          }}
        >
          {isDemo ? "Demo" : "Main"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: "10px",
        }}
      >
        <div className="section" style={{ flex: 2 }}>
          <Main />
          <History />
          <Chat />
        </div>
        <div className="section">
          <h2>Settings</h2>
          <PKM />
          <Tasks />
          <Database />
          <Agent />
          <Apps />
          <Ingestor />
          <Device isDemo={isDemo} />
        </div>
      </div>
    </>
  );
}

export default App;
