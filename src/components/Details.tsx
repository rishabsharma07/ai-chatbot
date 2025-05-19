
import { Conversation } from "@/types/types";
import { ChevronDown } from "lucide-react";
import Avatar from "./Avatar";

interface DetailsProps {
  conversation: Conversation;
}

const Details = ({ conversation }: DetailsProps) => {
  return (
    <div className="bg-white h-full overflow-y-auto">
      <div className="border-b p-4 flex justify-between items-center">
        <span className="font-semibold">Details</span>
      </div>
      
      <div className="p-4">
        <div className="sidebar-section">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-500">Assignee</span>
          </div>
          <div className="flex items-center gap-2">
            <Avatar name="Brian Byrne" size="sm" />
            <span>Brian Byrne</span>
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-500">Team</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Unassigned</span>
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="flex items-center justify-between">
            <span className="font-semibold">LINKS</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
              <span>Tracker ticket</span>
              <button className="p-1 hover:bg-gray-100 rounded">+</button>
            </div>
            <div className="flex items-center justify-between">
              <span>Back-office tickets</span>
              <button className="p-1 hover:bg-gray-100 rounded">+</button>
            </div>
            <div className="flex items-center justify-between">
              <span>Side conversations</span>
              <button className="p-1 hover:bg-gray-100 rounded">+</button>
            </div>
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="flex items-center justify-between">
            <span className="font-semibold">USER DATA</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="flex items-center justify-between">
            <span className="font-semibold">CONVERSATION ATTRIBUTES</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="flex items-center justify-between">
            <span className="font-semibold">COMPANY DETAILS</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="flex items-center justify-between">
            <span className="font-semibold">SALESFORCE</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        
        <div className="sidebar-section">
          <div className="flex items-center justify-between">
            <span className="font-semibold">STRIPE</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
