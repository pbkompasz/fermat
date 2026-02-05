import type { ReactNode } from "react";
import ReactModal from "react-modal";

const Modal = ({
  title,
  isOpen,
  setIsOpen,
  content,
}: {
  title?: string;
  isOpen: boolean;
  setIsOpen: (opt: boolean) => void;
  content: ReactNode;
}) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        style={{ content: { backgroundColor: "#242424", padding: "2rem" } }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h2>{title ?? ""}</h2>
            <button onClick={() => setIsOpen(false)} style={{ height: "3rem" }}>
              Close
            </button>
          </div>
          {content ?? "Empty"}
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
