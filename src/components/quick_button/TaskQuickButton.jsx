import PropTypes from "prop-types";

const TaskQuickButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`relative z-10 cursor-pointer hover:opacity-90 active:opacity-80 rounded-full h-[60px] w-[60px] flex items-center justify-center ${
        isOpen ? "bg-indicator-orange" : "bg-white"
      }`}
    >
      <svg
        className="h-7 w-7"
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.92984 4.40063H26.5614C27.9445 4.40063 29.076 5.53221 29.076 6.91526V23.2603C29.076 24.6433 27.9445 25.7749 26.5614 25.7749H3.92984C2.5468 25.7749 1.41522 24.6433 1.41522 23.2603V6.91526C1.41522 5.53221 2.5468 4.40063 3.92984 4.40063ZM3.9298 6.91528V23.2603H13.9883V6.91528H3.9298ZM26.5614 23.2603H16.5029V6.91528H26.5614V23.2603ZM25.3042 11.3158H17.7603V13.2018H25.3042V11.3158ZM17.7603 14.4591H25.3042V16.3451H17.7603V14.4591ZM25.3042 17.6024H17.7603V19.4883H25.3042V17.6024Z"
          fill={`${isOpen ? "#fff" : "#F8B76B"}`}
        />
      </svg>
    </button>
  );
};

TaskQuickButton.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default TaskQuickButton;
