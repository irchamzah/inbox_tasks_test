import CloseQuickButton from "./CloseQuickButton";
import InboxQuickButton from "./InboxQuickButton";
import { QuickContext } from "../../contexts/QuickContext";
import { useContext } from "react";

export default function InboxQuick() {
  const { isInboxOpen, isTaskOpen, isCloseShow, closeAll, toggleInbox } =
    useContext(QuickContext);
  return (
    <div
      className={`relative inline-block ${
        isInboxOpen ? "order-1 " : "order-2"
      }`}
    >
      <p
        className={`text-primary-gray-light text-center mb-2 capitalize ${
          (isInboxOpen || isTaskOpen) && "opacity-0"
        }`}
      >
        Inbox
      </p>
      {isCloseShow && isInboxOpen && <CloseQuickButton onClick={closeAll} />}

      <InboxQuickButton onClick={toggleInbox} isOpen={isInboxOpen} />
    </div>
  );
}
