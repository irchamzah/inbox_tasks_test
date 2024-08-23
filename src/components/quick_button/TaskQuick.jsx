import CloseQuickButton from "./CloseQuickButton";
import TaskQuickButton from "./TaskQuickButton";
import { QuickContext } from "../../contexts/QuickContext";
import { useContext } from "react";

export default function TaskQuick() {
  const { isTaskOpen, isInboxOpen, isCloseShow, closeAll, toggleTask } =
    useContext(QuickContext);

  return (
    <div
      className={`relative inline-block ${isTaskOpen ? "order-1" : "order-2"}`}
    >
      <p
        className={`text-primary-gray-light text-center mb-2 capitalize ${
          (isTaskOpen || isInboxOpen) && "opacity-0"
        }`}
      >
        Task
      </p>
      {isCloseShow && isTaskOpen && <CloseQuickButton onClick={closeAll} />}

      <TaskQuickButton onClick={toggleTask} isOpen={isTaskOpen} />
    </div>
  );
}
