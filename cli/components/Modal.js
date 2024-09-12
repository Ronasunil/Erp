import { Button } from "./Button";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "
      onClick={onClose}
    >
      <div
        className="relative bg-white pl-28 pr-28 pb-10 pt-10 rounded-lg shadow-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <Button onClick={onClose} type="close">
          X
        </Button>
        {children}
      </div>
    </div>
  );
}
