import HorizontalLine from "./HorizontalLine";
import PropTypes from "prop-types";

export default function MessageDateGap({ date, textColor, lineColor }) {
  return (
    <div
      id="sticky-element"
      className={`flex items-center py-6 ${textColor}  ${
        date === "New Message" ? "sticky bottom-0" : ""
      }`}
    >
      <HorizontalLine className={lineColor} />
      <p className={`text-nowrap w-min mx-6 font-bold`}>{date}</p>
      <HorizontalLine className={lineColor} />
    </div>
  );
}

MessageDateGap.propTypes = {
  date: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  lineColor: PropTypes.string,
};
