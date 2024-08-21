import React from "react";
import Dimension from "../dimensions/Dimension";
import Search from "../Search";
import Loading from "../Loading";
import ChatContainer from "./ChatContainer";
import GroupChatIcons from "./GroupChatIcons";
import ChatIcon from "./ChatIcon";
import PropTypes from "prop-types";
import HorizontalLine from "./HorizontalLine";
import WhitePadding from "./WhitePadding";

export default function InboxDimension({
  loading,
  getDate,
  messages,
  getFirstWord,
}) {
  return (
    <div className="absolute  bottom-20 right-0 m-10 overflow-hidden">
      <Dimension>
        <Search />
        {loading ? (
          <Loading>Loading Chats...</Loading>
        ) : (
          <div className="overflow-y-auto flex flex-col flex-grow">
            <WhitePadding />
            <ChatContainer
              icon={<GroupChatIcons />}
              title="Group Chats"
              date={getDate()}
              sender="Emely"
              message="Hello there, how can I help you?"
              isUnread={false}
            />
            <HorizontalLine />
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                <ChatContainer
                  icon={<ChatIcon firstWord={getFirstWord(message.name)} />}
                  title={message.name}
                  date={getDate()}
                  message={message.body}
                  isUnread={true}
                />
                {index !== messages.length - 1 && <HorizontalLine />}
              </React.Fragment>
            ))}
          </div>
        )}
      </Dimension>
    </div>
  );
}

InboxDimension.propTypes = {
  loading: PropTypes.bool.isRequired,
  getDate: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  getFirstWord: PropTypes.func.isRequired,
};
