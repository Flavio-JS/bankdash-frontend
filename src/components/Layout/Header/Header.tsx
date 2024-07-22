import { InputIcon } from "@/components/InputIcon/InputIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";

export const Header = () => {
  const teste = "";

  return (
    <div className="flex flex-col gap-5 p-6">
      <div className="flex w-full items-center justify-between">
        <Menu />
        <h1 className="text-xl font-semibold">Overview</h1>
        <Avatar>
          <AvatarImage
            src="https://github.com/Marcelol090.png"
            alt="@Marcelol090"
          />
          <AvatarFallback>M0</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <InputIcon
          type="text"
          placeholder="Search for something"
          icon="Search"
          iconPosition="left"
        />
      </div>
    </div>
  );
};
