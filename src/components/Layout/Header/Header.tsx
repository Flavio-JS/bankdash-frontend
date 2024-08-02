import { InputIcon } from "@/components/InputIcon/InputIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellDot, Settings } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between gap-7 p-5">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-[#343C6A]">Overview</h1>
      </div>
      <div className="flex items-center gap-7">
        <InputIcon
          icon="Search"
          iconPosition="left"
          iconColor="#718EBF"
          placeholder="Search for something"
        />
        <div className="rounded-full bg-[#F5F7FA] p-3 hover:cursor-pointer">
          <Settings color="#718EBF" />
        </div>
        <div className="rounded-full bg-[#F5F7FA] p-3 hover:cursor-pointer">
          <BellDot color="#FE5C73" />
        </div>
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
