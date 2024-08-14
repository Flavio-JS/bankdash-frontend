"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AmountInput } from "@/features/dashboard/components/QuickTransfer/AmountInput";
import { useState } from "react";

const avatarData = [
  {
    name: "Pedro",
    surname: "CEO",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: "Dewey",
    surname: "Director",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: "Roosevelt",
    surname: "Designer",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: "Douglas",
    surname: "CEO",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: "Harry",
    surname: "Director",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
  {
    name: "Darrell",
    surname: "Designer",
    image: "https://avatars.githubusercontent.com/u/106037619?v=4",
  },
];

export const QuickTransfer = () => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleAvatarClick = (name: string) => {
    setSelectedName(name);
  };

  return (
    <div className="flex flex-col items-start gap-5">
      <h2 className="text-2xl font-semibold text-[#343C6A]">QuickTransfer</h2>
      <div className="flex flex-col gap-6 rounded-3xl bg-white p-6">
        <div className="flex w-full justify-center">
          <div className="w-[70%]">
            <Carousel
              opts={{
                align: "start",
              }}
              className=""
            >
              <CarouselContent>
                {avatarData.map((data) => (
                  <CarouselItem key={data.name} className="basis-1/3">
                    <div
                      key={data.name}
                      className="flex cursor-pointer flex-col items-center gap-3"
                      onClick={() => handleAvatarClick(data.name)}
                    >
                      <Avatar className="h-9 w-9 lg:h-16 lg:w-16">
                        <AvatarImage src={data.image} alt="avatar image" />
                        <AvatarFallback>FJ</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-center">
                        <span
                          className={`max-w-[77px] truncate text-center text-xs ${selectedName === data.name ? "underline" : ""}`}
                        >
                          {data.name}
                        </span>
                        <span
                          className={`text-xs text-[#718EBF] ${selectedName === data.name ? "underline" : ""}`}
                        >
                          {data.surname}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <AmountInput />
      </div>
    </div>
  );
};
