import { InputIcon } from "@/components/InputIcon/InputIcon";
import { SideBar } from "@/components/Sheet/Sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <div className="flex flex-col gap-5 p-6">
      <div className="flex w-full items-center justify-between">
        <SideBar />
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
