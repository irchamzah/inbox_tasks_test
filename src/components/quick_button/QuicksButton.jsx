import MainQuick from "./MainQuick";
import InboxQuick from "./InboxQuick";
import TaskQuick from "./TaskQuick";
import InboxDimension from "../inbox_components/InboxDimension";
import TaskDimension from "../task_components/TaskDimension";
import { useContext } from "react";
import { QuickContext } from "../../contexts/QuickContext";

export default function QuicksButton() {
  const { isMainShow, isMainOpen, isInboxOpen, isTaskOpen } =
    useContext(QuickContext);

  return (
    <>
      {isInboxOpen && <InboxDimension />}

      {isTaskOpen && <TaskDimension />}

      <div className="absolute flex flex-row-reverse gap-6 bottom-0 right-0 m-10">
        {isMainShow && <MainQuick />}
        {isMainOpen && <InboxQuick />}
        {isMainOpen && <TaskQuick />}
      </div>
    </>
  );
}
