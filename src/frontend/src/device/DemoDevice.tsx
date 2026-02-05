import { useState } from "react";
import { ReactReader } from "react-reader";

const asyncTimeout = (ms: number, fn: () => void) => {
  return new Promise(() => {
    setTimeout(fn, ms);
  });
};

// When a new task is created show a dialog in the top right
const readPage1 = () => {
  console.log("read");
};

const annotate = () => {
  console.log("annotate");
};

const underline = () => {};

const writeNote = () => {};

const readPage2 = () => {};

const DemoDevice = () => {
  const demoTasks = ["Read", "Take Notes"];
  const [currentTask, setCurrentTask] = useState<string | undefined>();
  const [taskStatus, setTaskStatus] = useState<boolean | undefined>(false);
  const readSubtasks = [
    {
      title: "read page",
      start: 0,
      duration: "60",
      fn: readPage1,
    },
    {
      title: "annotate",
      start: 15,
      duration: "5",
      fn: annotate,
    },
    {
      title: "underline",
      start: 35,
      duration: "2",
      fn: underline,
    },
    {
      title: "write note",
      start: 40,
      duration: "15",
      fn: writeNote,
    },
    {
      title: "read page",
      start: 61,
      duration: "60",
      fn: readPage2,
    },
  ];
  const agentTasks = [];

  const [location, setLocation] = useState<string | number>(0);

  const startTask = async () => {
    if (currentTask === "Read") {
      const resp = readSubtasks.map((subtask) => {
        return asyncTimeout(subtask.start * 1000, subtask.fn);
      });
      // TODO
      await Promise.all(resp);
    }
    setTaskStatus(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "80%",
        gap: "0",
      }}
    >
      <p>
        You are viewing a demo "virtual" note taking device. There are two tasks
        reading and note taking to showcase the capabilities. You can end the
        demo mode, connect your device and try it for yourself live. Once a demo
        task is started you can close this modal and open the agent modal to
        follow how it tracks the completed tasks, adjusts the TODO list, etc.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "22px" }}>Start a Task:</p>
        {demoTasks.map((task) => (
          <button
            onClick={() => {
              setCurrentTask(task);
              setTaskStatus(false);
            }}
            style={{
              height: "3rem",
              border: currentTask === task ? "green 1px solid" : "",
            }}
          >
            {task}
          </button>
        ))}
        {currentTask !== undefined && (
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              disabled={taskStatus}
              onClick={async () => await startTask()}
            >
              Start
            </button>
            <button disabled={!taskStatus} onClick={() => setTaskStatus(false)}>
              Stop
            </button>
            <button
              disabled={taskStatus}
              onClick={() => {
                setTaskStatus(undefined);
                setCurrentTask(undefined);
              }}
            >
              Idle
            </button>
          </div>
        )}
      </div>
      {currentTask === "Read" ? (
        <div style={{ flex: 1, height: "300px" }}>
          <p>Task: Reading</p>
          <p>Title: Alice in Wonderland</p>
          <p>Agent status: pre-reading</p>
          <ReactReader
            // TODO Add annotated book
            url="https://react-reader.metabits.no/files/alice.epub"
            location={location}
            locationChanged={(epubcfi: string) => setLocation(epubcfi)}
          />
        </div>
      ) : (
        <div style={{ flex: 1, height: "400px" }}>
          <ReactReader
            // TODO Add notes
            url="https://react-reader.metabits.no/files/alice.epub"
            location={location}
            locationChanged={(epubcfi: string) => setLocation(epubcfi)}
          />
        </div>
      )}
    </div>
  );
};

export default DemoDevice;
