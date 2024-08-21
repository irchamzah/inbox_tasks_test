import React from "react";
import MainQuickButton from "./MainQuickButton";

export default function MainQuick({ toggleMain }) {
  return (
    <div className="relative inline-block">
      <div className="text-primary-gray-light text-center mb-2 capitalize">
        <br />
      </div>
      <MainQuickButton onClick={toggleMain} />
    </div>
  );
}
