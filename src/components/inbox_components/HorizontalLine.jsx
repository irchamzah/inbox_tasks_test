import PropTypes from "prop-types";
export default function HorizontalLine({ className }) {
  return (
    <div className={`flex h-[1px] ${className}`}>
      <br />
    </div>
  );
}
HorizontalLine.propTypes = {
  className: PropTypes.string,
};
