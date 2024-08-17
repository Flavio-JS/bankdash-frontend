import { cn } from "@/lib/utils";

export type ChartSessionProps = {
  title: string;
  children: React.ReactNode;
  labels?: { text: string; labelColor: string }[];
  chartType?: "line" | "bar" | "pie" | "donut";
  className?: string;
};

export const ChartSession = ({
  title,
  children,
  labels,
  className,
  chartType,
}: ChartSessionProps) => {
  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      <h3 className="text-xl font-bold text-[#343C6A] lg:text-2xl">{title}</h3>
      <div
        className={cn(
          // "flex h-full w-full flex-col gap-5 rounded-3xl bg-white",
          "flex h-[calc(100%-44px)] w-full flex-col gap-5 rounded-3xl bg-white",
          chartType !== "donut" && "p-7"
        )}
      >
        <div className="flex w-full justify-end gap-3">
          {labels?.map((label) => (
            <div
              key={label.text}
              className="flex items-center justify-center gap-3"
            >
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: label.labelColor }}
              />
              <span>{label.text}</span>
            </div>
          ))}
        </div>
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};
