"use client";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chartTooltip";
import { Area, CartesianGrid, ComposedChart, XAxis, YAxis } from "recharts";

const formatTooltipValue = (value: number) => {
  return `${value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })}`;
};

const chartConfig = {
  Balance: {
    label: "Balance",
    color: "#1814F3",
    formatTooltipValue,
  },
} satisfies ChartConfig;

const chartData = [
  {
    label: "Feb",
    Balance: 120,
  },
  {
    label: "Mar",
    Balance: 350,
  },
  {
    label: "Apr",
    Balance: 200,
  },
  {
    label: "May",
    Balance: 470,
  },
  {
    label: "Jun",
    Balance: 400,
  },
  {
    label: "Jul",
    Balance: 760,
  },
  {
    label: "Aug",
    Balance: 200,
  },
  {
    label: "Sep",
    Balance: 560,
  },
  {
    label: "Oct",
    Balance: 200,
  },
  {
    label: "Nov",
    Balance: 610,
  },
  {
    label: "Dec",
    Balance: 500,
  },
];

export const BalanceHistoryChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-full min-h-[200px] w-full"
    >
      <ComposedChart accessibilityLayer data={chartData}>
        <defs>
          <linearGradient id="BalanceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1814F3" />
            <stop offset="100%" stopColor="#2d61ff3c" />
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
        <Area
          type="monotone"
          dataKey="Balance"
          stroke="#1814F3"
          strokeWidth={2}
          fill="url(#BalanceGradient)"
          yAxisId="yL"
        />
      </ComposedChart>
    </ChartContainer>
  );
};
