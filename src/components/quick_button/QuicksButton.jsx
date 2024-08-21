import MainQuick from "./MainQuick";
import InboxQuick from "./InboxQuick";
import TaskQuick from "./TaskQuick";
import InboxDimension from "../inbox_components/InboxDimension";
import TaskDimension from "../task_components/TaskDimension";
import { useState } from "react";

export default function QuicksButton() {
  const [isMainShow, setIsMainShow] = useState(true);
  const [isMainOpen, setIsMainOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isInboxShow, setIsInboxShow] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isTaskShow, setIsTaskShow] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isCloseShow, setIsCloseShow] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

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

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setMessages(data.slice(0, 10)));

    setTimeout(() => {
      setLoading(false);
    }, 500);
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
        <InboxDimension
          loading={loading}
          getDate={getDate}
          messages={messages}
          getFirstWord={getFirstWord}
        />
      )}

      {isTaskOpen && <TaskDimension />}

      <div className="absolute flex flex-row-reverse gap-6 bottom-0 right-0 m-10">
        {isMainShow && <MainQuick toggleMain={toggleMain} />}
        {isMainOpen && (
          <InboxQuick
            isInboxOpen={isInboxOpen}
            isTaskOpen={isTaskOpen}
            isCloseShow={isCloseShow}
            closeAll={closeAll}
            toggleInbox={toggleInbox}
          />
        )}
        {isMainOpen && (
          <TaskQuick
            isTaskOpen={isTaskOpen}
            isInboxOpen={isInboxOpen}
            isCloseShow={isCloseShow}
            closeAll={closeAll}
            toggleTask={toggleTask}
          />
        )}
      </div>
    </>
  );
}
