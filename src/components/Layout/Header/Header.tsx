import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex flex-col p-6 gap-5">
      <div className="flex w-full justify-between items-center">
        <Menu />
        <h1>Overview</h1>
        <Avatar>
          <AvatarImage
            src="https://github.com/Marcelol090.png"
            alt="@Marcelol090"
          />
          <AvatarFallback>M0</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <Input type="text" placeholder="Search for something" />
      </div>
    </div>
  );
};
