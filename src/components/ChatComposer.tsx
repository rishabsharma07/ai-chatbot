
import { useState } from "react";
import { Send, Paperclip } from "lucide-react";

interface ChatComposerProps {
  onSendMessage: (message: string) => void;
}

const ChatComposer = ({ onSendMessage }: ChatComposerProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="border-t bg-white p-3 md:p-4 sticky bottom-0">
      <div className="flex items-center gap-2 relative">
        <button
          type="button"
          className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Attach file"
        >
          <Paperclip className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-full py-1.5 md:py-2 px-3 md:px-4 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm md:text-base"
        />
        
        <button
          type="submit"
          disabled={!message.trim()}
          className={`p-1.5 md:p-2 rounded-full ${
            message.trim()
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-gray-200 text-gray-400"
          } transition-colors`}
          aria-label="Send message"
        >
          <Send className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </form>
  );
};

export default ChatComposer;
