
import { useState, useEffect } from "react";
import { Conversation, Message as MessageType } from "@/types/types";
import { conversations } from "@/utils/dummyData";
import InboxItem from "@/components/InboxItem";
import Message from "@/components/Message";
import ChatComposer from "@/components/ChatComposer";
import AiPanel from "@/components/AiPanel";
import Details from "@/components/Details";
import Tabs from "@/components/Tabs";
import ConversationHeader from "@/components/ConversationHeader";
import { useToast } from "@/hooks/use-toast";
import { Menu } from "lucide-react";

const Index = () => {
  const [allConversations, setAllConversations] = useState<Conversation[]>(conversations);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [rightPanel, setRightPanel] = useState<"ai" | "details">("ai");
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMobileInbox, setShowMobileInbox] = useState(true);
  const [showMobileRightPanel, setShowMobileRightPanel] = useState(false);
  const { toast } = useToast();

  // Set the default selected conversation
  useEffect(() => {
    if (allConversations.length > 0 && !selectedConversation) {
      setSelectedConversation(allConversations[0]);
    }
  }, [allConversations, selectedConversation]);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);
      if (!mobile && !showMobileInbox) {
        setShowMobileInbox(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showMobileInbox]);

  const handleSendMessage = (message: string) => {
    if (!selectedConversation) return;

    const newMessage: MessageType = {
      id: `msg-${Date.now()}`,
      sender: "agent",
      content: message,
      timestamp: "just now",
    };

    const updatedConversation = {
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessage],
    };

    setSelectedConversation(updatedConversation);
    setAllConversations(
      allConversations.map((conv) =>
        conv.id === selectedConversation.id ? updatedConversation : conv
      )
    );

    toast({
      title: "Message sent",
      description: "Your message has been sent successfully!",
    });
  };

  const handleConversationSelect = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    if (isMobileView) {
      setShowMobileInbox(false);
    }
  };

  const handleAskQuestion = (question: string) => {
    console.log("AI question asked:", question);
  };

  const handleBackToInbox = () => {
    setShowMobileInbox(true);
    setShowMobileRightPanel(false);
  };

  const toggleRightPanel = () => {
    setShowMobileRightPanel(!showMobileRightPanel);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* Inbox Sidebar */}
        {(!isMobileView || showMobileInbox) && (
          <div className={`${isMobileView ? 'w-full' : 'w-80'} border-r flex flex-col bg-white animate-fade-in`}>
            <div className="p-4 border-b">
              <h1 className="font-semibold text-lg">Your inbox</h1>
            </div>
            <div className="overflow-y-auto flex-1">
              {allConversations.map((conversation) => (
                <InboxItem
                  key={conversation.id}
                  conversation={conversation}
                  isActive={selectedConversation?.id === conversation.id}
                  onClick={() => handleConversationSelect(conversation)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Main Chat Area */}
        {(!isMobileView || !showMobileInbox) && selectedConversation && (
          <div className="flex-1 flex flex-col overflow-hidden animate-slide-in">
            <ConversationHeader 
              conversation={selectedConversation} 
              onClose={handleBackToInbox}
              onTogglePanel={toggleRightPanel}
              isMobileView={isMobileView}
            />
            
            <div className="flex-1 overflow-y-auto p-4 bg-secondary">
              {isMobileView && (
                <button
                  className="mb-4 text-sm text-primary flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/50 transition-colors"
                  onClick={handleBackToInbox}
                >
                  <Menu className="w-4 h-4" />
                  <span>All conversations</span>
                </button>
              )}
              
              {selectedConversation.messages.map((message) => (
                <Message
                  key={message.id}
                  message={message}
                  sender={selectedConversation.customer}
                />
              ))}
            </div>
            
            <ChatComposer onSendMessage={handleSendMessage} />
          </div>
        )}

        {/* Right Panel (AI or Details) - Desktop always visible, Mobile conditional */}
        {((!isMobileView) || (isMobileView && showMobileRightPanel)) && selectedConversation && (
          <div className={`${isMobileView ? 'fixed inset-0 z-50 animate-scale-in' : 'w-80 border-l'} flex flex-col bg-white`}>
            <Tabs
              tabs={["AI Copilot", "Details"]}
              activeTab={rightPanel === "ai" ? "AI Copilot" : "Details"}
              onTabChange={(tab) => setRightPanel(tab === "AI Copilot" ? "ai" : "details")}
              onClose={isMobileView ? () => setShowMobileRightPanel(false) : undefined}
            />
            
            <div className="flex-1 overflow-hidden">
              {rightPanel === "ai" ? (
                <AiPanel
                  conversationId={selectedConversation.id}
                  onAskQuestion={handleAskQuestion}
                />
              ) : (
                <Details conversation={selectedConversation} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
