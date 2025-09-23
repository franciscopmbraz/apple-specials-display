import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-brand-red text-white px-4 py-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold">TechStore</h1>
        
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search iPhone 17..."
            className="pl-10 bg-white text-gray-900 border-0 focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;