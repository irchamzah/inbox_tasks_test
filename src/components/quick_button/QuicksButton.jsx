import { useEffect, useState } from "react";
import CloseQuickButton from "./CloseQuickButton";
import MainQuickButton from "./MainQuickButton";
import TaskQuickButton from "./TaskQuickButton";
import InboxQuickButton from "./InboxQuickButton";
import Dimension from "../dimensions/Dimension";
import Search from "../Search";
import Loading from "../Loading";
import GroupChatIcons from "../inbox_components/GroupChatIcons";
import ChatContainer from "../inbox_components/ChatContainer";
import ChatIcon from "../inbox_components/ChatIcon";

export default function QuicksButton() {
  const [isMainShow, setIsMainShow] = useState(true);
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isInboxShow, setIsInboxShow] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(true);
  const [isTaskShow, setIsTaskShow] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isCloseShow, setIsCloseShow] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setMessages(data.slice(0, 10)));

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const toggleMain = () => {
    setIsMainOpen(!isMainOpen);
    if (!isMainOpen) {
      setIsInboxShow(true);
      setIsTaskShow(true);
    } else {
      setIsInboxShow(false);
      setIsInboxOpen(false);
      setIsTaskShow(false);
      setIsTaskOpen(false);
      setIsCloseShow(false);
    }
  };

  const toggleInbox = () => {
    setIsInboxOpen(!isInboxOpen);
    if (!isInboxOpen) {
      setIsMainShow(false);
      setIsTaskOpen(false);
      setIsCloseShow(true);
    } else {
      setIsMainShow(true);
      setIsCloseShow(false);
    }
  };

  const toggleTask = () => {
    setIsTaskOpen(!isTaskOpen);
    if (!isTaskOpen) {
      setIsMainShow(false);
      setIsInboxOpen(false);
      setIsCloseShow(true);
    } else {
      setIsMainShow(true);
      setIsCloseShow(false);
    }
  };

  const closeAll = () => {
    setIsMainShow(true);
    setIsInboxOpen(false);
    setIsTaskOpen(false);
    setIsMainOpen(false);
  };

  const getDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const getFirstWord = (text) => {
    return text.charAt(0);
  };

  return (
    <>
      {isInboxOpen && (
        <div className="absolute  bottom-20 right-0 m-10 overflow-hidden">
          <Dimension>
            <Search />
            {loading ? (
              <Loading>Loading Chats...</Loading>
            ) : (
              <div className="overflow-y-auto flex flex-col flex-grow">
                <div className="absolute bg-white w-full flex h-[22px]">
                  <br />
                </div>
                <ChatContainer
                  icon={<GroupChatIcons />}
                  title="Group Chats"
                  date={getDate()}
                  sender="Emely"
                  message="Hello there, how can I help you?"
                  isUnread={false}
                />
                <div className="flex w-full h-[1px] bg-primary-gray">
                  <br />
                </div>
                {messages.map((message, index) => (
                  <>
                    <ChatContainer
                      key={index}
                      icon={<ChatIcon firstWord={getFirstWord(message.name)} />}
                      title={message.name}
                      date={getDate()}
                      message={message.body}
                      isUnread={true}
                    />
                    {index !== messages.length - 1 && (
                      <div className="flex w-full h-[1px] bg-primary-gray">
                        <br />
                      </div>
                    )}
                  </>
                ))}
              </div>
            )}
          </Dimension>
        </div>
      )}

      {isTaskOpen && (
        <div className="absolute bottom-20 right-0 m-10">
          <Dimension></Dimension>
        </div>
      )}

      <div className="absolute flex flex-row-reverse gap-6 bottom-0 right-0 m-10">
        {isMainShow && (
          <>
            <div className="relative inline-block">
              <div className="text-primary-gray-light text-center mb-2 capitalize">
                <br />
              </div>
              <MainQuickButton onClick={toggleMain} />
            </div>
          </>
        )}
        {isMainOpen && (
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
            {isCloseShow && isInboxOpen && (
              <CloseQuickButton onClick={closeAll} />
            )}

            <InboxQuickButton onClick={toggleInbox} isOpen={isInboxOpen} />
          </div>
        )}

        {isMainOpen && (
          <div
            className={`relative inline-block ${
              isTaskOpen ? "order-1" : "order-2"
            }`}
          >
            <p
              className={`text-primary-gray-light text-center mb-2 capitalize ${
                (isTaskOpen || isInboxOpen) && "opacity-0"
              }`}
            >
              Task
            </p>
            {isCloseShow && isTaskOpen && (
              <CloseQuickButton onClick={closeAll} />
            )}

            <TaskQuickButton onClick={toggleTask} isOpen={isTaskOpen} />
          </div>
        )}
      </div>
    </>
  );
}
