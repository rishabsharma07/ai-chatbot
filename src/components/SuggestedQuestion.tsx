
import { SuggestedQuestion as SuggestedQuestionType } from "@/types/types";
import { ArrowRight } from "lucide-react";

interface SuggestedQuestionProps {
  question: SuggestedQuestionType;
  onClick: (question: SuggestedQuestionType) => void;
}

const SuggestedQuestion = ({ question, onClick }: SuggestedQuestionProps) => {
  return (
    <button
      className="text-left p-3 md:p-4 bg-white hover:bg-secondary/80 rounded-xl border border-gray-100 shadow-sm text-gray-700 text-xs md:text-sm transition-all duration-200 w-full flex justify-between items-center group hover:border-primary/20 hover:shadow-md"
      onClick={() => onClick(question)}
    >
      <span className="line-clamp-1 mr-2">{question.text}</span>
      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
    </button>
  );
};

export default SuggestedQuestion;
