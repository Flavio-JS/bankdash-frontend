"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AmountInput } from "@/features/dashboard/components/QuickTransfer/AmountInput";
import { faker } from "@faker-js/faker";
import { Search } from "lucide-react";
import { useState } from "react";

const avatarData = [
  {
    name: faker.person.firstName("male"),
    surname: "CEO",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: faker.person.firstName("male"),
    surname: "Director",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: faker.person.firstName("male"),
    surname: "Designer",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: faker.person.firstName("male"),
    surname: "CEO",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: faker.person.firstName("male"),
    surname: "Director",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: faker.person.firstName("male"),
    surname: "Designer",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
];

export const QuickTransfer = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredAvatars, setFilteredAvatars] = useState(
    avatarData.slice(0, 3)
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFilterSubmit = () => {
    const filtered = avatarData
      .filter(
        (data) =>
          data.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          data.surname.toLowerCase().includes(inputValue.toLowerCase())
      )
      .slice(0, 3);
    setFilteredAvatars(filtered);
  };

  return (
    <div className="flex flex-col items-start gap-5">
      <h2 className="text-2xl font-semibold text-[#343C6A]">QuickTransfer</h2>
      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6">
        <div className="flex items-center justify-between gap-4">
          {filteredAvatars.length > 0 ? (
            filteredAvatars.map((data) => (
              <div key={data.name} className="flex flex-col items-center gap-3">
                <Avatar className="h-9 w-9 lg:h-16 lg:w-16">
                  <AvatarImage src={data.image} alt="avatar image" />
                  <AvatarFallback>FJ</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center">
                  <span className="max-w-[77px] truncate text-center text-xs">
                    {data.name}
                  </span>
                  <span className="text-xs text-[#718EBF]">{data.surname}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex w-full items-center justify-center">
              <span>Not Found</span>
            </div>
          )}

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
                    type="text"
                    placeholder="Name"
                    value={inputValue}
                    onChange={handleFilterChange}
                  />
                  <PopoverCloseTrigger aria-label="Close">
                    <button type="button" onClick={handleFilterSubmit}>
                      <Search />
                    </button>
                  </PopoverCloseTrigger>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <AmountInput />
      </div>
    </div>
  );
};
