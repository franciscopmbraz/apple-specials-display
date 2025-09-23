import { useState } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "iphones", label: "iPhone 17" },
    { id: "accessories", label: "Related Products" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <nav className="border-b border-gray-200 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 overflow-x-auto">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              className={`rounded-none border-b-2 px-6 py-3 ${
                activeTab === tab.id
                  ? "border-brand-red bg-brand-red text-white"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;