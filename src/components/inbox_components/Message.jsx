import MoreIcon from "../../assets/icons/MoreIcon";
import PropTypes from "prop-types";

export default function Message({
  textColor,
  chatColor,
  position,
  sender,
  message,
  time,
}) {
  return (
    <div
      className={`max-w-[550px] min-w-[50%] ${
        position === "left" ? "mr-auto" : "ml-auto"
      }`}
    >
      <p
        className={`${
          position === "left" ? "text-left" : "text-right"
        }  font-bold my-1 capitalize`}
        style={{ color: `${textColor}` }}
      >
        {position === "left" ? sender : "You"}
      </p>
      <div className={`flex ${position === "right" && "flex-row-reverse"} `}>
        <div
          className={`text-primary-gray-dark px-3 py-2 rounded flex flex-col`}
          style={{ backgroundColor: `${chatColor}` }}
        >
          <p className="leading-5">{message}</p>
          <p className="text-[14px] mt-2">{time}</p>
        </div>
        <div
          className={`cursor-pointer h-min hover:opacity-90 active:opacity-100 ${
            position === "right" ? "mr-auto pr-2" : "ml-auto pl-2 -mr-[10px]"
          } `}
        >
          <MoreIcon />
        </div>
      </div>
    </div>
  );
}

Message.propTypes = {
  textColor: PropTypes.string.isRequired,
  chatColor: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  sender: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
