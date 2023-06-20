import { TbDirection } from "react-icons/tb";
const MessageNotification = () => {
  return (
    <div className="flex gap-2 items-center text-[11px]">
      <TbDirection className="text-lg text-gray-500" />
      <div className="flex-1">
        <p className="text-gray-400 text-sm">Username</p>
        <p className="text-slate-300">
          <span>Guest: </span>full name
        </p>
      </div>
      <p className="text-slate-500">3:20 pm</p>
    </div>
  );
};

export default MessageNotification;
