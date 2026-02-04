import ReactModal from "react-modal";

const Modal = ({
  title,
  isOpen,
  setIsOpen,
}: {
  title: string;
  isOpen: boolean;
  setIsOpen: (opt: boolean) => void;
}) => {
  return (
    <>
      <ReactModal isOpen={isOpen}>
        {title}
        <p>Modal Content</p>
        <button onClick={() => setIsOpen(false)}>close</button>
      </ReactModal>
    </>
  );
};

export default Modal;
