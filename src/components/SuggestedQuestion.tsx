
import { SuggestedQuestion as SuggestedQuestionType } from "@/types/types";

interface SuggestedQuestionProps {
  question: SuggestedQuestionType;
  onClick: (question: SuggestedQuestionType) => void;
}

const SuggestedQuestion = ({ question, onClick }: SuggestedQuestionProps) => {
  return (
    <button
      className="text-left p-3 bg-white hover:bg-secondary rounded-lg border border-gray-200 text-gray-700 text-sm transition-colors w-full"
      onClick={() => onClick(question)}
    >
      {question.text}
    </button>
  );
};

export default SuggestedQuestion;
