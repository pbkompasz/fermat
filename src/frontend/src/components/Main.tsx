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
        <p>Status: {userStatus}</p>
        <p>Agent Status: {agentStatus}</p>
      </div>
    </>
  );
};

export default Main;
