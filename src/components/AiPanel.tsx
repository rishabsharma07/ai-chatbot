
import { useState, useEffect } from 'react';
import Avatar from './Avatar';
import SuggestedQuestion from './SuggestedQuestion';
import { SuggestedQuestion as SuggestedQuestionType } from '@/types/types';
import { finAiResponse, relevantSources, suggestedQuestions } from '@/utils/dummyData';

interface AiPanelProps {
  conversationId: string;
  onAskQuestion: (question: string) => void;
}

const AiPanel = ({ conversationId, onAskQuestion }: AiPanelProps) => {
  const [showFullResponse, setShowFullResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  
  // Simulate typing effect when showing full response
  useEffect(() => {
    if (showFullResponse && displayedText.length < finAiResponse.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setDisplayedText(finAiResponse.substring(0, displayedText.length + 5));
      }, 10);
      return () => clearTimeout(timeout);
    } else if (showFullResponse && displayedText.length >= finAiResponse.length) {
      setIsTyping(false);
    }
  }, [showFullResponse, displayedText]);

  const handleQuestionClick = (question: SuggestedQuestionType) => {
    onAskQuestion(question.text);
  };

  return (
    <div className="bg-white flex flex-col h-full overflow-hidden">
      <div className="border-b p-3 md:p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar name="Fin AI" size="sm" />
          <span className="font-semibold text-sm md:text-base">AI Copilot</span>
        </div>
      </div>
      
      <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-3 md:space-y-4">
        {!showFullResponse ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
            <Avatar name="Fin AI" size="lg" />
            <h3 className="font-semibold text-base md:text-lg">Hi, I'm Fin AI Copilot</h3>
            <p className="text-gray-500 text-xs md:text-sm">Ask me anything about this conversation.</p>
          </div>
        ) : (
          <>
            <div className="flex items-start gap-2 md:gap-3">
              <Avatar name="Fin AI" className="mt-1" size="sm" />
              <div className="p-3 md:p-4 bg-accent rounded-2xl max-w-[90%]">
                <p className="whitespace-pre-wrap text-sm md:text-base">{displayedText}</p>
                {isTyping && <span className="animate-pulse">▌</span>}
              </div>
            </div>
            
            <div className="pt-3 md:pt-4">
              <h4 className="text-xs md:text-sm text-gray-500 mb-2">15 relevant sources found</h4>
              <div className="space-y-2 flex flex-wrap gap-1">
                {relevantSources.slice(0, 3).map((source, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-xs md:text-sm py-1 px-2 bg-accent rounded-md">{source}</span>
                  </div>
                ))}
                <button className="text-xs md:text-sm text-primary hover:underline">See all →</button>
              </div>
            </div>
          </>
        )}
      </div>
      
      {!showFullResponse && (
        <div className="p-3 md:p-4 border-t">
          <h4 className="text-xs md:text-sm text-gray-500 mb-2">Suggested</h4>
          <div className="space-y-2">
            {suggestedQuestions.map((question) => (
              <SuggestedQuestion
                key={question.id}
                question={question}
                onClick={() => {
                  setShowFullResponse(true);
                  handleQuestionClick(question);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiPanel;
