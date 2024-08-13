import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Icons } from "@/features/dashboard/components/Icons/Icons";
import { Search } from "lucide-react";

const avatarData = [
  {
    name: "Jemi Wilson1",
    surname: "CEO",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: "Jemi Wilson2",
    surname: "Director",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: "Jemi Wilson3",
    surname: "Designer",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
];

export const QuickTransfer = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <h2 className="text-2xl font-semibold text-[#343C6A]">QuickTransfer</h2>
      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6">
        <div className="flex items-center justify-center gap-4">
          {avatarData.map((data) => (
            <div key={data.name} className="flex flex-col items-center gap-3">
              <Avatar className="h-9 w-9 lg:h-16 lg:w-16">
                <AvatarImage src={data.image} alt="avatar image" />
                <AvatarFallback>FJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center">
                <span className="text-center text-xs">{data.name}</span>
                <span className="text-xs text-[#718EBF]">{data.surname}</span>
              </div>
            </div>
          ))}

          <Popover>
            <PopoverTrigger>
              <button className="rounded-full bg-white p-3 drop-shadow-2xl">
                <Search />
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-4">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    className="focus:border-[#1814F3] focus-visible:ring-transparent"
                    type="name"
                    placeholder="Name"
                  />
                  <button type="submit">
                    <Search />
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-between gap-5">
          <span className="text-[#718EBF]">Write Amount</span>
          <div className="flex w-max items-center justify-between gap-3 rounded-full bg-[#EDF1F7] pl-4">
            <input
              className="w-12 bg-transparent text-[#718EBF] focus-visible:outline-none"
              type="text"
              name="text"
              id="text"
              inputMode="numeric"
              pattern="[0-9]*"
            />
            <button className="flex items-center justify-center gap-2 rounded-full bg-[#1814F3] px-5 py-3 text-white">
              <span>Send</span>
              <Icons.SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
