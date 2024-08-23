import GroupChatHeader from "./GroupChatHeader";
import HorizontalLine from "./HorizontalLine";
import MessageContainer from "./MessageContainer";
import TypeMessage from "./TypeMessage";

export default function GroupChat() {
  return (
    <div className="absolute inset-0 flex bg-white rounded ">
      <div className="h-[737px] w-[737px] flex flex-col pl-8 pr-6">
        <GroupChatHeader />
        <HorizontalLine
          className={"bg-primary-gray-light h-[2px]  mb-6 -mx-8"}
        />
        <MessageContainer />
        <TypeMessage />
      </div>
    </div>
  );
}
