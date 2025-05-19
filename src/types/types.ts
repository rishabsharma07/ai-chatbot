
export interface Message {
  id: string;
  sender: 'user' | 'agent' | 'ai';
  content: string;
  timestamp: string;
  seen?: boolean;
}

export interface Conversation {
  id: string;
  customer: {
    name: string;
    avatar?: string;
    company?: string;
    email?: string;
  };
  lastMessage?: string;
  lastMessageTime: string;
  unread: boolean;
  priority?: 'low' | 'medium' | 'high';
  messages: Message[];
}

export interface SuggestedQuestion {
  id: string;
  text: string;
}
