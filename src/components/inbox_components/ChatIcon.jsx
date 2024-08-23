import PropTypes from "prop-types";
export default function ChatIcon({ firstWord }) {
  return (
    <div className="flex">
      <div className="bg-primary-blue h-[45px] w-[45px] rounded-full flex items-center justify-center text-white font-bold text-xl">
        {firstWord}
      </div>
    </div>
  );
}

ChatIcon.propTypes = {
  firstWord: PropTypes.string.isRequired,
};
