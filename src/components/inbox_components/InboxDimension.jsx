import React, { useContext } from "react";
import Dimension from "../dimensions/Dimension";
import Search from "../Search";
import Loading from "../Loading";
import ChatContainer from "./ChatContainer";
import GroupChatIcons from "./GroupChatIcons";
import ChatIcon from "./ChatIcon";
import PropTypes from "prop-types";
import HorizontalLine from "./HorizontalLine";
import { QuickContext } from "../../contexts/QuickContext";
import { InboxProvider } from "../../contexts/InboxContext";
import {
  formatDateToDayMonthYearHoursMinutes,
  getFirstLetter,
} from "../../utils/utils";

export default function InboxDimension() {
  const { loading, chatRooms } = useContext(QuickContext);

  return (
    <div className="absolute  bottom-20 right-0 m-10 overflow-hidden">
      <InboxProvider>
        <Dimension>
          <div className="mb-6">
            <Search />
          </div>
          {loading ? (
            <Loading>Loading Chats...</Loading>
          ) : (
            <>
              <div className="overflow-y-auto flex flex-col flex-grow">
                {chatRooms.map((chatRoom, index) => {
                  return (
                    <React.Fragment key={index}>
                      <ChatContainer
                        roomId={chatRoom.id}
                        icon={
                          chatRoom.isGroupChat ? (
                            <GroupChatIcons />
                          ) : (
                            <ChatIcon
                              firstWord={getFirstLetter(
                                chatRoom.messages.slice(-1)[0].name
                              )}
                            />
                          )
                        }
                        title={
                          chatRoom.isGroupChat
                            ? chatRoom.title
                            : chatRoom.messages.slice(-1)[0].name
                        }
                        date={formatDateToDayMonthYearHoursMinutes(
                          chatRoom.createdAt
                        )}
                        sender={
                          chatRoom.isGroupChat
                            ? chatRoom.messages.slice(-1)[0].name
                            : ""
                        }
                        message={chatRoom.messages.slice(-1)[0].body}
                        isUnread={chatRoom.isUnread}
                      />
                      {index !== chatRooms.length - 1 && (
                        <HorizontalLine
                          className={"bg-primary-gray-light my-[22px] w-full"}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </>
          )}
        </Dimension>
      </InboxProvider>
    </div>
  );
}

InboxDimension.propTypes = {
  loading: PropTypes.bool,
  getDate: PropTypes.func,
  chatRooms: PropTypes.array,
  getFirstWord: PropTypes.func,
};
