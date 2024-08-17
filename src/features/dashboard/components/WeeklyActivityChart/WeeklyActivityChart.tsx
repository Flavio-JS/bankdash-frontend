"use client";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chartTooltip";
import { useWindowWidth } from "@/utils/useWindowWidth";
import { Bar, CartesianGrid, ComposedChart, XAxis, YAxis } from "recharts";

const formatTooltipValue = (value: number) => {
  return `${value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })}`;
};

const chartConfig = {
  Withdraw: {
    label: "Withdraw",
    color: "#1814F3",
    formatTooltipValue,
  },
  Diposit: {
    label: "Diposit",
    color: "#16DBCC",
    formatTooltipValue,
  },
} satisfies ChartConfig;

const chartData = [
  {
    label: "Sat",
    Withdraw: 480,
    Diposit: 220,
  },
  {
    label: "Sun",
    Withdraw: 350,
    Diposit: 120,
  },
  {
    label: "Mon",
    Withdraw: 330,
    Diposit: 280,
  },
  {
    label: "Tue",
    Withdraw: 470,
    Diposit: 370,
  },
  {
    label: "Wed",
    Withdraw: 150,
    Diposit: 230,
  },
  {
    label: "Thu",
    Withdraw: 390,
    Diposit: 230,
  },
  {
    label: "Fri",
    Withdraw: 400,
    Diposit: 340,
  },
];

export const WeeklyActivityChart = () => {
  const width = useWindowWidth();
  return (
    <ChartContainer
      config={chartConfig}
      className="h-full min-h-[200px] w-full"
    >
      <ComposedChart accessibilityLayer data={chartData}>
        <defs>
          <linearGradient id="WithdrawGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1814F3" />
            <stop offset="100%" stopColor="#100e93" />
          </linearGradient>
          <linearGradient id="DipositGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16DBCC" />
            <stop offset="100%" stopColor="#0b756c" />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="label"
          axisLine={{ stroke: "#DADADA" }}
          tickMargin={10}
        />
        <YAxis
          tickLine={false}
          axisLine={{ stroke: "#DADADA" }}
          yAxisId="yL"
          orientation="left"
          tickFormatter={(value) => {
            return `${value}`;
          }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          yAxisId="yL"
          dataKey="Withdraw"
          fill="url(#WithdrawGradient)"
          radius={30}
          barSize={width >= 1024 ? 15 : 7.5}
        />
        <Bar
          yAxisId="yL"
          dataKey="Diposit"
          fill="url(#DipositGradient)"
          radius={30}
          barSize={width >= 1024 ? 15 : 7.5}
        />
      </ComposedChart>
    </ChartContainer>
  );
};
