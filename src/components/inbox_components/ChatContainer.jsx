import PropTypes from "prop-types";
import { useContext } from "react";
import GroupChat from "./GroupChat";
import { InboxContext } from "../../contexts/InboxContext";

export default function ChatContainer({
  roomId,
  icon,
  title,
  date,
  sender,
  message,
  isUnread,
}) {
  const { isShowChat, showDetailChat } = useContext(InboxContext);

  const handleClick = () => {
    showDetailChat(roomId);
  };

  return (
    <>
      {isShowChat && <GroupChat />}

      <div className="w-full flex">
        <div
          className="mr-4 flex items-center justify-center min-w-[70px] hover:opacity-90 cursor-pointer capitalize"
          onClick={handleClick}
        >
          {icon}
        </div>
        <div className=" w-full">
          <div className="flex">
            <p
              className="text-primary-blue font-bold text-[16px] flex-grow-1 mr-8 leading-5 hover:underline cursor-pointer capitalize"
              onClick={handleClick}
            >
              {title}
            </p>
            <span
              className="text-nowrap text-[14px] text-primary-gray-dark hover:underline cursor-pointer"
              onClick={handleClick}
            >
              {date}
            </span>
          </div>

          <div
            className="flex justify-between items-center hover:underline cursor-pointer"
            onClick={handleClick}
          >
            <div className="leading-4 mt-2 text-[14px] max-w-[500px]">
              {sender && (
                <p className="font-bold text-primary-gray-dark capitalize">
                  {sender} :
                </p>
              )}
              <p className="text-primary-gray-dark truncate">{message}</p>
            </div>
            {isUnread === 1 && (
              <div className="bg-indicator-red w-3 h-3 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

ChatContainer.propTypes = {
  roomId: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  sender: PropTypes.string,
  message: PropTypes.string.isRequired,
  isUnread: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};
