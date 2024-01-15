import { Button } from "@/components/ui/button";

import { ScrollText } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-gray-100 w-full rounded-t-md shadow-sm flex justify-between items-center">
      <div className="p-4 text-lg font-bold flex items-center">
        Portofolio App <ScrollText className="w-5 h-5 ml-2 text-[#10A4B0]" />
      </div>
      <Button variant="link" className="font-semibold text-[#10A4B0]">
        <a href="http://localhost:3000/web" target="__blank">
          View Portofolio
        </a>
      </Button>
    </nav>
  );
};
export default Navbar;
