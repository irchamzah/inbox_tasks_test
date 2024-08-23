import { useContext } from "react";
import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import { QuickContext } from "../../contexts/QuickContext";
import { InboxContext } from "../../contexts/InboxContext";

export default function GroupChatHeader() {
  const { toggleInbox, detailChatRoom, getTotalDifferentUserInChatRoom } =
    useContext(QuickContext);
  const { backDetailChat, roomId } = useContext(InboxContext);

  const chatRoom = detailChatRoom(roomId);
  const participants = getTotalDifferentUserInChatRoom(roomId);

  return (
    <div className="flex items-center w-full py-6 pr-2">
      <button
        className="flex  mr-6 cursor-pointer hover:opacity-90 active:opacity-100"
        onClick={backDetailChat}
      >
        <ArrowLeftIcon />
      </button>
      <div className="w-full">
        <p className="text-primary-blue font-bold text-[16px] capitalize">
          {chatRoom.isGroupChat === 1
            ? chatRoom.title
            : chatRoom.messages.slice(-1)[0].name}
        </p>
        {chatRoom.isGroupChat === 1 ? (
          <p className="text-primary-gray-dark text-[14px]">
            {participants} Participants
          </p>
        ) : (
          ""
        )}
      </div>
      <button
        className="flex ml-6 h-[18px] cursor-pointer hover:opacity-90 active:opacity-100"
        onClick={toggleInbox}
      >
        <CloseIcon />
      </button>
    </div>
  );
}
