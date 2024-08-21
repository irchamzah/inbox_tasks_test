import PropTypes from "prop-types";

const CloseQuickButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bg-primary-gray-dark h-[60px] w-[60px] rounded-full left-[-13px] z-0 hover:opacity-90"
    ></button>
  );
};

CloseQuickButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseQuickButton;
