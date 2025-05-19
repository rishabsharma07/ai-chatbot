
interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  onClose?: () => void;
}

const Tabs = ({ tabs, activeTab, onTabChange, onClose }: TabsProps) => {
  return (
    <div className="flex border-b">
      <div className="flex-1 flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-3 font-medium text-sm transition-colors relative ${
              activeTab === tab
                ? "text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
        ))}
      </div>
      
      {onClose && (
        <button 
          className="px-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={onClose}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Tabs;
