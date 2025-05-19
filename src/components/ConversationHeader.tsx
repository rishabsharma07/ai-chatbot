
import { Conversation } from "@/types/types";
import { Menu, Maximize } from "lucide-react";

interface ConversationHeaderProps {
  conversation: Conversation;
  onClose: () => void;
  onTogglePanel?: () => void;
  isMobileView?: boolean;
}

const ConversationHeader = ({ 
  conversation, 
  onClose, 
  onTogglePanel,
  isMobileView 
}: ConversationHeaderProps) => {
  return (
    <div className="flex justify-between items-center border-b p-4 bg-white">
      <div className="flex items-center gap-2">
        {isMobileView && (
          <button
            className="mr-2 p-1 rounded-md hover:bg-gray-100"
            onClick={onClose}
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        )}
        <h2 className="font-semibold">{conversation.customer.name}</h2>
        {conversation.customer.company && (
          <span className="text-sm text-gray-500">
            · {conversation.customer.company}
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {isMobileView && onTogglePanel && (
          <button
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={onTogglePanel}
          >
            <Maximize className="w-5 h-5 text-gray-600" />
          </button>
        )}
        
        {!isMobileView && (
          <button
            className="px-3 py-1 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default ConversationHeader;
