import { ScrollText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-16 bg-gray-100 w-full rounded-b-md shadow-sm">
      <div className="p-4 text-lg font-bold flex items-center">
        Portofolio App <ScrollText className="w-5 h-5 ml-2 text-[#10A4B0]" />
      </div>
    </footer>
  );
};
export default Footer;
