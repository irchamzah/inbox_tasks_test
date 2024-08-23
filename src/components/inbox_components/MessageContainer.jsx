import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { InboxContext } from "../../contexts/InboxContext";
import Loading from "../Loading";
import MessageDateGap from "./MessageDateGap";
import {
  formatDateToDayNameMonthDateYear,
  randomDate,
  formatDateToHoursMinutes,
  getUserChatColor,
  getUserTextColor,
} from "../../utils/utils";

export default function MessageContainer() {
  const [chats, setChats] = useState([]);
  const { roomId } = useContext(InboxContext);
  const [loading, setLoading] = useState(false);

  const loggedInUserId = 2; // Diubah ke userId yang sudah login nantinya

  const fetchMessages = async (roomId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${roomId}`
      );
      const data = await response.json();
      data.forEach((chat) => {
        chat.createdAt = randomDate();
        chat.position = chat.id === loggedInUserId ? "right" : "left";
      });
      setLoading(false);
      setChats(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    if (roomId) {
      fetchMessages(roomId);
    }
  }, [roomId]);

  return (
    <>
      {loading ? (
        <div className="flex-grow">
          <Loading>Loading Chats...</Loading>
        </div>
      ) : (
        <>
          <div className="overflow-y-auto flex w-full flex-grow">
            <div className=" flex flex-col flex-grow">
              {chats.map((chat, index) => {
                const userTextColor = getUserTextColor(chat.id);
                const userChatColor = getUserChatColor(chat.id);
                return (
                  <React.Fragment key={index}>
                    <Message
                      textColor={userTextColor}
                      chatColor={userChatColor}
                      position={chat.position}
                      sender={chat.name}
                      message={chat.body}
                      time={formatDateToHoursMinutes(chat.createdAt)}
                    />
                    {index !== chat.length - 1 && (
                      <MessageDateGap
                        date={formatDateToDayNameMonthDateYear(chat.createdAt)}
                        className="text-primary-gray-dark"
                        lineColor="bg-primary-gray-dark"
                      />
                    )}
                  </React.Fragment>
                );
              })}
              <Message
                textColor={"#9B51E0"}
                chatColor={"#EEDCFF"}
                position={"right"}
                sender="You"
                message="No Worries It will be completed ASAP. I've asked him yesterday."
                time="10:30"
              />
              <MessageDateGap
                date="Today June 09, 2021"
                className="text-primary-gray-dark"
                lineColor="bg-primary-gray-dark"
              />
              <Message
                textColor={"#E5A443"}
                chatColor={"#FCEED3"}
                position={"left"}
                sender="Marry Hilda"
                message="HelloObaidullah, I will be your case advisor for case #029290. I
                have assigned some homework for you to fill. Please keep up with
                the due dates. Should you have any questions, you can message me
                anytime. Thanks."
                time="11:30"
              />
              <Message
                textColor={"#9B51E0"}
                chatColor={"#EEDCFF"}
                position={"right"}
                sender="You"
                message="Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary."
                time="10:30"
              />
              <Message
                textColor={"#E5A443"}
                chatColor={"#FCEED3"}
                position={"left"}
                sender="Marry Hilda"
                message="Sure thing. Claren"
                time="11:30"
              />
              <MessageDateGap
                date="New Message"
                textColor="text-indicator-red"
                lineColor="bg-indicator-red"
              />
              <Message
                textColor={"#43B78D"}
                chatColor={"#D2F2EA"}
                position={"left"}
                sender="Obaidullah Amarkhil"
                message="Morning. I'll try do them. Thanks"
                time="11:30"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
