import React from "react";
import CloseQuickButton from "./CloseQuickButton";
import InboxQuickButton from "./InboxQuickButton";

export default function InboxQuick({
  isInboxOpen,
  isTaskOpen,
  isCloseShow,
  closeAll,
  toggleInbox,
}) {
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
