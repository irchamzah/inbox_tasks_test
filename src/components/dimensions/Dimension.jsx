import PropTypes from "prop-types";
export default function Dimension({ children }) {
  return (
    <>
      <div className="h-[737px] w-[737px] bg-white rounded px-8 py-6 flex flex-col">
        {children}
      </div>
    </>
  );
}

Dimension.propTypes = {
  children: PropTypes.node.isRequired,
};
