
import { SuggestedQuestion as SuggestedQuestionType } from "@/types/types";
import { ArrowRight } from "lucide-react";

interface SuggestedQuestionProps {
  question: SuggestedQuestionType;
  onClick: (question: SuggestedQuestionType) => void;
}

const SuggestedQuestion = ({ question, onClick }: SuggestedQuestionProps) => {
  return (
    <button
      className="text-left p-4 bg-white hover:bg-secondary/80 rounded-xl border border-gray-100 shadow-sm text-gray-700 text-sm transition-all duration-200 w-full flex justify-between items-center group hover:border-primary/20 hover:shadow-md"
      onClick={() => onClick(question)}
    >
      <span className="line-clamp-1">{question.text}</span>
      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
    </button>
  );
};

export default SuggestedQuestion;
