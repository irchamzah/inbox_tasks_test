import PropTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-primary-blue text-white px-4 py-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
