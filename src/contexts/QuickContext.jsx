import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { randomBoolean, randomDate } from "../utils/utils";

export const QuickContext = createContext();

export const QuickProvider = ({ children }) => {
  const [isMainShow, setIsMainShow] = useState(true);
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isInboxShow, setIsInboxShow] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [isTaskShow, setIsTaskShow] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isCloseShow, setIsCloseShow] = useState(false);
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(false);

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
    fetchChatRooms();
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

  const fetchChatRooms = async () => {
    try {
      setLoading(true);
      const [chatRoomsResponse, messagesResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`),
        axios.get(`https://jsonplaceholder.typicode.com/comments`),
      ]);
      const chatRooms = chatRoomsResponse.data;
      const messages = messagesResponse.data;
      const updatedChatRooms = chatRooms.map((message, i) => {
        const messagesOfRooms = messages.filter(
          (message) => message.postId === chatRooms[i].id
        );

        return {
          ...message,
          messages: messagesOfRooms,
          createdAt: randomDate(),
          isUnread: randomBoolean(),
          isGroupChat: randomBoolean(),
        };
      });
      setLoading(false);
      setChatRooms(updatedChatRooms);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const detailChatRoom = (roomId) => {
    return chatRooms.find((chatRoom) => chatRoom.id === roomId);
  };

  const getTotalDifferentUserInChatRoom = (roomId) => {
    const chatRoom = detailChatRoom(roomId);
    const users = chatRoom.messages.map((message) => message.id);
    return new Set(users).size;
  };

  return (
    <QuickContext.Provider
      value={{
        isMainShow,
        isMainOpen,
        isInboxShow,
        isInboxOpen,
        isTaskShow,
        isTaskOpen,
        isCloseShow,
        chatRooms,
        loading,
        toggleMain,
        toggleInbox,
        toggleTask,
        closeAll,
        detailChatRoom,
        getTotalDifferentUserInChatRoom,
      }}
    >
      {children}
    </QuickContext.Provider>
  );
};

QuickProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
