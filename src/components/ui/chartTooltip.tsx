"use client";

import PropTypes from "prop-types";
import React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";
import { getPayloadConfigFromPayload, useChart } from "@/components/ui/chart";

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey ?? item.dataKey ?? item.name ?? "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);

      const value =
        !labelKey && typeof label === "string"
          ? (config[label]?.label ?? label)
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-white px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);

            const payloadItem = item.payload as {
              name: string;
              value: number | [number, number];
              color?: string;
              formatTooltipValue?: (value: any) => string;
            };

            const formatTooltip = itemConfig?.formatTooltipValue
              ? itemConfig?.formatTooltipValue
              : payloadItem.formatTooltipValue;

            const styles: React.CSSProperties = {
              backgroundColor: itemConfig?.color ?? payloadItem.color,
              borderColor: itemConfig?.color ?? payloadItem.color,
            };

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={styles}
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between gap-2 leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label ?? item.name} :
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {formatTooltip
                            ? formatTooltip(item.value)
                            : `${item.value as number}`}
                        </span>
                      )}
                    </div>
                  </>
                }
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";

ChartTooltipContent.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  className: PropTypes.string,
  indicator: PropTypes.oneOf(["line", "dot", "dashed"]),
  hideLabel: PropTypes.bool,
  hideIndicator: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelFormatter: PropTypes.func,
  labelClassName: PropTypes.string,
  formatter: PropTypes.func,
  nameKey: PropTypes.string,
  labelKey: PropTypes.string,
};

export { ChartTooltip, ChartTooltipContent };
