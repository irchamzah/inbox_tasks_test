import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const QuickContext = createContext();

export const QuickProvider = ({ children }) => {
  return <QuickContext.Provider value={{}}>{children}</QuickContext.Provider>;
};

QuickProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
