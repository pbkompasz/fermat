import { useState } from "react";

type Status = "idle" | "thinking" | "planning" | "ingesting";

const Main = () => {
  const [userStatus] = useState<Status>("idle");
  const [agentStatus] = useState<Status>("idle");

  return (
    <>
      <div className="subsection--title">
        <h2>Main</h2>
      </div>
      <div>
        <p>User Status: {userStatus}</p>
        <p>Agent Status: {agentStatus}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "200px"
        }}
      >
        <div
          style={{
            borderRight: "solid 1px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>TODO(Short Term)</h3>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Long Term</h3>
        </div>
      </div>
    </>
  );
};

export default Main;
