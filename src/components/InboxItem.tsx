
import { cn } from "@/lib/utils";
import { Conversation } from "@/types/types";
import Avatar from "./Avatar";

interface InboxItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

const InboxItem = ({ conversation, isActive, onClick }: InboxItemProps) => {
  const { customer, lastMessage, lastMessageTime, unread, priority } = conversation;

  const truncateText = (text?: string, maxLength: number = 50) => {
    if (!text) return "";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <div
      className={cn("inbox-item", {
        active: isActive,
      })}
      onClick={onClick}
    >
      <Avatar name={customer.name} className="flex-shrink-0" />
      
      <div className="ml-3 flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <span className={cn("font-semibold text-sm", { "text-primary": unread })}>
            {customer.name}
            {customer.company && (
              <span className="text-gray-500 font-normal ml-1">
                · {customer.company}
              </span>
            )}
          </span>
          <span className="text-xs text-gray-500">{lastMessageTime}</span>
        </div>
        <p className={cn("text-sm truncate text-gray-600", { "font-semibold": unread })}>
          {truncateText(lastMessage)}
        </p>
      </div>
      
      {unread && (
        <div className="ml-2 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
      )}
      
      {priority === "high" && (
        <div className="ml-2 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs">
          3min
        </div>
      )}
    </div>
  );
};

export default InboxItem;
