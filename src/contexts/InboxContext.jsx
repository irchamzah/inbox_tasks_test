import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const InboxContext = createContext();

export const InboxProvider = ({ children }) => {
  const [isShowChat, setIsShowChat] = useState(false);
  const [roomId, setRoomId] = useState(1);

  function showDetailChat(roomId) {
    setIsShowChat(true);
    setRoomId(roomId);
  }

  function backDetailChat() {
    setIsShowChat(false);
  }

  return (
    <InboxContext.Provider
      value={{
        isShowChat,
        showDetailChat,
        backDetailChat,
        roomId,
        setRoomId,
      }}
    >
      {children}
    </InboxContext.Provider>
  );
};

InboxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
