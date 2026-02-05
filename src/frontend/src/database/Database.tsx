import { useState } from "react";
import Modal from "../components/Modal";

const Database = () => {
  const manageDatabase = () => {
    setIsOpen(true);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="subsection--title">
        <h2>Database</h2>
        <button onClick={manageDatabase}>Manage database(s)</button>
      </div>
      <div>database with anything including notes, pdfs, etc.</div>
      <Modal
        title={"asd"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={<>asd</>}
      />
    </>
  );
};

export default Database;
