import PropTypes from "prop-types";

export default function Loading({ children }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="">
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin"
            width="86"
            height="86"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.8009 60.5045L67.6057 24.9025L67.6796 25.0058C67.6551 24.9713 67.6306 24.9369 67.606 24.9025C57.7747 11.1492 38.6557 7.96983 24.9024 17.8011C11.1492 27.6323 7.96978 46.7513 17.8009 60.5045Z"
              fill="#C4C4C4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M67.6058 24.9025L17.8009 60.5047L17.7771 60.4715C17.785 60.4826 17.7929 60.4936 17.8008 60.5047C27.6321 74.2579 46.7511 77.4373 60.5044 67.6061C74.2577 57.7748 77.4371 38.6557 67.6058 24.9025Z"
              fill="#F8F8F8"
            />
            <path
              d="M26.3985 59.0807C26.3985 61.4391 24.4866 63.351 22.1282 63.351C19.7697 63.351 17.8578 61.4391 17.8578 59.0807C17.8578 56.7222 19.7697 54.8103 22.1282 54.8103C24.4866 54.8103 26.3985 56.7222 26.3985 59.0807Z"
              fill="#C4C4C4"
            />
            <path
              d="M68.3256 27.2472C68.3256 29.6056 66.4137 31.5175 64.0553 31.5175C61.6968 31.5175 59.7849 29.6056 59.7849 27.2472C59.7849 24.8887 61.6968 22.9768 64.0553 22.9768C66.4137 22.9768 68.3256 24.8887 68.3256 27.2472Z"
              fill="#C4C4C4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.1859 55.9403C31.4963 66.1671 45.7131 68.5313 55.9399 61.2208C66.1666 53.9104 68.5308 39.6937 61.2204 29.4669C53.9099 19.2401 39.6932 16.8759 29.4664 24.1864C19.2396 31.4968 16.8755 45.7135 24.1859 55.9403Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="mt-2 text-primary-gray-dark text-center font-bold">
          {children}
        </p>
      </div>
    </div>
  );
}

Loading.propTypes = {
  children: PropTypes.node.isRequired,
};
