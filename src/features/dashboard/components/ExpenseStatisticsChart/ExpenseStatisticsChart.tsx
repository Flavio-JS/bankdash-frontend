"use client";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chartTooltip";
import { useWindowWidth } from "@/utils/useWindowWidth";
import { useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="14px"
      fontWeight="bold"
    >
      <tspan x={x} dy="-0.6em">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy="1.2em">
        {name}
      </tspan>
    </text>
  );
};

const formatTooltipValue = (value: number) => {
  return `${value.toFixed(2)}%`;
};

const chartConfig = {
  data1: {
    label: "Entertainment",
    color: "#343C6A",
    formatTooltipValue,
  },
  data2: {
    label: "Bill Expense",
    color: "#FC7900",
    formatTooltipValue,
  },
  data3: {
    label: "Others",
    color: "#1814F3",
    formatTooltipValue,
  },
  data4: {
    label: "Investment",
    color: "#FA00FF",
    formatTooltipValue,
  },
} satisfies ChartConfig;

const chartData = [
  {
    name: "Entertainment",
    value: 30,
  },
  {
    name: "Bill Expense",
    value: 15,
  },
  {
    name: "Others",
    value: 35,
  },
  {
    name: "Investment",
    value: 20,
  },
];

export const ExpenseStatisticsChart = () => {
  const whidth = useWindowWidth();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const gradients = [
    "url(#data1Gradient)",
    "url(#data2Gradient)",
    "url(#data3Gradient)",
    "url(#data4Gradient)",
  ];

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <ChartContainer
      config={chartConfig}
      className="h-full min-h-[200px] w-[70%]"
    >
      <PieChart accessibilityLayer data={chartData}>
        <defs>
          <linearGradient id="data1Gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4b516e" />
            <stop offset="100%" stopColor="#343C6A" />
          </linearGradient>
          <linearGradient id="data2Gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f09f53" />
            <stop offset="100%" stopColor="#FC7900" />
          </linearGradient>
          <linearGradient id="data3Gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5754eb" />
            <stop offset="100%" stopColor="#1814F3" />
          </linearGradient>
          <linearGradient id="data4Gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f362f6" />
            <stop offset="100%" stopColor="#FA00FF" />
          </linearGradient>
        </defs>
        {whidth < 1024 && <ChartTooltip content={<ChartTooltipContent />} />}
        <Pie
          data={chartData}
          strokeWidth={10}
          stroke="white"
          dataKey="value"
          labelLine={false}
          label={whidth >= 1024 && renderCustomizedLabel}
          onMouseLeave={onPieLeave}
        >
          {chartData.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={gradients[index]}
              onMouseEnter={(event) => onPieEnter(event, index)}
              fillOpacity={activeIndex === index ? 0.9 : 1}
            />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};
