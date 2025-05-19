
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
      <Avatar name={customer.name} className="flex-shrink-0" size="sm" />
      
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-center flex-wrap">
          <span className={cn("font-semibold text-xs sm:text-sm", { "text-primary": unread })}>
            {customer.name}
            {customer.company && (
              <span className="text-gray-500 font-normal ml-1 hidden sm:inline">
                · {customer.company}
              </span>
            )}
          </span>
          <span className="text-xs text-gray-500 ml-auto">{lastMessageTime}</span>
        </div>
        <p className={cn("text-xs sm:text-sm truncate text-gray-600", { "font-semibold": unread })}>
          {truncateText(lastMessage, 40)}
        </p>
      </div>
      
      <div className="flex flex-col items-end gap-1 ml-1">
        {unread && (
          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
        )}
        
        {priority === "high" && (
          <div className="px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs">
            3min
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxItem;
