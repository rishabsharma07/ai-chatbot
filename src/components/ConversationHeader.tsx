
import { Conversation } from "@/types/types";

interface ConversationHeaderProps {
  conversation: Conversation;
  onClose: () => void;
}

const ConversationHeader = ({ conversation, onClose }: ConversationHeaderProps) => {
  return (
    <div className="flex justify-between items-center border-b p-4 bg-white">
      <h2 className="font-semibold">{conversation.customer.name}</h2>
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ConversationHeader;
