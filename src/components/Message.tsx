
import { Message as MessageType } from "@/types/types";
import { cn } from "@/lib/utils";
import Avatar from "./Avatar";

interface MessageProps {
  message: MessageType;
  sender: {
    name: string;
  };
}

const Message = ({ message, sender }: MessageProps) => {
  const isUserMessage = message.sender === "user";
  const isAiMessage = message.sender === "ai";

  return (
    <div
      className={cn("flex items-start gap-3 py-2", {
        "justify-start": isUserMessage,
        "justify-end": !isUserMessage,
        "animate-slide-in": true,
      })}
    >
      {isUserMessage && <Avatar name={sender.name} className="mt-1" />}
      
      <div
        className={cn({
          "user-message": isUserMessage,
          "agent-message": !isUserMessage && !isAiMessage,
          "ai-message": isAiMessage,
        })}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        <div className={cn(
          "text-xs mt-1", 
          isUserMessage ? "text-left" : "text-right",
          "text-gray-500"
        )}>
          {message.seen && !isUserMessage ? `Seen · ${message.timestamp}` : message.timestamp}
        </div>
      </div>
      
      {!isUserMessage && <Avatar name={isAiMessage ? "Fin AI" : "Agent"} className="mt-1" />}
    </div>
  );
};

export default Message;
